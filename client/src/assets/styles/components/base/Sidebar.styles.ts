import styled from "styled-components";

import { SidebarProps } from "../../../constants/Global";

export const StyledSidebar = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  top: 0;
  left: 0;
  position: fixed;
  height: 100%;
  width: ${SidebarProps().SIDE}px;
  border: 1px solid ${({ theme }) => theme.primaryBorderColor};
  overflow-y: auto;
  overflow-x: hidden;
  background-color: ${({ theme }) => theme.secondaryBgColor};
  padding: 12px 0;
  z-index: 1;
  
  header,
  menu {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 18px;
    padding: 0 6px 6px 6px;
    width: 100%;
  }
  
  menu {
    margin: 40px 0 0 0;

    .sidebar-menu-hover-info {
      position: fixed;
      left: 65px;
      height: 28px;
      display: none;
      align-items: center;
      justify-content: center;
      opacity: 0;
      padding: 4px 8px;
      border: 1px solid ${({ theme }) => theme.tagBorderColor};
      border-radius: 6px;
      background-color: ${({ theme }) => theme.tagColor};

      span {
        color: #fff;
        font-size: 0.775rem;
        font-weight: 600;
      }
    }
    
    .sidebar-menu-svg {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 4px;
      width: 34px;
      height: 34px;
      border: 1px solid ${({ theme }) => theme.secondaryBgColor};
      border-radius: 6px;
      transition: all 0.2s ease-in 0.1s;

      svg {
        font-size: 1.25rem;
      }

      :hover {
        background-color: ${({ theme }) => theme.primaryBgColor};
        border-color: ${({ theme }) => theme.primaryBorderColor};

        .sidebar-menu-hover-info {
          display: flex;
          opacity: 1;
        }
        
        svg {
          color: ${({theme}) => theme.secondarySvgColor};
        }
      }
    }
  }
`;