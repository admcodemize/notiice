import styled from "styled-components";

export const StyledColorPicker = styled("div")`
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
  width: 238px;
  
  .colorPicker-hashtag {
    background: ${({ theme }) => theme.secondaryBgColor};
    height: 28px;
    width: 28px;
    border: 1px solid ${({ theme }) => theme.secondaryBorderColor};
    border-right: 0;
    border-radius: 4px 0 0 4px;
    float: left;
    color: ${({ theme }) => theme.tagColor};
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  input.colorPicker-hexValue {
    width: 68px;
    font-size: 0.725rem;
    font-weight: 600;
    color: rgb(102, 102, 102);
    border: 1px solid ${({ theme }) => theme.secondaryBorderColor};
    outline: none;
    height: 28px;
    border-radius: 0 4px 4px 0;
    float: left;
    padding-left: 8px;
  }

  > div button {
    height: 28px;
    width: 28px;
    border-radius: 4px;
  }
`;