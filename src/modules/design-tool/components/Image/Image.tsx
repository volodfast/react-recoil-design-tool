import React, { FC, useEffect } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
// state
import {
  elementState,
  imageDimensionsState,
  imageSrcState,
} from 'modules/design-tool/design-tool.state';
// interfaces
import { ImageProps } from './Image.interface';

const useSetDefaultDimensions = (id: number) => {
  const imageDimensions = useRecoilValue(imageDimensionsState(id));

  const width = imageDimensions?.width;
  const height = imageDimensions?.height;

  const setElement = useSetRecoilState(elementState(id));

  useEffect(() => {
    if (!width || !height) {
      return;
    }

    setElement((element) => {
      return {
        ...element,
        style: {
          ...element.style,
          width,
          height,
        },
      };
    });
  }, [width, height, setElement]);
};

const Image: FC<ImageProps> = ({ id }) => {
  const imageSrc = useRecoilValue(imageSrcState(id));

  useSetDefaultDimensions(id);

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
