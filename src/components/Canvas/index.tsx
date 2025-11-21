import { useState } from 'react';

// mocks

import { PROMPT_TEXTS } from '@/mocks/prompts';

// constants

import {
  CANVAS_HEIGHT,
  CANVAS_WIDTH,
  CENTER_X,
  CENTER_Y,
  CIRCLE_RADIUS,
  MAX_POINTS,
} from '@/constants/canvas';

// helpers

import { calculatePointPosition } from '@/helpers/canvas';

// styles

import styles from './style.module.scss';

// components

import { BaseCircle } from '@components/BaseCircle';
import { Button } from '@components/Button';
import { Point } from '@components/Point';

export const Canvas = () => {
  const [visiblePoints, setVisiblePoints] = useState(0);

  const isMaxPointsReached = visiblePoints >= MAX_POINTS;

  const handleGeneratePrompt = () => {
    setVisiblePoints((prev) => (prev < MAX_POINTS ? prev + 1 : prev));
  };

  const points = Array.from({ length: visiblePoints }, (_, i) => {
    const { x, y } = calculatePointPosition(
      i,
      visiblePoints,
      CENTER_X,
      CENTER_Y,
      CIRCLE_RADIUS
    );

    const isTopCircle = i === 0 && visiblePoints === MAX_POINTS;

    return (
      <Point
        key={`point-${i}`}
        index={i}
        isTopCircle={isTopCircle}
        text={PROMPT_TEXTS[i]}
        x={x}
        y={y}
      />
    );
  });

  return (
    <div className={styles.canvasWrapper}>
      <Button onClick={handleGeneratePrompt} disabled={isMaxPointsReached}>
        Generate Prompt
      </Button>
      <div className={styles.canvas}>
        <svg
          width={CANVAS_WIDTH}
          height={CANVAS_HEIGHT}
          viewBox={`0 0 ${CANVAS_WIDTH} ${CANVAS_HEIGHT}`}
          xmlns="http://www.w3.org/2000/svg"
        >
          <BaseCircle />
          {points}
        </svg>
      </div>
    </div>
  );
};
