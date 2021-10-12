import React, { FC } from 'react';
import { useRecoilState } from 'recoil';
// components
import ColorPicker from '../../../core/components/ColorPicker';
import InputGroup from '../../../core/components/InputGroup';
import StyleInput from '../StyleInput';
// state
import { selectedElementState } from '../../design-tool.state';
// styles
import { PropertiesContainer, PropertiesTitle } from './Properties.styled';
// interfaces
import { CommonState, RectangleState } from '../../design-tool.interfaces';

const Properties: FC = () => {
  const [selectedElement, setSelectedElement] =
    useRecoilState(selectedElementState);

  const handleColorChange = (color: string) => {
    if (selectedElement) {
      setSelectedElement({
        ...selectedElement,
        color,
      } as CommonState & RectangleState);
    }
  };

  if (!selectedElement) {
    return null;
  }

  return (
    <PropertiesContainer>
      <PropertiesTitle>Properties</PropertiesTitle>
      <InputGroup>
        {selectedElement.type === 'rectangle' && (
          <ColorPicker
            value={selectedElement.color}
            onChange={handleColorChange}
          />
        )}
        <StyleInput property="top" />
        <StyleInput property="left" />
        <StyleInput property="width" />
        <StyleInput property="height" />
      </InputGroup>
    </PropertiesContainer>
  );
};

export default Properties;
