import styled from "styled-components";

import { SidebarProps } from "../../../constants/Global";

export const StyledSliderLeft = styled("aside")`
  position: fixed;
  top: ${SidebarProps().HEADER}px;
  left: ${SidebarProps().SIDE}px;
  height: calc(100% - ${SidebarProps().HEADER}px);
  width: ${SidebarProps().LEFT}px;
  // transform: translate3d(-${SidebarProps().LEFT}px, 0, 0);
  // transition: all 0.2s ease .1s;
  border-right: 1px solid ${({ theme }) => theme.primaryBorderColor};
  background-color: #fff;
  padding: 6px 24px;
`;