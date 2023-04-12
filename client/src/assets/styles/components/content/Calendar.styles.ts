import styled from "styled-components";

export const StyledCalendar = styled("div")`
  menu {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 32px;
    padding: 12px 24px 0 24px;
    border-bottom: 1px solid ${({ theme }) => theme.primaryBorderColor};

    li {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 6px;
      list-style: none;
      cursor: default;
      padding-bottom: 12px;

      svg {
        font-size: 1.25rem;
      }

      span {
        font-size: 0.875rem;
        font-weight: 500;
      }
    }
  }
`;