// constants

import { CIRCLE_RADIUS, CENTER_X, CENTER_Y } from '@/constants/canvas';

export const BaseCircle = () => {
  return (
    <circle
      cx={CENTER_X}
      cy={CENTER_Y}
      fill="none"
      r={CIRCLE_RADIUS}
      stroke="var(--color-text)"
      strokeWidth="2"
    />
  );
};
