import React, { FC, Suspense } from 'react';
// components
import Properties from 'modules/design-tool/components/Properties';
import Details, {
  DetailsFallback,
} from 'modules/design-tool/components/Details';
// styles
import { RightSidebarContainer } from './RightSidebar.styled';

const RightSidebar: FC = () => {
  return (
    <RightSidebarContainer>
      <Properties />
      <Suspense fallback={<DetailsFallback />}>
        <Details />
      </Suspense>
    </RightSidebarContainer>
  );
};

export default RightSidebar;
