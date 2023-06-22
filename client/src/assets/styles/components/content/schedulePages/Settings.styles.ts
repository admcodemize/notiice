import styled from "styled-components";

export const StyledSettings = styled("div")`
  height: 100%;

  .flex-header-block-row {
    align-items: flex-start;
    border-bottom: 1px solid #e9e9e9;
    padding: 12px 0;
    
    > svg {
      width: 24px;
      min-width: 24px;
      max-width: 24px;
      font-size: 1.25rem;
      padding: 2px 0 0 0;
    }
  }
  
  .settings-info-block {
    width: 400px;
    min-width: 400px;
  }
  
  .settings-palette-colorPicker {
    display: flex;
    align-items: center;
    gap: 12px;
  }
  
  .settings-palette {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
  
  .quill {
    width: 400px;

    .ql-toolbar.ql-snow,
    .ql-editor {
      background-color: ${({ theme }) => theme.primaryBgColor};
    }
  }
  
  .schedulePages-settings-content {
    height: calc(100% - 120px);
    padding: 12px 24px;
    
    .settings-space,
    .settings-branding,
    .settings-palette {
      height: 100%;
      overflow: auto;

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
    
    > div .input-container,
    > div .input-message {
      max-width: 300px;
      font-weight: 500;
    }
  }
`;