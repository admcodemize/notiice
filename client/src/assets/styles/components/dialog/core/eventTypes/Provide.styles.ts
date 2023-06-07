import styled from "styled-components";

export const StyledProvide = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  
  > header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    border-bottom: 1px solid ${({ theme }) => theme.primaryBorderColor};
    padding: 14px 24px 0 24px;
    gap: 12px;
    width: 100%;
  }
  
  .eventType-edit-content {
    height: 100%;
    padding: 12px 24px;
    
    .eventType-edit-content-groupInfo {
      padding: 0 8px;
      margin-bottom: 12px;
    }
    
    .eventType-edit-content-locations {
      display: flex;
      flex-direction: column;
      gap: 6px;
      
      //> div button {
      //  width: 250px;
      //  justify-content: space-between;
      //  padding: 0 16px;
      //}
    }
    
    .eventType-edit-content-location {
      display: flex;
      gap: 6px;
    }
    
    .eventType-edit-content-input {
      width: 100%;
      max-width: 300px;
    }
  }

  > footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 24px;
    border-top: 1px solid ${({ theme }) => theme.primaryBorderColor};

    button {
      height: 28px;
    }
  }
`;