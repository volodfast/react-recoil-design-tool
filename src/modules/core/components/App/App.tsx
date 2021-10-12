import React, { FC } from 'react';
import { RecoilRoot } from 'recoil';
// components
import DesignToolPage from '../../../../pages/design-tool/design-tool';
// styles
import { GlobalStyles } from './App.styled';

const App: FC = () => {
  return (
    <RecoilRoot>
      <DesignToolPage />
      <GlobalStyles />
    </RecoilRoot>
  );
};

export default App;
