import styled from "styled-components";

export const StyledCalendar = styled("div")`
  .sliderLeft-calendar-card {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    margin: 6px 0;
    padding: 12px;
    border: 1px solid ${({ theme }) => theme.primaryBorderColor};
    border-radius: 6px;
    background-color: ${({ theme }) => theme.secondaryBgColor};

    header {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 6px;

      .sliderLeft-calendar-date {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        border-radius: 6px;
        background: #fff;
        padding: 4px 12px;
        border: 1px solid ${({ theme }) => theme.primaryBorderColor};

        span {
          color: ${({ theme }) => theme.dateTimeColor};
        }

        .sliderLeft-calendar-day {
          font-size: 1.25rem;
          font-weight: 800;
        }

        .sliderLeft-calendar-month {
          font-size: 0.7rem;
          font-weight: 600;
          text-transform: uppercase;
        }
      }
      
      .sliderLeft-calendar-info {
        display: flex;
        flex-direction: column;
        
        .sliderLeft-calendar-title {
          color: ${({ theme }) => theme.dateTimeColor};
          font-weight: 700;
          font-size: 0.825rem;
        }
      }
    }

    main {
      width: 100%;

      button {
        width: 100%;
      }

      .sliderLeft-calendar-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        margin: 12px 0;
      }

      .sliderLeft-calendar-time {
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 4px;
        font-size: 0.725rem;
        margin: 12px 0;

        .sliderLeft-calender-time-info {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          gap: 6px;
          width: 100%;

          svg {
            width: 12px;
          }
        }
      }

      .sliderLeft-calendar-actions {
        display: flex;
        gap: 4px;

        > div {
          width: 100%;
        }
      }
    }

    .sliderLeft-calendar-tag {
      height: 24px;
      background-color: ${({ theme }) => theme.tagColor};
      border-radius: 4px;
    }
  }
`;