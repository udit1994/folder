import styled, { keyframes } from "styled-components";

const slideUp = keyframes`
  100% {
    transform: translatey(0);
  }
`;

const Modal = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(155, 155, 155, 0.7));
  height: 100vh;
  position: fixed;
  width: 100vw;
  z-index: 1;
  top: 0;
  left: 0;
`;

export default Modal;
