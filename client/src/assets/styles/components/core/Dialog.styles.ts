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
    display: flex;
    flex-direction: column;
    align-items: center;
    height: calc(100% - 100px);
    max-height: 600px;
    width: 100%;
    min-width: 700px;
    max-width: 800px;
    border-radius: 6px;
    box-shadow: rgba(0, 0, 0, 0.14) 0 0 4px;
    background-color: #fff;
  }
`;