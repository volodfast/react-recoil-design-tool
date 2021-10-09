export type CommonStyle = {
  top: number;
  left: number;
  width: number;
  height: number;
};

export type CommonState = {
  style: CommonStyle;
};

export type RectangleState = {
  type: 'rectangle';
  color: string;
};

export type ImageState = {
  type: 'image';
  src: string;
};

export type ElementState = CommonState & (RectangleState | ImageState);
