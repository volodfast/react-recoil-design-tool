import React, { FC, useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
// components
import Resizable from '../Resizable';
import Draggable from '../Draggable';
// state
import {
  elementState,
  isSelectedState,
  selectedElementIdState,
} from '../../design-tool.state';
// interfaces
import { BaseElementProps } from './BaseElement.interface';
// styles
import {
  BaseElementContainer,
  BaseElementInnerContainer,
} from './BaseElement.styled';

const BaseElement: FC<BaseElementProps> = ({ id, style, children }) => {
  const element = useRecoilValue(elementState(id));
  const [isMouseDown, setIsMouseDown] = useState(false);
  const setIsSelectedElement = useSetRecoilState(selectedElementIdState);
  const isSelected = useRecoilValue(isSelectedState(id));

  return (
    <Resizable id={id}>
      <BaseElementContainer
        style={{ ...element.style, ...style }}
        isMouseDown={isMouseDown}
        isSelected={isSelected}
        onMouseDown={() => setIsSelectedElement(id)}
      >
        <Draggable
          id={id}
          isMouseDown={isMouseDown}
          setIsMouseDown={setIsMouseDown}
        >
          <BaseElementInnerContainer>{children}</BaseElementInnerContainer>
        </Draggable>
      </BaseElementContainer>
    </Resizable>
  );
};

export default BaseElement;
