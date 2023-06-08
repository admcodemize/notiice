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
    height: 46px;
    width: 100%;
  }
  
  .eventType-edit-content {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 36px;
    flex-wrap: wrap;
    margin: 4px;
    padding: 24px 20px;
    height: 100%;
    overflow-y: auto;

    .flex-header-block-column {
      gap: 18px;
    }

    > div button {
      width: 100%;
      max-width: 300px;
      -webkit-box-pack: justify;
      justify-content: space-between;
      padding: 0 16px;
    }
    
    .eventType-infoText,
    .eventType-edit-content-groupInfo {
      display: inline-block;
      padding: 0 8px;
    }
    
    .eventType-edit-content-locations {
      display: flex;
      flex-direction: column;
      gap: 6px;

      > div button .button-infoLeft {
        gap: 18px;
      }
    }
    
    .eventType-edit-content-input {
      width: 100%;
      max-width: 300px;
    }

    ::-webkit-scrollbar {
      width: 3px;
      height: var(--webkit-scrollbar-width);
      background: var(--webkit-scrollbar-background);
    }

    ::-webkit-scrollbar-thumb {
      height: var(--webkit-scrollbar-thumb-height);
      background-color: var(--webkit-scrollbar-thumb-background-color);
    }
  }

  > footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 24px;
    height: 46px;
    border-top: 1px solid ${({ theme }) => theme.primaryBorderColor};

    button {
      height: 28px;
    }
  }
`;