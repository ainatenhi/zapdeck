// types

import { PointProps } from '@/types/point';

// components

import { Label } from '@/components/Label';
import { LabelBackground } from '@/components/LabelBackground';
import { PointMarker } from '@/components/PointMarker';

// constants

import {
  CENTER_X,
  SMALL_CIRCLE_RADIUS,
  RECT_WIDTH,
  RECT_HEIGHT,
  RECT_GAP,
} from '@/constants/canvas';

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
      <PointMarker index={index} x={x} y={y} />
      <LabelBackground x={rectX} y={rectY} />
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
