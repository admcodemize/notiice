import styled, { css } from 'styled-components';

import { IStyledMessageProps } from "../../../types/components/core/Message";

export const StyledMessageDialog = styled("div")<IStyledMessageProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  height: auto;
  width: auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(218, 222, 224, 0.3);
  z-index: 10;
      
  .message-dialog {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 350px;
    min-width: 300px;
    max-width: 400px;
    border-radius: 6px;
    padding: 12px;
    box-shadow: rgb(0 0 0 / 24%) 0 3px 8px;
    background-color: #fff;
    
    div.message-dialog-type-icon {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 0 18px 0;
        
      svg {
        width: 28px;
        height: 28px;
      }
      
      ${props => props.type === "error" && css`
        svg {
          color: ${({ theme }) => theme.errorColor};  
        }
      `}

      ${props => props.type === "warning" && css`
        svg {
          color: ${({ theme }) => theme.warningColor};  
        }
      `}

      ${props => props.type === "success" && css`
        svg {
          color: ${({ theme }) => theme.successColor};  
        }
      `}

      ${props => props.type === "information" && css`
        svg {
          color: ${({ theme }) => theme.informationColor};  
        }
      `}
    }
    
    svg.message-dialog-close-icon {
      width: 10px;
      font-size: 0.825rem;
      color: ${({ theme }) => theme.primarySvgColor};
      padding: 0;
      align-self: flex-end;
      background: transparent;
      border: none;
      cursor: pointer;
    }
    
    h2.message-dialog-info, span.message-dialog-info {
      width: 100%;
      text-align: center;
      padding: 0 0 12px 0;
    }
      
    div.message-dialog-buttons,
    div.message-dialog-custom-buttons,
    div.message-dialog-default-buttons {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 8px;
      flex-wrap: wrap;
    }
    
    div.message-dialog-custom-buttons {
      flex-basis: 100%;
    }
      
    div.message-dialog-buttons {
      padding: 6px;
    }
  }
`