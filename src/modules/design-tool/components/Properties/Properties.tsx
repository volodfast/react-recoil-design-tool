import React, { FC } from 'react';
import { useRecoilState } from 'recoil';
// components
import ColorPicker from 'modules/core/components/ColorPicker';
import InputGroup from 'modules/core/components/InputGroup';
import StyleInput from 'modules/design-tool/components/StyleInput';
import RefreshButton from 'modules/core/components/RefreshButton';
// state
import { selectedElementState } from 'modules/design-tool/design-tool.state';
// helpers
import { getRandomImageUrl } from 'modules/core/helpers';
// interfaces
import {
  CommonState,
  ImageState,
  RectangleState,
} from 'modules/design-tool/design-tool.interfaces';
// styles
import { PropertiesContainer, PropertiesTitle } from './Properties.styled';

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

  const handleRefreshClick = () => {
    if (selectedElement) {
      const image = getRandomImageUrl();

      setSelectedElement({
        ...selectedElement,
        src: image.src,
      } as CommonState & ImageState);
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
        {selectedElement.type === 'image' && (
          <RefreshButton onClick={handleRefreshClick} />
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
