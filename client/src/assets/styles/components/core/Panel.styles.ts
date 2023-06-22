import styled, { css } from "styled-components";

import { IStyledPanelProps } from "../../../types/components/core/Panel";

export const StyledPanel = styled("div")<IStyledPanelProps>`
  header {
    display: flex;
    align-items: center !important;
    justify-content: flex-start !important;
    border: none !important;
    
    > div button {
      height: 28px;
    }
    
    ${props => !props.expanded && css `
      border-bottom: 1px solid ${({ theme }) => theme.primaryBorderColor} !important;
    `}
  }
  
   .panel-content {
     width: 100%;
     margin: 6px 0 0 12px;
     padding: 12px;
     border-left: 1px dashed ${({ theme }) => theme.secondaryBorderColor};
     border-bottom: 1px dashed ${({ theme }) => theme.secondaryBorderColor};
     border-radius: 6px;
   }

  .panel-content-active {
    display: inline-block;
    visibility: visible;
    opacity: 1;
  }
  
  .panel-content-inactive {
    display: none;
    visibility: hidden;
    opacity: 0;
  }
`;