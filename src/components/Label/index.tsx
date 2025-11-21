// types

import { LabelProps } from '@/types/point';

// styles

import styles from './style.module.scss';

export const Label = ({
  x,
  y,
  width,
  height,
  text,
  isRightHalf,
}: LabelProps) => {
  return (
    <foreignObject x={x} y={y} width={width} height={height}>
      <div
        className={`${styles.textContainer} ${
          isRightHalf ? styles.textLeft : styles.textRight
        }`}
      >
        {text}
      </div>
    </foreignObject>
  );
};
