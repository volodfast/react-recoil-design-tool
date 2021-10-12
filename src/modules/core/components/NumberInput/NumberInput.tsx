import React, { FC } from 'react';
// interfaces
import { NumberInputProps } from './NumberInput.interface';
// styles
import {
  NumberInputContainer,
  NumberInputLabel,
  NumberInputWrapper,
} from './NumberInput.styled';

const NumberInput: FC<NumberInputProps> = ({ label, value, onChange }) => {
  const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    onChange(Number(ev.currentTarget.value));
  };

  return (
    <NumberInputContainer>
      <NumberInputLabel>{label}</NumberInputLabel>
      <NumberInputWrapper value={value} onChange={handleChange} />
    </NumberInputContainer>
  );
};

export default NumberInput;
