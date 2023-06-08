import styled from "styled-components";

export const StyledColorPicker = styled("div")`
  display: flex;
  flex-wrap: wrap;
  width: 250px;
  
  .colorPicker-hashtag {
    background: #f0f0f0;
    height: 28px;
    width: 28px;
    border: 1px solid ${({ theme }) => theme.secondaryBorderColor};
    border-right: 0;
    border-radius: 4px 0 0 4px;
    float: left;
    color: #98a1a4;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  input.colorPicker-hexValue {
    width: 103px;
    font-size: 0.725rem;
    font-weight: 600;
    color: rgb(102, 102, 102);
    border: 1px solid ${({ theme }) => theme.secondaryBorderColor};
    outline: none;
    height: 28px;
    border-radius: 0px 4px 4px 0px;
    float: left;
    padding-left: 8px;
  }
`;