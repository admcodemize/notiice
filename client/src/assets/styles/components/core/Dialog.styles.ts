import styled from "styled-components";

export const StyledDialog = styled("dialog")`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  height: auto;
  width: auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ theme }) => theme.inactiveBgColor};
  z-index: 10;
  border: none;
  outline: none;
  
  .dialog-container {
    height: 100%;
    min-height: 300px;
    max-height: 675px;
    width: 100%;
    min-width: 364px;
    max-width: 775px;
    border-radius: 6px;
    box-shadow: rgba(0, 0, 0, 0.14) 0 0 4px;
    background-color: #fff;

    header.dialog-container-toolbar {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      border-bottom: 1px solid ${({ theme }) => theme.primaryBorderColor};
      padding: 14px 24px 0 24px;
      gap: 12px;
      height: 46px;
      width: 100%;
    }

    footer.dialog-container-toolbar {
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
  }
`;