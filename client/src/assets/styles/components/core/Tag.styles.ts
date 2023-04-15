import styled from "styled-components";

export const StyledTag = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  height: 32px;
  padding: 0 12px;
  background-color: ${({ theme }) => theme.tagColor};
  border-radius: 6px;
  cursor: default;
  
  svg, span {
    color: #fff
  }
`;