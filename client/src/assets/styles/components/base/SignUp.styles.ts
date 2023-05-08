import styled from "styled-components";

export const StyledSignUp = styled("div")`
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
  
  
  
  
  
  
  
  
  
  
  
  .signup-phases {
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
    padding: 24px;
    box-shadow: rgba(0, 0, 0, 0.02) 0 3px 12px 0, rgba(0, 0, 0, 0.06) 0 0 0 1px;
    
    @media (max-height: 928px), (pointer:none) and (pointer:coarse) {
      height: 100%;
      width: 100%;
      min-width: 100%;
      max-width: 100%;
    }
  }
  
  header.signup-phases-steps {
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
    
    .signup-phases-step {
      display: flex;
      align-items: center;
      
      button {
        width: 34px;
      }
      
      .signup-phases-step-info {
        display: none;
        flex-direction: column;
        margin-left: 12px;
        
        span {
          font-weight: 600;
        }
      }
      
      .signup-phases-step-show {
        display: flex;
      }
    }
  }
  
  footer.signup-phases-steps {
    display: flex;
    gap: 6px;
  }

  img.signup-phases-steps {
    width: 40px;
    height: 40px;
  }
  
  .signup-phaseOne,
  .signup-phaseTwo,
  .signup-phaseThree,
  .signup-phaseFour,
  .signup-phaseFive {
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
  
  .signup-phaseOne {
    .signup-phaseOne-additional-info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 12px;
      
      span {
        text-align: center;
      }
    }
  }
  
  .signup-phaseTwo {
    .signup-phaseTwo-name {
      display: flex;
      gap: 12px;
      
      .input-container {
        min-width: 150px;
      }
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

  .signup-phaseFour {
    gap: 0;
    
    .signup-phaseFour-img-title {
      font-weight: 600;
    }
    
    .signup-phaseFour-img-container {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 6px;
      width: 100%;
      height: 100px;
      background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='6' ry='6' stroke='%232C3E50FF' stroke-width='1' stroke-dasharray='4' stroke-dashoffset='34' stroke-linecap='butt'/%3e%3c/svg%3e");
      border-radius: 6px;
      cursor: pointer;
      
      > * {
        cursor: pointer;
      }
      
      svg {
        font-size: 1.25rem;
      }
      
      span, p {
        font-weight: 600;
      }
      
      p {
        font-size: 0.675rem;
      }
      
      input {
        display: none;
      }
    }
  }
  
  // .signup-phaseFive-industries {
  //   display: flex;
  //   flex-wrap: wrap;
  //   gap: 12px;
  //  
  //   > div {
  //     display: flex;
  //     align-items: center;
  //     gap: 12px;
  //     padding: 12px;
  //     border: 1px solid ${({ theme }) => theme.secondaryBorderColor};
  //     border-radius: 6px;
  //    
  //     span {
  //       font-weight: 600;
  //     }
  //   }
  // }
  
  .signup-phase-active {
    display: flex;
  }
`;