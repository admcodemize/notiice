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
  }
`;