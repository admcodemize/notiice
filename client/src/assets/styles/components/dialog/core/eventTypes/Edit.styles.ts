import styled from "styled-components";

export const StyledEdit = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  
  > header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    border-bottom: 1px solid ${({ theme }) => theme.primaryBorderColor};
    padding: 14px 24px 0 24px;
    gap: 12px;
    width: 100%;
  }

  > footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 24px;
    border-top: 1px solid ${({ theme }) => theme.primaryBorderColor};

    button {
      height: 28px;
    }
  }
`;