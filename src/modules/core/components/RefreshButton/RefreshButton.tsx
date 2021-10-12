import React, { FC } from 'react';
import { FiRefreshCw } from 'react-icons/fi';
// components
import IconButton from '../IconButton';
// interfaces
import { RefreshButtonProps } from './RefreshButton.interface';
// styles
import {
  RefreshButtonContainer,
  RefreshButtonLabel,
} from './RefreshButton.styled';

const RefreshButton: FC<RefreshButtonProps> = ({ onClick }) => {
  return (
    <RefreshButtonContainer>
      <RefreshButtonLabel>Image</RefreshButtonLabel>
      <IconButton icon={FiRefreshCw} onClick={onClick} />
    </RefreshButtonContainer>
  );
};

export default RefreshButton;
