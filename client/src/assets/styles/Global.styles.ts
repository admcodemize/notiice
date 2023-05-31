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
  
  h2 {
    font-size: 1rem;
    font-weight: 900;
  }
  
  h4 {
    font-size: 0.95rem;
  }
  
  ul.horizontal-list {
    display: flex;
    gap: 12px;
    list-style: none;
    overflow: auto;

    li {
      display: flex;
      align-items: center;
      gap: 6px;
      padding: 0 6px 12px;
      border-bottom: 2px solid transparent;
      line-height: 18px;
      cursor: default;

      svg {
        font-size: 1rem;
      }
    }

    li.active-list-item {
      border-bottom: 2px solid ${({theme}) => theme.createBgColor};

      span, svg {
        color: ${({theme}) => theme.createBgColor};
      }
    }

    ::-webkit-scrollbar {
      width: var(--webkit-scrollbar-width);
      height: var(--webkit-scrollbar-width);
      background: var(--webkit-scrollbar-background);
    }

    ::-webkit-scrollbar-thumb {
      height: var(--webkit-scrollbar-thumb-height);
      background-color: var(--webkit-scrollbar-thumb-background-color);
    }
  }
  
  ul.vertical-list {
    display: flex;
    flex-direction: column;
    gap: 12px;
    list-style: none;
    overflow: auto;

    li {
      display: flex;
      align-items: center;
      gap: 6px;
      cursor: default;

      svg {
        font-size: 1rem;
      }
    }
  }
  
  span {
    color: ${({ theme }) => theme.primaryColor};
    font-weight: 500;
    font-size: 0.775rem;
    cursor: default;
  }

  a {
    color: ${({ theme }) => theme.linkColor};
    font-weight: 500;
    font-size: 0.775rem;
    cursor: default;
    text-decoration: none;
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
    color: ${({ theme }) => theme.tagBgColor} !important;
    font-size: 0.725rem;
    font-weight: 700;
    margin: 0 4px;
  }

  .flex-justify-between-left,
  .flex-justify-between-right {
    display: flex;
    align-items: center;
    gap: 12px;
  }
  
  .flex-header-submenu-actions {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    padding: 0 24px;
    height: 40px;
    border-bottom: 1px solid ${({ theme }) => theme.primaryBorderColor};

    button {
      height: 28px;
    }
  }
  
  .flex-header-block-column {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  
  .flex-svg-with-text {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 6px;
    width: 100%;

    svg {
      width: 24px;
    }
  }

  .translate-blur-hidden-top-animation {
    transform: translateY(-50px);
  }
  
  .translate-blur-hidden-animation {
    opacity: 0;
    filter: blur(5px);
    transition: all 1s;
  }
  
  .translate-blur-show-animation {
    opacity: 1;
    filter: blur(0);
    transform: translate(0);
  }
  
  span.title {
    font-size: 0.8rem;
    font-weight: 700;
    color: ${({ theme }) => theme.titleColor};
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

  p.webkit-line-clamp2, span.webkit-line-clamp2 {
    -webkit-line-clamp: 2;
  }
`