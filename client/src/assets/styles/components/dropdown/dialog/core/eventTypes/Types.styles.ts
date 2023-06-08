import styled from "styled-components";

export const StyledTypes = styled("div")`
  background-color: ${({ theme }) => theme.primaryBgColor};
  padding: 18px;
  border-radius: 6px;
  box-shadow: rgba(9, 30, 66, 0.25) 0 4px 8px -2px, rgba(9, 30, 66, 0.08) 0 0 0 1px;
  min-width: 200px;
`;