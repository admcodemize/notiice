import styled from "styled-components";

export const StyledCalendar = styled("div")`
  height: 100%;
  
  header.schedulePages-calendar-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    padding: 0 24px;
    height: 40px;
    border-bottom: 1px solid ${({ theme }) => theme.primaryBorderColor};
    
    button {
      height: 28px;
    }
    
    .schedulePages-calendar-header-left,
    .schedulePages-calendar-header-right {
      display: flex;
      gap: 12px;
    }
  }
  
  .schedulePages-calendar-content {
    background-color: transparent;
    inset: 0;
    display: flex;
    flex-direction: column;
    position: relative;
    height: 100%;
    width: 100%;
    z-index: 0;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    
    .schedulePages-calendar-content-data {
      > header {
        display: flex;
        width: 100%;
        border-bottom: 1px solid #afafaf;
        
        .schedulePages-calendar-content-timezone {
          display: flex;
          flex-shrink: 0;
          width: 85px;
          border-right: 1px solid #e9e9e9;
        }
        
        .schedulePages-calendar-content-weekdays {
          margin-bottom: -75vh;
          padding-bottom: 75vh;
          overflow: hidden;
          width: 100%;
          
          .schedulePages-calendar-content-day {
            -webkit-box-orient: horizontal;
            -webkit-box-direction: normal;
            display: flex;
            flex-direction: row;
            height: 48px;
            min-height: 48px;
            width: 100%;
            
            li {
              -webkit-box-pack: start;
              -webkit-box-direction: normal;
              -webkit-box-orient: horizontal;
              flex-basis: calc(calc(100% - 48px) / 7);
              display: flex;
              flex-shrink: 0;
              flex-flow: row nowrap;
              align-items: center;
              justify-content: space-between;
              overflow: hidden;
              position: relative;
              padding: 0 12px 0px;
              border-right: 1px solid ${({ theme }) => theme.primaryBorderColor};
              border-bottom: 2px solid transparent;
              
              time,
              span {
                font-size: 0.8rem;
                font-weight: 600;
                color: ${({ theme }) => theme.dateTimeColor};
              }
              
              time {
                font-weight: 800;
                font-size: 1.25rem;
              }
            }

            .schedulePages-calendar-content-day-current {
              border-bottom: 2px solid ${({ theme }) => theme.createBgColor};
              background-color: #fff;
              
              time,
              span {
                color: ${({ theme }) => theme.createBgColor};
              }
            }
          }
          
          .schedulePages-calendar-content-allday {
            -webkit-box-flex: 1;
            display: block;
            flex: 1 1 auto;
            min-height: 0;
            position: relative;
          }
        }
      }
    }
    
    .schedulePages-calendar-content-grid {
      -webkit-box-flex: 1;
      display: flex;
      flex: 1 1 auto;
      height: auto;
      position: relative;
      z-index: 0;
      overflow: hidden;
      
      .schedulePages-calendar-content-times {
        flex-shrink: 0;
        overflow: hidden;
        
        .schedulePages-calendar-content-times-flex {
          display: flex;
          flex-shrink: 0;
          
          > ul {
            -webkit-box-flex: 0;
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            border-right: 1px solid #e9e9e9;
            display: flex;
            flex-direction: column;
            flex-grow: 0;
            flex-shrink: 0;
            position: relative;
            height: 1440px;
            width: 85px;
            
            
            .teeest {
              border-bottom-color: #e9e9e9;
              border-bottom-style: dashed;
              font-size: 8px;
              border-width: thin;
              left: 0;
              margin-top: -1px;
              right: 0;
              position: absolute;
              border-top-style: solid;
              border-top-color: #e9e9e9;
            }
            
            
            
          }
        }
      }
      
      .schedulePages-calendar-content-events {
        -webkit-box-flex: 1;
        display: flex;
        flex-grow: 1;
        height: inherit;
        margin-left: -2px;
        overflow: auto;
        padding-left: 2px;
        padding-right: 18px;
        position: relative;
        border-left: 1px solid #e9e9e9;
        background-color: #fff;
      }
    }
  }
`;