import styled from "styled-components";

export const StyledLogo = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.secondaryBgColor};
  padding: 8px;
  border-radius: 6px;
  width: 40px;
  height: 40px;
  cursor: default ;
  
  * {
    color: #fff;
    font-weight: 800;
  };
`;