import React, { FC } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { Resizable as ReactResizable } from 'react-resizable';
// state
import { elementState, isSelectedState } from '../../design-tool.state';
// interfaces
import { ResizableProps } from './Resizable.inteface';
// styles
import { Handle } from './Resizable.styled';

const Resizable: FC<ResizableProps> = ({ id, children }) => {
  const [element, setElement] = useRecoilState(elementState(id));
  const isSelected = useRecoilValue(isSelectedState(id));

  return (
    <ReactResizable
      width={element.style.width}
      height={element.style.height}
      lockAspectRatio={element.type === 'image'}
      onResize={(_, { size }) => {
        setElement((element) => ({
          ...element,
          style: {
            ...element.style,
            width: Math.round(size.width),
            height: Math.round(size.height),
          },
        }));
      }}
      resizeHandles={['sw', 'se', 'nw', 'ne', 'w', 'e', 'n', 's']}
      handle={(h) => (
        <Handle className={`handle-${h}`} isVisible={isSelected} />
      )}
    >
      {children}
    </ReactResizable>
  );
};

export default Resizable;
