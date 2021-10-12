import React, { FC } from 'react';
import { useRecoilState } from 'recoil';
// components
import NumberInput from '../../../core/components/NumberInput';
// state
import { selectedElementState } from '../../design-tool.state';
// helpers
import { capitalizeFirst } from '../../../core/helpers';
// interfaces
import { StyleInputProps } from './StyleInput.inteface';

const StyleInput: FC<StyleInputProps> = ({ property }) => {
  const [selectedElement, setSelectedElement] =
    useRecoilState(selectedElementState);

  const handleChange = (value: number) => {
    if (selectedElement) {
      setSelectedElement({
        ...selectedElement,
        style: {
          ...selectedElement.style,
          [property]: value,
        },
      });
    }
  };

  if (!selectedElement) {
    return null;
  }

  return (
    <NumberInput
      label={capitalizeFirst(property)}
      value={selectedElement.style[property]}
      onChange={handleChange}
    />
  );
};

export default StyleInput;
