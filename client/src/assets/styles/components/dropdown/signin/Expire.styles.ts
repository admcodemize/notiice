import styled from "styled-components";

export const StyledExpire = styled("div")`
  background-color: ${({ theme }) => theme.primaryBgColor};
  padding: 12px;
  border-radius: 6px;
  box-shadow: rgba(9, 30, 66, 0.25) 0 4px 8px -2px, rgba(9, 30, 66, 0.08) 0 0 0 1px;
  
  ul li {
    > div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      
      span {
        font-weight: 600;
      }
      
      p {
        font-size: 0.675rem;
      }
    }
  }
`;