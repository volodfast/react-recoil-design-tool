import React, { FC, Suspense } from 'react';
import { useRecoilValue } from 'recoil';
import hexToRgba from 'hex-to-rgba';
// components
import BaseElement from '../BaseElement';
import ElementFallback from '../ElementFallback';
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
      <Suspense fallback={<ElementFallback />}>
        <Image id={id} />
      </Suspense>
    </BaseElement>
  );
};

export default Element;
