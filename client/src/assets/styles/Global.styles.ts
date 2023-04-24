import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    --webkit-scrollbar-width: 0;
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
  
  ul {
    list-style: none;
    
    li {
      cursor: default;
    }
  }
  
  // ul {
  //   display: flex;
  //   flex-direction: column;
  //   gap: 12px;
  //   list-style: none;
  //  
  //   li {
  //     display: flex;
  //     align-items: center;
  //     justify-content: space-between;
  //     min-width: 160px;
  //     line-height: 24px;
  //    
  //     .global-li-content {
  //       display: flex;
  //       align-items: center;
  //       justify-content: space-between;
  //       gap: 4px;
  //      
  //       svg {
  //         display: flex;
  //         align-items: flex-start;
  //         width: 24px;
  //       }
  //     }
  //    
  //     .global-li-shortcut {
  //       display: flex;
  //       align-items: center;
  //       justify-content: center;
  //       border: 1px solid ${({ theme }) => theme.primaryBorderColor};
  //       border-radius: 6px;
  //       padding: 4px 6px;
  //       max-height: 24px;
  //     }
  //    
  //     :hover {
  //       svg, span {
  //         color: ${({ theme }) => theme.createBgColor};
  //       }
  //     }
  //   }
  // }
  
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
  
  input {
    ::-webkit-input-placeholder { /* Edge */
      color: ${({ theme }) => theme.primaryColor};
      font-size: 0.775rem;
      font-weight: 500;
    }

    :-ms-input-placeholder { /* Internet Explorer 10-11 */
      color: ${({ theme }) => theme.primaryColor};
      font-size: 0.775rem;
      font-weight: 500;
    }

    ::placeholder {
      color: ${({ theme }) => theme.primaryColor};
      font-size: 0.775rem;
      font-weight: 500;
    }
  }
  
  .pipe-separator {
    color: ${({ theme }) => theme.primaryBorderColor};
  }
  
  .keyboard-shortcut-dark {
    background: ${({ theme }) => theme.primaryBgColor};
    border-radius: 4px;
    padding: 4px 6px;
    color: ${({ theme }) => theme.tagColor} !important;
    font-size: 0.725rem;
    font-weight: 700;
    margin: 0 4px;
  }
  
  p.webkit-word-break, span.webkit-word-break {
    display: -webkit-box;
    word-wrap: break-word;
    word-break: break-all;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  
  p.webkit-line-clamp1, span.webkit-line-clamp1 {
    -webkit-line-clamp: 1;
  }
`