import React, { FC } from 'react';
// styles
import { ButtonGroupContainer } from './ButtonGroup.styled';

const ButtonGroup: FC = ({ children }) => {
  const childCount = React.Children.count(children);

  return (
    <ButtonGroupContainer>
      {React.Children.map(children, (child, i) => {
        return (
          <>
            {child}
            {i !== childCount - 1 && <div style={{ width: 20 }}></div>}
          </>
        );
      })}
    </ButtonGroupContainer>
  );
};

export default ButtonGroup;
