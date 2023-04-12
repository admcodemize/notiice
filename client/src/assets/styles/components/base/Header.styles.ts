import styled from "styled-components";

import { SidebarProps } from "../../../constants/Global";

export const StyledHeader = styled("header")`
  position: fixed;
  top: 0;
  left: ${SidebarProps().SIDE}px;
  height: ${SidebarProps().HEADER}px;
  width: calc(100% - ${SidebarProps().SIDE}px);
  border-bottom: 1px solid #e9e9e9;
  background-color: #fff;
`;