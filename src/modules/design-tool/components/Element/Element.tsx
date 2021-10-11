import React, { FC } from 'react';
import { useRecoilValue } from 'recoil';
import hexToRgba from 'hex-to-rgba';
// components
import BaseElement from '../BaseElement';
import Image from '../Image';
// state
import { elementState } from '../../design-tool.state';
// interfaces
import { ElementProps } from './Element.interface';

const Element: FC<ElementProps> = ({ id }) => {
  const element = useRecoilValue(elementState(id));

  const backgroundColor =
    element.type === 'rectangle' ? hexToRgba(element.color, 0.6) : undefined;

  return (
    <BaseElement id={id} style={{ backgroundColor }}>
      <Image id={id} />
    </BaseElement>
  );
};

export default Element;
