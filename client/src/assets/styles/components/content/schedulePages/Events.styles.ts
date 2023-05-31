import styled from "styled-components";

export const StyledEvents = styled("div")`
  height: 100%;

  .flex-header-block-column {
    margin: 12px 0 0 0;
    
    :first-child {
      margin: 0;
    }
  }
  
  .schedulePages-events-content {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 24px;
  }

  .schedulePages-events-data {
    display: flex;
    gap: 24px;
  }

  .schedulePages-events-event {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 12px;
    margin: 6px 0;
    padding: 12px;
    max-width: 400px;
    min-width: 350px;
    border-radius: 6px;
    background-color: ${({theme}) => theme.primaryBgColor};
    box-shadow: rgba(0, 0, 0, 0.024) 0 1px 6px 0, rgba(0, 0, 0, 0.1) 0 0 0 1px;

    ul {
      border-bottom: 1px solid #e9e9e9;
      width: 100%;
    }
    
    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 6px;
      width: 100%;
      
      .schedulePages-events-event-category {
        width: 6px;
        border: 3px solid #a72929;
        height: 40px;
        border-radius: 8px;
      }
      
      .schedulePages-events-event-date {
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

        .schedulePages-events-event-date-day {
          font-size: 1.25rem;
          font-weight: 800;
        }

        .schedulePages-events-event-date-month {
          font-size: 0.7rem;
          font-weight: 700;
          text-transform: uppercase;
        }
      }

      .schedulePages-events-event-info {
        display: flex;
        flex-direction: column;
        padding: 0 18px 0 0;
      }
    }

    .schedulePages-events-event-tags {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 6px;

      > div {
        height: 28px;

        span {
          font-weight: 500;
        }
      }
    }
    
    .schedulePages-events-event-content {
      display: flex;
      flex-direction: column;
      gap: 12px;
      height: 100px;
    }

    > footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 12px 0 0 0;
      border-top: 1px solid ${({ theme }) => theme.primaryBorderColor};
      width: 100%;
      gap: 12px;
      
      > div {
        width: 100%;

        button {
          height: 28px;
          width: 100%;
        }
      }
    }

    .schedulePages-events-event-content-tag {
      height: 24px;
      background-color: ${({ theme }) => theme.tagBgColor};
      border-radius: 4px;
    }
  }
  }
`;