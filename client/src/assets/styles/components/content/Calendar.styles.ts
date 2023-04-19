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

  .content-calendar-week {
    display: grid;
    grid-template-columns: 115px repeat(7, 1fr);
  }

  ul.content-calendar-weekday {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    border: 1px solid #e9e9e9;

    li {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      padding: 6px 12px;
      width: 100%;

      > div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        
        span {
          text-transform: uppercase;
        }
        
        span.content-calendar-weekday-no {
          font-size: 1.25rem;
        }
      }

      p {
        font-size: 0.775rem;
        font-weight: 500;
        color: ${({ theme }) => theme.paragraphColor};
      }
    }
  }

  .content-calendar-times {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 12px;

    span {
      font-size: 0.825rem;
    }
  }
  
  .content-calendar-header,
  .content-calendar-grid {
    position: relative;
    width: 100%;
    
  }
  
  .content-calendar-header {
    padding: 12px 24px;
    
    span {
      font-size: 0.8rem;
      font-weight: 800;
      color: ${({ theme }) => theme.dateTimeColor};
    }
  }
  
  .content-calendar-grid {
    padding: 0 24px;
    
    .content-calendar-week {
      height: 80px;
    }
    
    .content-calendar-times {
      justify-content: center;
      padding: 0 20px 0 0;
    }
    
    .content-calendar-time {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr;
      gap: 0;
      
      > li:first-child {
        border-bottom: 1px solid #e9e9e9  ;
      }
    }
  }
`;