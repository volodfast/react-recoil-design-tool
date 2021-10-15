import React, { FC } from 'react';
// components
import Properties from 'modules/design-tool/components/Properties';
import Details from 'modules/design-tool/components/Details';
// styles
import { RightSidebarContainer } from './RightSidebar.styled';

const RightSidebar: FC = () => {
  return (
    <RightSidebarContainer>
      <Properties />
      <Details />
    </RightSidebarContainer>
  );
};

export default RightSidebar;
