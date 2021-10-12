import React, { FC, useRef, useState } from 'react';
import { SketchPicker } from 'react-color';
import useOnClickOutside from 'use-onclickoutside';
// interfaces
import { ColorPickerProps } from './ColorPicker.interface';
// styles
import {
  Color,
  ColorPickerContainer,
  ColorPickerWrapper,
  Label,
  Popover,
  PopoverContainer,
} from './ColorPicker.styled';

const ColorPicker: FC<ColorPickerProps> = ({ value, onChange }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useOnClickOutside(ref, () => setIsVisible(false));

  return (
    <ColorPickerContainer>
      <Label>Color</Label>
      <ColorPickerWrapper ref={ref}>
        <Color
          style={{ backgroundColor: value }}
          onClick={() => setIsVisible((prev) => !prev)}
        />
        <PopoverContainer>
          {isVisible && (
            <Popover>
              <SketchPicker
                color={value}
                onChange={({ hex }) => onChange(hex)}
              />
            </Popover>
          )}
        </PopoverContainer>
      </ColorPickerWrapper>
    </ColorPickerContainer>
  );
};

export default ColorPicker;
