import styled, { css } from "styled-components";

import { IStyledButtonProps } from "../../../types/components/core/Button";

export const StyledButton = styled("button")<IStyledButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  height: 32px;
  outline: none;
  border: 1px solid ${({ theme }) => theme.primaryBorderColor};
  background: #fff;
  padding: 4px 8px;
  border-radius: 6px;
  
  span {
    font-size: 0.775rem;
  }
  
  svg {
    font-size: 1rem;
  }

  ${props => props.type === "create" && css`
    border-color: ${({ theme }) => theme.createBorderColor};
    background-color: ${({ theme }) => theme.createBgColor};
    
    svg, span {
      color: ${({ theme }) => theme.createColor};
    }
  `}
  
  .button-badge {
    font-size: 0.5rem;
    color: ${({ theme }) => theme.errorColor};
  }
`;