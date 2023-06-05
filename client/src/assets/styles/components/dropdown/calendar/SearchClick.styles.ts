import styled from "styled-components";

export const StyledSearchClick = styled("div")`
  background-color: ${({ theme }) => theme.tagBgColor};
  padding: 18px;
  border-radius: 6px;
  box-shadow: rgba(9, 30, 66, 0.25) 0 4px 8px -2px, rgba(9, 30, 66, 0.08) 0 0 0 1px;
  max-width: 500px;
  min-width: 400px;
  width: 100%;
  
  svg, span {
    color: #fff;
  }
  
  span {
    line-height: 20px;
  }
  
  mask svg {
    color: ${({ theme }) => theme.tagColor};
  }
  
  header {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 8px;
    margin: 0 0 12px 0;
    
    span {
      font-size: 0.7rem;
      font-weight: 700;
      text-transform: uppercase;
    }
  }
`;