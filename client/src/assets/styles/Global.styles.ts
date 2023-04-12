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
  
  svg {
    color: ${({ theme }) => theme.primarySvgColor};
  }
`