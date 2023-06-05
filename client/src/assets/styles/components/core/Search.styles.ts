import styled from "styled-components";

export const StyledSearch = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 32px;
  width: 100%;
  max-width: 600px;
  min-width: 300px;
  border: 1px solid ${({ theme}) => theme.secondaryBorderColor};
  border-radius: 6px;
  background-color: ${({ theme}) => theme.primaryBgColor};
  padding: 6px;
  
  > input {
    width: 100%;
    margin: 0 8px;
    background-color: transparent;
    border: none;
    outline: none;
  }
  
  > span {
    white-space: nowrap;
    background-color: ${({ theme}) => theme.tagBgColor};
    padding: 4px 6px;
    border-radius: 6px;
    border: 1px solid ${({ theme}) => theme.tagBorderColor};
    cursor: default;
    color: #fff;
  }
`;