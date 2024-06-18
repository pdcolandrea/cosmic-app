export type Star = {
  x: number;
  y: number;
  size: number;
  opacity: number;
  color: string;
};

export type FullStar = {
  layerFactor: number;
  shape: 'sparkling' | 'circle';
} & Star;
