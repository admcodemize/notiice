import styled from "styled-components";

export const StyledCalendar = styled("div")`
  menu,
  .content-calendar-hactions {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 24px;
    
    .content-calendar-hactionsr,
    .content-calendar-hactionsl {
      display: flex;
      align-items: center;
      gap: 12px;
    }
  }
  
  menu {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid ${({ theme }) => theme.primaryBorderColor};

    .content-calendar-hml,
    .content-calendar-hmr {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 16px;

      > li {
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