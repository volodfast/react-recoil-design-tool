import React, { FC } from 'react';
// components
import Canvas from 'modules/design-tool/components/Canvas';
import LeftSidebar from 'modules/design-tool/components/LeftSidebar';
import RightSidebar from 'modules/design-tool/components/RightSidebar';
// styles
import { DesignToolPageContainer } from './design-tool.styled';

const DesignToolPage: FC = () => {
  return (
    <DesignToolPageContainer>
      <LeftSidebar />
      <Canvas />
      <RightSidebar />
    </DesignToolPageContainer>
  );
};

export default DesignToolPage;
