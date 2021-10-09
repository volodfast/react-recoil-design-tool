import styled, { css } from 'styled-components';
import { colors } from '../../../core/constants';

export const Handle = styled.span<{ isVisible: boolean }>`
  position: absolute;
  width: 10px;
  height: 10px;
  background-color: ${colors.primaryLight};
  border-radius: 50%;
  opacity: 0;
  pointer-events: none;
  transition: 0.1s opacity ease-in-out;
  ${(props) =>
    props.isVisible &&
    css`
      opacity: 1;
      pointer-events: initial;
    `}
  &.handle-sw {
    bottom: 0;
    left: 0;
    cursor: sw-resize;
  }
  &.handle-se {
    bottom: 0;
    right: 0;
    cursor: se-resize;
  }
  &.handle-nw {
    top: 0;
    left: 0;
    cursor: nw-resize;
  }
  &.handle-ne {
    top: 0;
    right: 0;
    cursor: ne-resize;
  }
  &.handle-w,
  &.handle-e {
    top: 50%;
    margin-top: -6px;
    cursor: ew-resize;
  }
  &.handle-w {
    left: -6px;
  }
  &.handle-e {
    right: -6px;
  }
  &.handle-n,
  &.handle-s {
    left: 50%;
    margin-left: -6px;
    cursor: ns-resize;
  }
  &.handle-n {
    top: -6px;
  }
  &.handle-s {
    bottom: -6px;
  }
`;
