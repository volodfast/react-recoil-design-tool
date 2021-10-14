import React, { FC } from 'react';
// styles
import { SpinnerContainer, SpinnerPath } from './Spinner.styled';

const Spinner: FC = () => {
  return (
    <SpinnerContainer width="30px" height="30px" viewBox="0 0 66 66">
      <SpinnerPath
        fill="none"
        strokeWidth="6"
        strokeLinecap="round"
        cx="33"
        cy="33"
        r="30"
      />
    </SpinnerContainer>
  );
};

export default Spinner;
