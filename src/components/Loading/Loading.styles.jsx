import styled, { keyframes } from "styled-components";

const ellipsis1 = keyframes`
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
`;

const ellipsis2 = keyframes`
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(24px, 0);
  }
`;

const ellipsis3 = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
`;

export const EllipsisContainer = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
`;

export const EllipsisDot = styled.div`
  position: absolute;
  top: 33px;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: #fff;
  animation-timing-function: cubic-bezier(0, 1, 1, 0);

  background-color: #bcbcbc;
`;

export const EllipsisDot1 = styled(EllipsisDot)`
  left: 8px;
  animation: ${ellipsis1} 0.6s infinite;
`;

export const EllipsisDot2 = styled(EllipsisDot)`
  left: 8px;
  animation: ${ellipsis2} 0.6s infinite;
`;

export const EllipsisDot3 = styled(EllipsisDot)`
  left: 32px;
  animation: ${ellipsis2} 0.6s infinite;
`;

export const EllipsisDot4 = styled(EllipsisDot)`
  left: 56px;
  animation: ${ellipsis3} 0.6s infinite;
`;

export const LoadingContainer = styled.div`
  width: 100%;
  min-height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoadingOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* Adjust the background color and opacity as desired */
  background-color: rgba(0, 0, 0, 0.5);
  /* Ensure the loader appears on top of other elements */
  z-index: 9999;
`;
