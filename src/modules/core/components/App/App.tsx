import React, { Suspense, FC } from 'react';
import { RecoilRoot } from 'recoil';
// components
import Loading from 'modules/core/components/Loading';
import DesignToolPage from 'pages/design-tool/design-tool';
// styles
import { GlobalStyles } from './App.styled';

const App: FC = () => {
  return (
    <RecoilRoot>
      <Suspense fallback={<Loading />}>
        <DesignToolPage />
        <GlobalStyles />
      </Suspense>
    </RecoilRoot>
  );
};

export default App;
