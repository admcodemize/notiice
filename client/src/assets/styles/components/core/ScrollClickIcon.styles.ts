import styled, { css } from "styled-components";

import { IStyledScrollClickIconProps } from "../../../types/components/core/ScrollClickIcon";

export const StyledScrollClickIcon = styled("div")<IStyledScrollClickIconProps>`
  ${props => props.isVisible && css `
    display: block;
  `}

  ${props => !props.isVisible && css `
    display: none;
  `}
  
  svg {
    font-size: 1.25rem;
    color: ${({ theme }) => theme.tagBgColor};
  }
  
  .scrollClickIcon-to-right {
    border-left: 1px solid ${({ theme }) => theme.secondaryBorderColor};
    padding-left: 6px;
  };

  .scrollClickIcon-to-left {
    border-right: 1px solid ${({ theme }) => theme.secondaryBorderColor};
    padding-right: 6px;
  }
`;