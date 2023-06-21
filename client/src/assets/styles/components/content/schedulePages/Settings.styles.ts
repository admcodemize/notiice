import styled from "styled-components";

export const StyledSettings = styled("div")`
  height: 100%;

  .flex-header-block-row {
    align-items: flex-start;
    border-bottom: 1px solid #e9e9e9;
    padding: 12px 0;
    
    > svg {
      width: 24px;
      font-size: 1.25rem;
      padding: 2px 0 0 0;
    }
  }
  
  .settings-info-block {
    width: 400px;
    min-width: 300px;
  }
  
  .quill {
    width: 400px;

    .ql-toolbar.ql-snow,
    .ql-editor {
      background-color: ${({ theme }) => theme.primaryBgColor};
    }
  }
  
  .schedulePages-settings-content {
    padding: 12px 24px;
    
    > div .input-container,
    > div .input-message {
      max-width: 300px;
      font-weight: 500;
    }
  }
`;