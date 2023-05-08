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
  
  ${props => !props.showBorder && css`
    border: none;
    background-color: transparent;
  `}
  
  span {
    font-size: 0.775rem;
  }
  
  svg {
    font-size: 1rem;
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
      color: ${({ theme }) => theme.createColor};
    }
  `}

  ${props => props.styling === "success" && css`
    border-color: ${({ theme }) => theme.successBorderColor};
    background-color: ${({ theme }) => theme.successBgColor};
    
    svg, span {
      color: ${({ theme }) => theme.successColor};
    }
  `}

  ${props => props.styling === "error" && css`
    border-color: ${({ theme }) => theme.errorBorderColor};
    background-color: ${({ theme }) => theme.errorBgColor};
    
    svg, span {
      color: ${({ theme }) => theme.errorColor};
    }
  `}

  ${props => props.styling === "warning" && css`
    border-color: ${({ theme }) => theme.warningBorderColor};
    background-color: ${({ theme }) => theme.warningBgColor};
    
    svg, span {
      color: ${({ theme }) => theme.warningColor};
    }
  `}

  ${props => props.styling === "tag" && css`
    border-color: ${({ theme }) => theme.tagBorderColor};
    background-color: ${({ theme }) => theme.tagBgColor};
    
    svg, span {
      color: ${({ theme }) => theme.tagColor};
    }
  `}

  ${props => props.styling === "light" && css`
    border-color: ${({ theme }) => theme.createBgColor};
    
    svg, span {
      color: ${({ theme }) => theme.createBgColor};
    }
  `}

  ${props => props.isOpen && css`
    border-color: ${({ theme }) => theme.createBorderColor};
    
    span, svg {
      color: ${({ theme }) => theme.createBgColor};
    }

    .button-badge {
      color: ${({ theme }) => theme.errorColor};
    }
  `}
`;