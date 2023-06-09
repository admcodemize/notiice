import styled from "styled-components";

export const StyledLoader = styled("div")`
  position: fixed;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: rgba(218, 222, 224, 0.3);
  z-index: 10;

  span.loader {
    width: 48px;
    height: 48px;
    display: inline-block;
    position: relative;
    transform: rotate(45deg);
  }

  span.loader::before {
    content: '';
    box-sizing: border-box;
    width: 24px;
    height: 24px;
    position: absolute;
    left: 0;
    top: -24px;
    animation: loader1 4s ease infinite;
  }

  span.loader::after {
    content: '';
    box-sizing: border-box;
    position: absolute;
    left: 0;
    top: 0;
    width: 24px;
    height: 24px;
    background: #2c3e50;
    opacity: 0.95;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    animation: loader2 2s ease infinite;
  }

  p.loader {
    margin: 24px 0 0 0;
  }

  @media (max-width: 425px) {
    left: 0;
  }

  @keyframes loader1 {
    0% {
      box-shadow: 0 24px rgba(255, 255, 255, 0), 24px 24px rgba(255, 255, 255, 0), 24px 48px rgba(255, 255, 255, 0), 0 48px rgba(255, 255, 255, 0);
    }
    12% {
      box-shadow: 0 24px #2c3e50, 24px 24px rgba(255, 255, 255, 0), 24px 48px rgba(255, 255, 255, 0), 0 48px rgba(255, 255, 255, 0);
    }
    25% {
      box-shadow: 0 24px #2c3e50, 24px 24px #2c3e50, 24px 48px rgba(255, 255, 255, 0), 0 48px rgba(255, 255, 255, 0);
    }
    37% {
      box-shadow: 0 24px #2c3e50, 24px 24px #2c3e50, 24px 48px #2c3e50, 0 48px rgba(255, 255, 255, 0);
    }
    50% {
      box-shadow: 0 24px #2c3e50, 24px 24px #2c3e50, 24px 48px #2c3e50, 0 48px #2c3e50;
    }
    62% {
      box-shadow: 0 24px rgba(255, 255, 255, 0), 24px 24px #2c3e50, 24px 48px #2c3e50, 0 48px #2c3e50;
    }
    75% {
      box-shadow: 0 24px rgba(255, 255, 255, 0), 24px 24px rgba(255, 255, 255, 0), 24px 48px #2c3e50, 0 48px #2c3e50;
    }
    87% {
      box-shadow: 0 24px rgba(255, 255, 255, 0), 24px 24px rgba(255, 255, 255, 0), 24px 48px rgba(255, 255, 255, 0), 0 48px #2c3e50;
    }
    100% {
      box-shadow: 0 24px rgba(255, 255, 255, 0), 24px 24px rgba(255, 255, 255, 0), 24px 48px rgba(255, 255, 255, 0), 0 48px rgba(255, 255, 255, 0);
    }
  }

  @keyframes loader2 {
    0% {
      transform: translate(0, 0) rotateX(0) rotateY(0);
    }
    25% {
      transform: translate(100%, 0) rotateX(0) rotateY(180deg);
    }
    50% {
      transform: translate(100%, 100%) rotateX(-180deg) rotateY(180deg);
    }
    75% {
      transform: translate(0, 100%) rotateX(-180deg) rotateY(360deg);
    }
    100% {
      transform: translate(0, 0) rotateX(0) rotateY(360deg);
    }
  }
`;