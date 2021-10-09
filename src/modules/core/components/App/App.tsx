import React, { FC } from 'react';
import { RecoilRoot } from 'recoil';
// components
import { AppContainer, GlobalStyles } from './App.styled';

const App: FC = () => {
  return (
    <RecoilRoot>
      <AppContainer></AppContainer>
      <GlobalStyles />
    </RecoilRoot>
  );
};

export default App;
