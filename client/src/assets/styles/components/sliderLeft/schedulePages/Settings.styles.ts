import styled from "styled-components";

export const StyledSettings = styled("div")`
  ul.vertical-list {
    li {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding: 12px;
      width: 100%;
      height: 24px;
      border-left: 3px solid;
      border-color: #fff;
      transition: all 0.2s ease-in 0.1s;
    }
    
    li.active-list-item {
      border-color: ${({ theme }) => theme.createBorderColor};
      background-color: ${({ theme }) => theme.primaryBgColor};
      
      svg, span {
        color: ${({ theme }) => theme.createColor};
      }
    }
  }
`;