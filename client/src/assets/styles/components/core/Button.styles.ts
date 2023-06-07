import styled, { css } from "styled-components";

import { IStyledButtonProps } from "../../../types/components/core/Button";

export const StyledButton = styled("button")<IStyledButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  height: 32px;
    border: 1px solid ${({ theme }) => theme.secondaryBorderColor};
  outline: none;
  background-color: #fff;
  padding: 4px 8px;
  border-radius: 6px;
  transition: all 0.2s ease-in-out;
  
  ${props => !props.showBorder && css`
    border: none;
    background-color: transparent;
  `}
  
  span {
    font-size: 0.725rem;
  }
  
  svg {
    font-size: 1rem;
  }

  .button-infoLeft {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
  }
  
  .button-badge {
    font-size: 0.5rem;
    color: ${({ theme }) => theme.errorColor};
  }
  
  .button-dropdown {
    padding-left: 6px;
  }
  
  :hover {
    border-color: ${({ theme }) => theme.createBorderColor};
    
    span, svg {
      color: ${({ theme }) => theme.createBgColor};
    }

    .button-badge {
      color: ${({ theme }) => theme.errorColor};
    }
  }

  ${props => props.styling === "create" && css`
    border-color: ${({ theme }) => theme.createBorderColor};
    background-color: ${({ theme }) => theme.createBgColor};
    
    svg, span {
      color: ${({ theme }) => theme.createColorInside};
    }
    
    :hover {
      border-color: ${({ theme }) => theme.createBgColor};
      background-color: ${({ theme }) => theme.primaryBgColor};
      
      svg, span {
        color: ${({ theme }) => theme.createColor};
      }
    }
  `}

  ${props => props.styling === "success" && css`
    border-color: ${({ theme }) => theme.successBorderColor};
    background-color: ${({ theme }) => theme.successBgColor};
    
    svg, span {
      color: ${({ theme }) => theme.successColorInside};
    }
  `}

  ${props => props.styling === "error" && css`
    border-color: ${({ theme }) => theme.errorBorderColor};
    background-color: ${({ theme }) => theme.errorBgColor};
    
    svg, span {
      color: ${({ theme }) => theme.errorColorInside};
    }
  `}

  ${props => props.styling === "warning" && css`
    border-color: ${({ theme }) => theme.warningBorderColor};
    background-color: ${({ theme }) => theme.warningBgColor};
    
    svg, span {
      color: ${({ theme }) => theme.warningColorInside};
    }
  `}

  ${props => props.styling === "tag" && css`
    border-color: ${({ theme }) => theme.tagBorderColor};
    background-color: ${({ theme }) => theme.tagBgColor};
    
    svg, span {
      color: ${({ theme }) => theme.tagColorInside};
    }
    
    :hover {
      border-color: ${({ theme }) => theme.secondaryBorderColor};
      background-color: ${({ theme }) => theme.primaryBgColor};
      
      svg, span {
        color: ${({ theme }) => theme.tagBgColor};
      }
    }
  `}

  ${props => props.styling === "light" && css`
    border-color: ${({ theme }) => theme.createBgColor};
    
    svg, span {
      color: ${({ theme }) => theme.createColor};
    }
  `}

  ${props => props.isOpen && css`
    border-color: ${({ theme }) => theme.createBorderColor};
    background-color: ${({ theme }) => theme.primaryBgColor};
    
    span, svg {
      color: ${({ theme }) => theme.createColor};
    }

    .button-badge {
      color: ${({ theme }) => theme.errorColor};
    }
  `}

  ${props => props.disabled && css`
    background: #6e717a;
    border: 1px solid #5f626a;
    cursor: default;
    
    :hover {
      border-color: #5f626a;
      background-color: #6e717a;
      
      span, svg {
        color: #fff;
      }
    }
  `}
`;