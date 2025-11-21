// constants

import { SMALL_CIRCLE_RADIUS } from '@/constants/canvas';

// styles

import styles from './style.module.scss';

interface PointMarkerProps {
  index: number;
  x: number;
  y: number;
}

export const PointMarker = ({ index, x, y }: PointMarkerProps) => {
  return (
    <g>
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
    </g>
  );
};
