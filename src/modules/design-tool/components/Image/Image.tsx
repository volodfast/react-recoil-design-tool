import React, { FC } from 'react';
import { useRecoilValue } from 'recoil';
import { imageDimensionsState, imageSrcState } from '../../design-tool.state';
// interfaces
import { ImageProps } from './Image.interface';

const Image: FC<ImageProps> = ({ id }) => {
  const imageSrc = useRecoilValue(imageSrcState(id));
  const dimensions = useRecoilValue(imageDimensionsState(id));

  if (!imageSrc) {
    return null;
  }

  return (
    <div
      style={{
        backgroundImage: `url('${imageSrc}')`,
        backgroundSize: '100% 100%',
        flex: 1,
      }}
    />
  );
};

export default Image;
