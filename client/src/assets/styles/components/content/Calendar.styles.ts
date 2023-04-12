import styled from "styled-components";

export const StyledCalendar = styled("div")`
  menu {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 24px;
    border-bottom: 1px solid ${({ theme }) => theme.primaryBorderColor};

    .content-calendar-hml,
    .content-calendar-hmr {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 16px;
      
      span {
        font-size: 0.875rem;
        font-weight: 500;
        color: ${({ theme }) => theme.primaryColor};
        cursor: default;
      }

      li {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 6px;
        list-style: none;
        cursor: default;

        svg {
          font-size: 1.25rem;
          color: ${({ theme }) => theme.primarySvgColor};
        }
        
        :hover {
          span, svg {
            color: ${({ theme }) => theme.primaryColorHover};
          }
        }
      }
    }
  }
`;