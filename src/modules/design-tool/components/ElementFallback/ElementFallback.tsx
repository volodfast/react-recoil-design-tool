import React, { FC } from 'react';
// components
import Spinner from '../../../core/components/Spinner';
// styles
import { ElementFallbackContainer } from './ElementFallback.styled';

const ElementFallback: FC = () => {
  return (
    <ElementFallbackContainer>
      <Spinner />
    </ElementFallbackContainer>
  );
};

export default ElementFallback;
