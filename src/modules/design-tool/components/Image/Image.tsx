import React, { FC } from 'react';
// interfaces
import { ImageProps } from './Image.interface';

const Image: FC<ImageProps> = () => {
  return (
    <div
      style={{
        backgroundImage: "url('')",
        backgroundSize: '100% 100%',
        flex: 1,
      }}
    />
  );
};

export default Image;
