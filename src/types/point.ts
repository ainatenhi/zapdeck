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

export interface LabelProps {
  x: number;
  y: number;
  width: number;
  height: number;
  text: string;
  isRightHalf: boolean;
}
