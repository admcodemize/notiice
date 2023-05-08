import styled from "styled-components";

export const StyledEventTypes = styled("div")`
  height: 100%;
  
  .schedulePages-types-content {
    padding: 12px 24px;
    
    .schedulePages-types-content-user {
      display: flex;
      align-items: flex-start;
      gap: 18px;
      flex-direction: column;
      margin: 32px 0 0 0;
      
      :first-child {
        margin: 12px 0 0 0;
      }
      
      .schedulePages-types-content-user-info {
        display: flex;
        align-items: center;
        gap: 12px;
        margin: 0 0 0 13px;
        
        .schedulePages-types-content-user-info-image {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 36px;
          width: 36px;
          border-radius: 10px;
          border: 1px solid #e9e9e9;
        }
        
        h4 {
          font-weight: 800;
          font-size: 1rem;
        }
      }
      
      .schedulePages-types-content-user-data {
        display: flex;
        gap: 24px;
        flex-wrap: wrap;
      }
    }
    
    .schedulePages-types-content-eventtypes {
      display: flex;
      flex-direction: column;
      gap: 12px;
      max-width: 350px;
      min-width: 350px;
      padding: 12px;
      border-radius: 6px;
      box-shadow: rgba(0, 0, 0, 0.025) 0 1px 6px 0, rgba(0, 0, 0, 0.1) 0 0 0 1px;
      background-color: ${({ theme }) => theme.primaryBgColor};
      
      > header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        
        .schedulePages-types-content-eventtypes-right {
          gap: 6px;
        }
        
        .schedulePages-types-content-eventtypes-icon {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 36px;
          width: 36px;
          border-radius: 10px;
          border: 1px solid ${({ theme }) => theme.tagBorderColor};
          background-color: ${({ theme }) => theme.tagBgColor};
          
          svg {
            color: #fff;
          }
        }
        
        .schedulePages-types-content-eventtypes-info {
          display: flex;
          flex-direction: column;
        }
      }
      
      .schedulePages-types-content-eventtypes-content {
        display: flex;
        flex-direction: column;
        gap: 12px;
        
        .schedulePages-types-content-eventtypes-tags {
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
      }
      
      > footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 12px 0 0 0;
        border-top: 1px solid ${({ theme }) => theme.primaryBorderColor};
        
        button {
          height: 28px;
        }
      }
    }

    .schedulePages-types-content-eventtypes-inactive {
      background-color: #f9f9f9;

      > * {
        opacity: 0.6;
      }
      
      > header,
      > footer {
        opacity: 1;
        
        .flex-justify-between-left,
        .flex-justify-between-right {
          opacity: 0.6;
        }
      }
    }
  }
`;