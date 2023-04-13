import styled from "styled-components";

export const StyledCalendar = styled("div")`
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    .sliderLeft-calendar-hdl {
      span {
        font-weight: 600;
        font-size: 0.825rem;
      }
    }
    
    .sliderLeft-calendar-hdr {
      display: flex;
      gap: 6px;
    }
  }
  
  main {
    margin: 16px 0;
    
    .sliderLeft-calendar-days,
    .sliderLeft-calendar-week {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      place-items: center;
      gap: 6px 8px;
      
      span {
        font-weight: 600;
        font-size: 0.725rem;
      }
    }
    
    .sliderLeft-calendar-week {
      padding: 6px 0;
      border-bottom: 1px solid ${({ theme }) => theme.primaryBorderColor};
    }
    
    .sliderLeft-calendar-days {
      margin: 16px 0;
      
      span {
        font-size: 0.75rem;
      }
      
      .sliderLeft-calendar-day {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 4px 6px;
        width: 100%;
        border-radius: 6px;
        cursor: default;
        
        .sliderLeft-calendar-day-events {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          gap: 1px;
          height: 8px;
          padding: 2px 0;
          
          svg {
            font-size: 0.25rem;
          }
        }
      }
      
      .sliderLeft-calendar-day-prevOrNext {
        font-weight: 600;
        color: #e2e2e2;
      }
    }
    
    .sliderLeft-calendar-invitations {
      margin: 24px 0;
    }
  }
`;