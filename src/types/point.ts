export interface PointPosition {
  x: number;
  y: number;
  angleRad: number;
}

export interface PointProps extends Pick<PointPosition, 'x' | 'y'> {
  index: number;
  text: string;
  isTopCircle?: boolean;
}
