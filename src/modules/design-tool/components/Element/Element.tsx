import React, { FC, Suspense } from 'react';
import { useRecoilValue } from 'recoil';
import hexToRgba from 'hex-to-rgba';
// components
import BaseElement from 'modules/design-tool/components/BaseElement';
import ElementFallback from 'modules/design-tool/components/ElementFallback';
import Image from 'modules/design-tool/components/Image';
// state
import { elementState } from 'modules/design-tool/design-tool.state';
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
