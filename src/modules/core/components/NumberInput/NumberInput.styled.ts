import styled from 'styled-components';
import { colors } from 'modules/core/constants';

export const NumberInputContainer = styled.div``;

export const NumberInputLabel = styled.div`
  font-weight: 600;
  margin-bottom: 10px;
`;

export const NumberInputWrapper = styled.input`
  background-color: ${colors.darkGray};
  border-radius: 10px;
  padding: 10px;
  border: 0;
  width: 100%;
  outline: none;
  color: white;
  font-size: 16px;
`;
