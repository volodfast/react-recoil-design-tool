import React, { FC } from 'react';
import { FiSquare, FiImage } from 'react-icons/fi';
// components
import ButtonGroup from 'modules/core/components/ButtonGroup';
import IconButton from 'modules/core/components/IconButton';
// helpers
import { useInsertElement } from './LeftSidebar.helpers';
// styles
import { LeftSidebarContainer, LeftSidebarTitle } from './LeftSidebar.styled';

const LeftSidebar: FC = () => {
  const insertElement = useInsertElement();

  return (
    <LeftSidebarContainer>
      <LeftSidebarTitle>Insert</LeftSidebarTitle>
      <ButtonGroup>
        <IconButton
          icon={FiSquare}
          onClick={() => insertElement('rectangle')}
        />
        <IconButton icon={FiImage} onClick={() => insertElement('image')} />
      </ButtonGroup>
    </LeftSidebarContainer>
  );
};

export default LeftSidebar;
