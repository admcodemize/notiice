import styled from "styled-components";

import { SidebarProps } from "../../../constants/Global";

export const StyledContent = styled("div")`
  position: fixed;
  top: ${SidebarProps().HEADER}px;
  left: calc(${SidebarProps().SIDE}px + ${SidebarProps().LEFT}px);
  width: calc(100% - calc(${SidebarProps().SIDE}px + ${SidebarProps().LEFT}px));
  height: calc(100% - ${SidebarProps().HEADER}px);
  overflow: hidden;
`;