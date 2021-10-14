import React, { FC } from 'react';
import { useSetRecoilState } from 'recoil';
import { DraggableCore } from 'react-draggable';
// state
import { elementState } from 'modules/design-tool/design-tool.state';
// helpers
import { useDebounce } from 'modules/core/helpers';
// interfaces
import { DraggableProps } from './Draggable.interface';

const Draggable: FC<DraggableProps> = ({
  id,
  isMouseDown,
  setIsMouseDown,
  children,
}) => {
  const setElement = useSetRecoilState(elementState(id));
  const setIsMouseDownDelayed = useDebounce(setIsMouseDown, 100);

  return (
    <DraggableCore
      scale={isMouseDown ? 1.1 : 1}
      onMouseDown={() => {
        setIsMouseDownDelayed(true);
      }}
      onStop={() => setIsMouseDownDelayed(false)}
      onDrag={(e: any) => {
        setElement((element) => ({
          ...element,
          style: {
            ...element.style,
            top: element.style.top + e.movementY,
            left: element.style.left + e.movementX,
          },
        }));
      }}
    >
      {children}
    </DraggableCore>
  );
};

export default Draggable;
