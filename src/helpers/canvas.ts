// types

import { PointPosition } from '@/types/point';

export const calculatePointPosition = (
  index: number,
  totalPoints: number,
  centerX: number,
  centerY: number,
  radius: number
): PointPosition => {
  if (totalPoints === 0) {
    return { x: centerX, y: centerY, angleRad: 0 };
  }

  const angleRad = ((index * 360) / totalPoints - 90) * (Math.PI / 180);
  const x = centerX + radius * Math.cos(angleRad);
  const y = centerY + radius * Math.sin(angleRad);

  return { x, y, angleRad: angleRad };
};
