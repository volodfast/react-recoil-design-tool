import React, { FC } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
// components
import Element from '../Element';
// state
import {
  elementListState,
  selectedElementIdState,
} from '../../design-tool.state';
// styles
import { CanvasContainer } from './Canvas.styled';

const Canvas: FC = () => {
  const elementList = useRecoilValue(elementListState);
  const setSelectedElement = useSetRecoilState(selectedElementIdState);

  const handleCanvasClick = (
    ev: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (ev.currentTarget === ev.target) {
      setSelectedElement(null);
    }
  };

  return (
    <CanvasContainer onClick={handleCanvasClick}>
      {elementList.map((element) => {
        return <Element key={element} id={element} />;
      })}
    </CanvasContainer>
  );
};

export default Canvas;
