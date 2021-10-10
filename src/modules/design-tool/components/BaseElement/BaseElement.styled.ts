import styled, { css } from 'styled-components';
import { colors } from '../../../core/constants';

export const BaseElementContainer = styled.div<{
  isMouseDown: boolean;
  isSelected: boolean;
}>`
  position: absolute;
  box-shadow: 0 0 0 0 transparent;
  border-radius: 20px;
  width: 200px;
  height: 170px;
  backdrop-filter: blur(10px);
  transition: 0.1s transform ease-out, 0.1s box-shadow ease-out,
    0.1s border-color ease-out;
  border: 2px solid
    ${(props) => (props.isSelected ? colors.primary : 'transparent')};
  background-color: ${colors.lightGray};
  ${(props) =>
    props.isMouseDown &&
    css`
      transform: scale(1.2);
      box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.3);
    `}
`;

export const BaseElementInnerContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 20px;
`;
