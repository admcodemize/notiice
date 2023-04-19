import styled from "styled-components";

export const StyledSpaces = styled("div")`
  background-color: ${({ theme }) => theme.primaryBgColor};
  padding: 12px;
  border-radius: 6px;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
  
  header {
    padding: 0 4px 8px 4px;
    border-bottom: 1px solid #e9e9e9;
  }
  
  main {
    margin: 8px 0 0 0;
    
    ul li {
      min-width: 250px;
    }
  }

  .spaces-group {
    margin: 12px 0 0 0;
    
    :first-child {
      margin: 0;
    }
    
    .spaces-group-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 12px 0;
      
      :first-child {
        padding: 0 0 12px 0;
      }
      
      svg {
        font-size: 0.825rem;
      }
    }
  }
`;