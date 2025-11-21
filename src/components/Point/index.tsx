// types

import { PointProps } from '@/types/point';

// components

import { Label } from '@/components/Label';

// constants

import {
  CENTER_X,
  SMALL_CIRCLE_RADIUS,
  RECT_WIDTH,
  RECT_HEIGHT,
  RECT_GAP,
  RECT_BORDER_RADIUS,
} from '@/constants/canvas';

// styles

import styles from './style.module.scss';

export const Point = ({
  index,
  isTopCircle = false,
  text,
  x,
  y,
}: PointProps) => {
  const isRightHalf = x > CENTER_X;
  const rectX = isRightHalf
    ? x + SMALL_CIRCLE_RADIUS + RECT_GAP
    : x - SMALL_CIRCLE_RADIUS - RECT_GAP - RECT_WIDTH;

  const rectY = isTopCircle
    ? y - RECT_HEIGHT / 2 - SMALL_CIRCLE_RADIUS
    : y - RECT_HEIGHT / 2;

  return (
    <g>
      <rect
        fill="var(--color-common-white)"
        height={RECT_HEIGHT}
        rx={RECT_BORDER_RADIUS}
        ry={RECT_BORDER_RADIUS}
        stroke="none"
        width={RECT_WIDTH}
        x={rectX}
        y={rectY}
      />
      <circle
        cx={x}
        cy={y}
        fill="var(--color-primary)"
        r={SMALL_CIRCLE_RADIUS}
        stroke="none"
      />
      <text
        dominantBaseline="central"
        fill="var(--color-common-white)"
        fontWeight="500"
        className={styles.pointNumber}
        textAnchor="middle"
        x={x}
        y={y}
      >
        {index + 1}
      </text>
      <Label
        x={rectX}
        y={rectY}
        width={RECT_WIDTH}
        height={RECT_HEIGHT}
        text={text}
        isRightHalf={isRightHalf}
      />
    </g>
  );
};
