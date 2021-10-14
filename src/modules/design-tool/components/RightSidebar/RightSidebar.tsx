import React, { FC } from 'react';
// components
import Properties from 'modules/design-tool/components/Properties';
// styles
import { RightSidebarContainer } from './RightSidebar.styled';

const RightSidebar: FC = () => {
  return (
    <RightSidebarContainer>
      <Properties />
    </RightSidebarContainer>
  );
};

export default RightSidebar;
