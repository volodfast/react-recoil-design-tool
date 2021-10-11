import React, { FC } from 'react';
// interfaces
import { IconButtonProps } from './IconButton.interfaces';
// styles
import { IconButtonContainer } from './IconButton.styled';

const IconButton: FC<IconButtonProps> = ({ icon: Icon, onClick }) => {
  return (
    <IconButtonContainer onClick={onClick}>
      <Icon color="white" size={30} />
    </IconButtonContainer>
  );
};

export default IconButton;
