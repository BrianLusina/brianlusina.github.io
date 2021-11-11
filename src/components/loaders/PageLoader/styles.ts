import styled, { keyframes } from 'styled-components';

/* Animation */
const SpinnerKeyFrame = keyframes`
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
`;

/* Absolute Center Spinner */
// eslint-disable-next-line import/prefer-default-export
export const PageLoaderContainer = styled.div`
  position: fixed;
  z-index: 999;
  height: 2em;
  width: 2em;
  overflow: show;
  margin: auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  /* Transparent Overlay */
  :before {
    content: '';
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(rgba(20, 20, 20, 0.8), rgba(0, 0, 0, 0.8));
  }
  /* :not(:required) hides these rules from IE9 and below */
  :not(:required) {
    /* hide "loading..." text */
    /* stylelint-disable */
    font: 0/0 a;
    color: transparent;
    text-shadow: none;
    background-color: transparent;
    border: 0;
  }
  :not(:required):after {
    content: '';
    display: block;
    font-size: 10px;
    width: 1em;
    height: 1em;
    margin-top: -0.5em;
    animation: ${SpinnerKeyFrame} 150ms infinite linear;
    border-radius: 0.5em;
    box-shadow: rgba(255, 255, 255, 0.75) 1.5em 0 0 0, rgba(255, 255, 255, 0.75) 1.1em 1.1em 0 0,
      rgba(255, 255, 255, 0.75) 0 1.5em 0 0, rgba(255, 255, 255, 0.75) -1.1em 1.1em 0 0,
      rgba(255, 255, 255, 0.75) -1.5em 0 0 0, rgba(255, 255, 255, 0.75) -1.1em -1.1em 0 0,
      rgba(255, 255, 255, 0.75) 0 -1.5em 0 0, rgba(255, 255, 255, 0.75) 1.1em -1.1em 0 0;
  }
`;