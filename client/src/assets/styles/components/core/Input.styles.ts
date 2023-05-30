import styled, { css } from "styled-components";

import { IStyledInputProps } from "../../../types/components/core/Input";

export const StyledInput = styled("div")<IStyledInputProps>`
  label {
    display: block;
    font-size: 0.775rem;
    font-weight: 600;
    padding: 0 0 4px 8px;
    color: ${({ theme }) => theme.labelColor};
  }
  
  label.required:before {
    content: "* ";
    color: ${({ theme }) => theme.errorBgColor};
    font-size: 0.825rem;
  }
  
  p {
    font-size: 0.7rem;
    margin: 4px 0 4px 8px;
  }
  
  .input-container {
    display: flex;
    flex-direction: row;
    border: 1px solid ${({ theme }) => theme.secondaryBorderColor};
    border-radius: 6px;
    background-color: ${({ theme }) => theme.primaryBgColor};
    align-items : center;
    overflow: hidden;
    height: ${props => props.height};
    width: 100%;
    min-width: 200px;
    padding: 12px;
    transition: all 0.2s ease-in;
  
    svg {
      padding: 6px;
      border-radius: 6px;
      width: 24px;
      cursor: initial;
      color: ${({ theme }) => theme.tagBgColor};
    };
    
    svg.input-password-icon {
      cursor: pointer;
      color: ${({ theme }) => theme.tagBgColor};
      background-color: transparent;
    }
    
    input {
      font-size: 0.725rem;
      font-weight: 600;
      color: ${({theme}) => theme.primaryColor};
      background-color: transparent;
      border: none;
      width: 100%;
      outline: none;
      padding: 0 12px;
      transition: border 0.2s ease;

      ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
        color: ${({theme}) => theme.paragraphColor};
        font-weight: 500;
        opacity: 1; /* Firefox */
      }

      :-ms-input-placeholder { /* Internet Explorer 10-11 */
        color: ${({theme}) => theme.paragraphColor};
        font-weight: 500;
      }

      ::-ms-input-placeholder { /* Microsoft Edge */
        color: ${({theme}) => theme.paragraphColor};
        font-weight: 500;
      }
    }
  }
  
  .input-disabled {
    background: ${({ theme }) => theme.secondaryBgColor};
  }
  
  span.input-message {
    font-size: 0.725rem;
    font-weight: 600;
    letter-spacing: initial;
    margin: 4px 0 4px 8px;
    text-transform: initial;
  }

  span.input-message.show {
    display: block;
  }

  span.input-message.hide {
    display: none;
  }

  ${props => props.messageType === "warning" && css`
    span.input-message {
      color: yellow;
    }
  `}

  ${props => props.messageType === "success" && css`
    span.input-message {
      color: green;
    }
  `}

  ${props => props.messageType === "information" && css`
    span.input-message {
      color: blue;
    }
  `}

  ${props => props.messageType === "error" && css`
    span.input-message {
      color: ${({ theme }) => theme.errorBgColor};
    }
    
    .input-container {
      border-color: ${({ theme }) => theme.errorBorderColor};
      background-color: #fff;
      
      input {
        color: ${({ theme }) => theme.errorBgColor};
      }

      svg {
        color: #fff;
        background: ${({ theme }) => `${theme.errorBgColor}`};
      }

      input {        
        ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
          color: ${({ theme }) => theme.errorColor};
        }

        :-ms-input-placeholder { /* Internet Explorer 10-11 */
          color: ${({ theme }) => theme.errorColor};
        }

        ::-ms-input-placeholder { /* Microsoft Edge */
          color: ${({ theme }) => theme.errorColor};
        }
      }
    }
  `}
`;