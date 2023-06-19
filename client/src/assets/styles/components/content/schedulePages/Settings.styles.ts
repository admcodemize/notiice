import styled from "styled-components";

export const StyledSettings = styled("div")`
  height: 100%;
  
  header {
    .horizontal-list {
      li {
        padding: 10px 6px 8px
      }
    }
  }
  
  .schedulePages-settings-content {
    padding: 12px 24px;
    
    > div .input-container,
    > div .input-message {
      max-width: 300px;
    }
  }
`;