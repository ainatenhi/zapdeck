import { useState } from 'react';
import styles from './style.module.scss';

// components

import { Button } from '@components/Button';

const CANVAS_WIDTH = 1920;
const CANVAS_HEIGHT = 1080;
const CIRCLE_DIAMETER = 688;
const CIRCLE_RADIUS = CIRCLE_DIAMETER / 2;
const CENTER_X = CANVAS_WIDTH / 2;
const CENTER_Y = CANVAS_HEIGHT / 2;
const SMALL_CIRCLE_RADIUS = CIRCLE_DIAMETER / 4 / 2;
const SMALL_CIRCLE_DIAMETER = SMALL_CIRCLE_RADIUS * 2;
const RECT_WIDTH = SMALL_CIRCLE_DIAMETER * 2;
const RECT_HEIGHT = SMALL_CIRCLE_DIAMETER / 2;
const RECT_PADDING = 20;
const RECT_GAP = 16;
const MAX_POINTS = 9;

const PROMPT_TEXTS = [
  'Generate creative image prompt',
  'Art style and aesthetic',
  'Detailed scene with multiple elements and composition',
  'Color palette',
  'Lighting and atmosphere settings',
  'Composition and perspective view angle',
  'Subject focus',
  'Background details and environmental atmosphere',
  'Quality and resolution settings',
];

export const Canvas = () => {
  const [visiblePoints, setVisiblePoints] = useState(0);

  const handleGeneratePrompt = () => {
    if (visiblePoints < MAX_POINTS) {
      setVisiblePoints(visiblePoints + 1);
    }
  };
  const smallCircles = [];

  for (let i = 0; i < visiblePoints; i++) {
    const angle = ((i * 360) / visiblePoints - 90) * (Math.PI / 180);
    const x = CENTER_X + CIRCLE_RADIUS * Math.cos(angle);
    const y = CENTER_Y + CIRCLE_RADIUS * Math.sin(angle);

    const isRightHalf = x > CENTER_X;
    const rectX = isRightHalf
      ? x + SMALL_CIRCLE_RADIUS + RECT_GAP
      : x - SMALL_CIRCLE_RADIUS - RECT_GAP - RECT_WIDTH;

    const isTopCircle = i === 0 && visiblePoints === MAX_POINTS;
    const rectY = isTopCircle
      ? y - RECT_HEIGHT / 2 - SMALL_CIRCLE_RADIUS
      : y - RECT_HEIGHT / 2;

    const textX = isRightHalf
      ? rectX + RECT_PADDING
      : rectX + RECT_WIDTH - RECT_PADDING;
    const textAnchor = isRightHalf ? 'start' : 'end';

    smallCircles.push(
      <g key={`small-${i}`}>
        <rect
          x={rectX}
          y={rectY}
          width={RECT_WIDTH}
          height={RECT_HEIGHT}
          fill="rgba(255, 255, 255, 1)"
          stroke="none"
          rx="16"
          ry="16"
        />
        <circle
          cx={x}
          cy={y}
          r={SMALL_CIRCLE_RADIUS}
          fill="var(--color-primary)"
          stroke="none"
        />
        <text
          x={x}
          y={y}
          textAnchor="middle"
          dominantBaseline="central"
          fontSize="64"
          fill="white"
          fontFamily="Poppins, sans-serif"
          fontWeight="500"
          style={{ userSelect: 'none' }}
        >
          {i + 1}
        </text>
        <foreignObject
          x={rectX}
          y={rectY}
          width={RECT_WIDTH}
          height={RECT_HEIGHT}
        >
          <div
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              padding: `0 ${RECT_PADDING}px`,
              fontSize: '20px',
              fontWeight: 400,
              textAlign: isRightHalf ? 'left' : 'right',
              wordWrap: 'break-word',
              overflow: 'hidden',
            }}
          >
            {PROMPT_TEXTS[i]}
          </div>
        </foreignObject>
      </g>
    );
  }

  return (
    <div className={styles.canvasWrapper}>
      <Button
        onClick={handleGeneratePrompt}
        disabled={visiblePoints >= MAX_POINTS}
      >
        Generate Prompt
      </Button>
      <div className={styles.canvas}>
        <svg
          width={CANVAS_WIDTH}
          height={CANVAS_HEIGHT}
          viewBox={`0 0 ${CANVAS_WIDTH} ${CANVAS_HEIGHT}`}
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx={CENTER_X}
            cy={CENTER_Y}
            r={CIRCLE_RADIUS}
            fill="none"
            stroke="black"
            strokeWidth="2"
          />
          {smallCircles}
        </svg>
      </div>
    </div>
  );
};
