import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    --webkit-scrollbar-width: 2px;
    --webkit-scrollbar-height: 100%;
    --webkit-scrollbar-background: #fafafa;
    --webkit-scrollbar-thumb-height: 40px;
    --webkit-scrollbar-thumb-background-color: #6e717a;
  }
  
  * {
    margin: 0;
    padding: 0;
    font-family: "Montserrat", Helvetica, Arial, sans-serif;
  }

  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
    width: 100%;
    min-height: 100%;
    overflow: hidden;
  }
  
  h1, h2, h3, h4, h5, h6 {
    color: ${({ theme }) => theme.headingColor};
    font-weight: 700;
  }
  
  h4 {
    font-size: 0.95rem;
  }
  
  span {
    color: ${({ theme }) => theme.primaryColor};
    font-weight: 500;
    font-size: 0.775rem;
    cursor: default;
  }
  
  p {
    color: ${({ theme }) => theme.paragraphColor};
    font-weight: 500;
    font-size: 0.725rem;
    cursor: default;
  }
  
  svg {
    color: ${({ theme }) => theme.primarySvgColor};
  }
  
  .pipe-separator {
    color: ${({ theme }) => theme.primaryBorderColor};
  }
`