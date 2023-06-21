import styled from "styled-components";

export const StyledAuth = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
  background-color: #f1f1f1;
  
  
  .flex-header-block-column {
    margin: 12px 0 0 0;
    padding: 0 4px;
    
    span {
      font-size: 0.825rem;
    }
  }

  .horizontal-list {
    flex-wrap: wrap;
    
    li {
      padding: 12px;
      border: 1px solid ${({ theme }) => theme.secondaryBorderColor};
      border-radius: 6px;
      
      :hover {
        border-color: ${({theme}) => theme.createBorderColor};
        
        svg, span {
          color: ${({theme}) => theme.createBgColor};
        }
      }
    }

    li.active-list-item {
      border-bottom: 1px solid;
      border-color: ${({theme}) => theme.createBorderColor};

      svg, span {
        color: ${({theme}) => theme.createBgColor};
      }
    }
  }
  
  .auth-phases {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    height: 575px;
    min-width: 325px;
    max-width: 400px;
    width: 100%;
    background: #fbfbfb;
    border-radius: 12px;
    padding: 24px 16px;
    box-shadow: rgba(0, 0, 0, 0.02) 0 3px 12px 0, rgba(0, 0, 0, 0.06) 0 0 0 1px;

    @media (max-height: 928px), (pointer:none) and (pointer:coarse) {
      height: 100%;
      width: 100%;
      min-width: 100%;
      max-width: 100%;
    }
  }

  header.auth-phases-steps {
    height: 40px;
    display: flex;
    gap: 12px;
    border: 1px solid ${({ theme }) => theme.secondaryBorderColor};
    border-radius: 6px;
    background-color: #fff;
    align-items: center;
    padding: 0 6px;
    margin-bottom: 12px;
    width: fit-content;

    .auth-phases-step {
      display: flex;
      align-items: center;

      button {
        width: 34px;
      }

      .auth-phases-step-info {
        display: none;
        flex-direction: column;
        margin-left: 12px;

        span {
          font-weight: 600;
        }
      }

      .auth-phases-step-show {
        display: flex;
      }
    }
  }

  footer.auth-phases-steps {
    display: flex;
    gap: 6px;
  }

  img.auth-phases-steps {
    width: 40px;
    height: 40px;
  }

  .signup-phaseOne, .signup-phaseTwo, .signup-phaseThree, .signup-phaseFour, .signup-phaseFive,
  .signin-phaseOne, .signin-phaseTwo {
    display: none;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 18px;
    width: 100%;
    
    > div {
      width: 100%;

      button {
        height: 40px;
        width: 100%;

        span {
          font-weight: 600;
          width: 180px;
        }
      }
    }
  }
  
  .signin-header-container {
    display: flex;
    gap: 8px;
  }
  
  .signin-phaseOne-expire {
    display: flex;
    justify-content: flex-start;
    width: 100%;
    
    div {
      width: 100%;
      line-height: 16px;

      button {
        height: 40px;
        width: 100%;
      }
    }
  }
  
  .signup-phaseTwo-name {
    display: flex;
    gap: 12px;

    .input-container {
      min-width: 150px;
    }
  }

  .signup-phaseThree {
    > div button {
      justify-content: flex-start;

      span {
        width: 180px;
      }
    }
  }
  
  .signup-phaseFour-img-title {
    font-weight: 600;
  }

  .auth-additional-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 12px;

    span {
      text-align: center;
    }
  }

  .auth-phase-active {
    display: flex;
  }
`