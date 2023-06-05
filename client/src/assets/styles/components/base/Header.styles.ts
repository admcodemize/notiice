import styled from "styled-components";

import { SidebarProps } from "../../../constants/Global";

export const StyledHeader = styled("header")`
  position: fixed;
  top: 0;
  left: ${SidebarProps().SIDE}px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${SidebarProps().HEADER}px;
  width: calc(100% - ${SidebarProps().SIDE}px);
  border-bottom: 1px solid #e9e9e9;
  background-color: #fff;
  padding: 0 24px;
  z-index: 10;
  
  button {
    
  }
`;