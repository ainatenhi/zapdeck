// constants

import { RECT_WIDTH, RECT_HEIGHT, RECT_BORDER_RADIUS } from '@/constants/canvas';

interface LabelBackgroundProps {
  x: number;
  y: number;
}

export const LabelBackground = ({ x, y }: LabelBackgroundProps) => {
  return (
    <rect
      fill="var(--color-common-white)"
      height={RECT_HEIGHT}
      rx={RECT_BORDER_RADIUS}
      ry={RECT_BORDER_RADIUS}
      stroke="none"
      width={RECT_WIDTH}
      x={x}
      y={y}
    />
  );
};
