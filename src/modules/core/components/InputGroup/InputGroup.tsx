import React, { FC } from 'react';

const InputGroup: FC = ({ children }) => {
  const childCount = React.Children.count(children);

  return (
    <div>
      {React.Children.map(children, (child, index) => {
        if (!child) {
          return null;
        }

        return (
          <>
            {child}
            {index !== childCount - 1 && <div style={{ height: 20 }} />}
          </>
        );
      })}
    </div>
  );
};

export default InputGroup;
