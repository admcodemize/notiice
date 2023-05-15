import styled, { css } from "styled-components";

import { IStyledDropdownProps } from "../../../types/components/core/Dropdown";

export const StyledDropdown = styled("div")<IStyledDropdownProps>`
  position: relative;
  
  .dropdown-content {
    position: absolute;
    top: 42px;
    background-color: transparent;
    width: auto;
    height: auto;
    z-index: 10;

    ${props => props.float === "left" && css`
      left: 0;
    `}

    ${props => props.float === "right" && css`
      right: 0;
    `}
  }
  
  .dropdown-active {
    visibility: visible;
    opacity: 1;
    transform: translateY(0);
    transition: 0.2s ease;
  }
  
  .dropdown-inactive {
    visibility: hidden;
    opacity: 0;
    transform: translateY(-20px);
    transition: 0.2s ease;
  }
`;