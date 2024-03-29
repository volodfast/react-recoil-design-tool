import styled, { keyframes } from 'styled-components';

const shimmer = keyframes`
  100% {
    transform: translateX(100%);
  }
`;

export const DetailContainer = styled.div``;

export const DetailLabel = styled.div`
  font-weight: 600;
  margin-bottom: 10px;
`;

export const DetailContent = styled.div`
  word-break: break-word;
`;

export const DetailSkeleton = styled.div`
  height: 18px;
  border-radius: 9px;
  position: relative;
  overflow: hidden;
  background-color: #4d4f50;
  &::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform: translateX(-100%);
    background-image: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 0,
      rgba(255, 255, 255, 0.05) 20%,
      rgba(255, 255, 255, 0.2) 60%,
      rgba(255, 255, 255, 0)
    );
    animation: ${shimmer} 1.5s infinite;
    content: '';
  }
`;
