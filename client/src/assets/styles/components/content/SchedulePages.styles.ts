import styled from "styled-components";

export const StyledSchedulePages = styled("div")`
  height: 100%;
  
  header.content-pages-header {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid ${({ theme }) => theme.primaryBorderColor};

    button {
      height: 28px;
    }
    
    .content-pages-project {
      display: flex;
      align-items: flex-start;
      padding: 12px 24px 0 24px;
      gap: 12px;
      width: 100%;
    }
    
    .content-pages-project {
      .content-pages-project-icon {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 50px;
        width: 50px;
        border-radius: 12px;
        border: 1px solid #464a50;
        background-color: #464a50;

        svg {
          width: 26px;
          height: 26px;
          color: #fff;
        }
      }

      .content-pages-project-menu {
        display: flex;
        flex-direction: column;
        gap: 8px;
        width: 100%;

        .content-pages-project-actions {
          display: flex;
          justify-content: space-between;
          gap: 12px;
          
          > div {
            display: flex;
            gap: 12px;
          }
        }

        ul {
          display: flex;
          gap: 12px;

          li {
            display: flex;
            align-items: center;
            gap: 6px;
            padding: 0 6px 12px;
            border-bottom: 2px solid transparent;
            line-height: 18px;
            
            svg {
              font-size: 1rem;
            }
          }

          li.content-pages-menu-item-active {
            border-bottom: 2px solid ${({theme}) => theme.createBgColor};
            
            span, svg {
              color: ${({theme}) => theme.createBgColor};
            }
          }
        }
      }
    }
  }
  
  .content-pages-routes {
    height: 100%;
  }
  // padding: 0 24px;
  //
  // header {
  //   margin-bottom: 12px;
  // }
  //
  // menu,
  // .content-calendar-hactions {
  //   display: flex;
  //   align-items: center;
  //   justify-content: space-between;
  //   padding: 12px 0;
  //  
  //   .content-calendar-hactionsr,
  //   .content-calendar-hactionsl {
  //     display: flex;
  //     align-items: center;
  //     gap: 12px;
  //   }
  // }
  //
  // menu {
  //   display: flex;
  //   align-items: center;
  //   justify-content: space-between;
  //
  //   .content-calendar-hml,
  //   .content-calendar-hmr {
  //     display: flex;
  //     align-items: center;
  //     justify-content: flex-start;
  //     gap: 16px;
  //
  //     > li {
  //       display: flex;
  //       align-items: center;
  //       justify-content: flex-start;
  //       gap: 6px;
  //       list-style: none;
  //       cursor: default;
  //
  //       svg {
  //         font-size: 1.25rem;
  //         color: ${({ theme }) => theme.primarySvgColor};
  //       }
  //      
  //       :hover {
  //         span, svg {
  //           color: ${({ theme }) => theme.primaryColorHover};
  //         }
  //       }
  //     }
  //   }
  // }
  //
  //
  // .content-calendar-grid {
  //   display: grid;
  //   grid-template-columns: 80px repeat(7, 1fr);
  // }
  //
  // .content-calendar-header {
  //   position: relative;
  //   width: 100%;
  //   border-top: 1px solid #d3d3d3;
  //
  //   .content-calendar-current {
  //     span {
  //       color: ${({ theme }) => theme.createBgColor} !important;
  //     }
  //   }
  // }
  //
  // .content-calendar-allday {
  //   grid-auto-rows: 60px;
  //
  //   .content-calendar-current {
  //     border-bottom: 2px solid ${({ theme }) => theme.createBgColor} !important;
  //   }
  //  
  //   .content-calendar-weekdays {
  //     display: flex;
  //     gap: 4px;
  //     padding: 6px;
  //     border-bottom: 1px solid #d3d3d3;
  //   }
  // }
  //
  // .content-calendar-data {
  //   grid-auto-rows: 60px;
  //   overflow: auto;
  //   height: 600px;
  //   border-bottom: 1px solid #d3d3d3;
  //
  //   .content-calendar-time {
  //     align-items: flex-start;
  //     position: relative;
  //    
  //     :first-child {
  //       > span {
  //         visibility: hidden; 
  //       }
  //     }
  //    
  //     > span {
  //       position: absolute;
  //       top: -8px;
  //     }
  //   }
  //  
  //   .content-calendar-grid-item {
  //     .content-calendar-grid-sub-item {
  //       display: grid;
  //       grid-template-rows: repeat(2, 1fr);
  //       height: 100%;
  //       width: 100%;
  //      
  //       > div {
  //         display: flex;
  //         justify-content: space-evenly;
  //         position: relative;
  //         padding: 6px;
  //       }
  //      
  //       > div:first-child {
  //         border-bottom: 1px dashed ${({ theme }) => theme.primaryBorderColor};
  //       }
  //     }
  //   }
  //
  //   ::-webkit-scrollbar {
  //     width: var(--webkit-scrollbar-width);
  //     height: var(--webkit-scrollbar-width);
  //     background: var(--webkit-scrollbar-background);
  //   }
  //
  //   ::-webkit-scrollbar-thumb {
  //     height: var(--webkit-scrollbar-thumb-height);
  //     background-color: var(--webkit-scrollbar-thumb-background-color);
  //   }
  // }
  //
  // .content-calendar-weekdays {
  //   border-right: 1px solid ${({ theme }) => theme.primaryBorderColor};
  //   background-color: #fff;
  //
  //   span {
  //     font-size: 0.8rem;
  //     font-weight: 800;
  //     color: ${({ theme }) => theme.dateTimeColor};
  //   }
  //
  //   .content-calendar-weekdays-header {
  //     display: flex;
  //     flex-direction: column;
  //     align-items: flex-start;
  //     justify-content: flex-start;
  //     width: 100%;
  //     height: 100%;
  //     padding: 6px 12px;
  //
  //     > div {
  //       display: flex;
  //       align-items: center;
  //       justify-content: space-between;
  //       width: 100%;
  //
  //       span {
  //         text-transform: uppercase;
  //       }
  //
  //       .content-calendar-weekdays-date {
  //         font-size: 1.25rem;
  //       }
  //     }
  //
  //     p {
  //       font-size: 0.775rem;
  //       font-weight: 500;
  //       color: ${({ theme }) => theme.paragraphColor};
  //     }
  //   }
  // }
  //
  // .content-calendar-time {
  //   display: flex;
  //   -webkit-box-align: center;
  //   align-items: center;
  //   -webkit-box-pack: center;
  //   justify-content: center;
  //   border-left: 1px solid #d3d3d3;
  //   border-right: 1px solid #d3d3d3;
  //   background-color: #f7f7f7;
  // }
  //
  // .content-calendar-datetime {
  //   border-right: 1px solid ${({ theme }) => theme.primaryBorderColor};
  //   border-bottom: 1px solid ${({ theme }) => theme.primaryBorderColor};
  // }
  //
  //
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  

  // .content-calendar-week {
  //   display: grid;
  //   grid-template-columns: 80px repeat(7, 1fr);
  // }
  //
  // ul.content-calendar-weekday {
  //   display: flex;
  //   flex-direction: column;
  //   align-items: flex-start;
  //   justify-content: flex-start;
  //   position: relative;
  //
  //   li {
  //     display: flex;
  //     flex-direction: column;
  //     align-items: flex-start;
  //     justify-content: flex-start;
  //     width: 100%;
  //     height: 100%;
  //    
  //     > div {
  //       display: flex;
  //       align-items: center;
  //       justify-content: space-between;
  //       width: 100%;
  //      
  //       span {
  //         text-transform: uppercase;
  //       }
  //      
  //       span.content-calendar-weekday-no {
  //         font-size: 1.25rem;
  //       }
  //     }
  //
  //     p {
  //       font-size: 0.775rem;
  //       font-weight: 500;
  //       color: ${({ theme }) => theme.paragraphColor};
  //     }
  //   }
  // }
  //
  // .content-calendar-times {
  //   display: flex;
  //   align-items: center;
  //   justify-content: center;
  //   gap: 12px;
  //   background-color: #f7f7f7;
  //   border-right: 1px solid #bbbbbb;
  //
  //   span {
  //     font-size: 0.825rem;
  //   }
  // }
  //
  // .content-calendar-header,
  // .content-calendar-grid {
  //   position: relative;
  //   width: 100%;
  // }
  //
  // .content-calendar-header {
  //   padding: 12px 24px 0 24px;
  //  
  //   .content-calendar-week {
  //     border-bottom: 1px solid #bbbbbb;
  //   }
  //  
  //   ul.content-calendar-weekday {
  //     border-right: 1px solid ${({ theme }) => theme.primaryBorderColor};
  //    
  //     li {
  //       padding: 6px 12px;
  //     }
  //   }
  //  
  //   span {
  //     font-size: 0.8rem;
  //     font-weight: 800;
  //     color: ${({ theme }) => theme.dateTimeColor};
  //   }
  // }
  //
  // .content-calendar-grid {
  //   position: relative;
  //   overflow: auto;
  //   height: 650px;
  //   padding: 0 24px;
  //  
  //   .content-calendar-week {
  //     height: 65px;
  //   }
  //
  //   .content-calendar-timeline {
  //     position: absolute;
  //     top: 520px;
  //     height: 1.5px;
  //     background: #9d5252;
  //     width: calc(100% - 48px);
  //     z-index: 1;
  //     grid-template-columns: 70px repeat(7, 1fr);
  //   }
  //  
  //   .content-calendar-week-init {
  //     height: 14px;
  //     border-top: 1px solid #e9e9e9;
  //     background-color: #f7f7f7;
  //   }
  //
  //   .content-calendar-times {
  //     position: relative;
  //     justify-content: center;
  //     align-items: flex-start;
  //    
  //     span {
  //       position: absolute;
  //       top: -9px;
  //     }
  //   }
  //
  //   ul.content-calendar-time {
  //     display: grid;
  //     grid-template-columns: 1fr;
  //     grid-template-rows: 1fr 1fr;
  //     gap: 0;
  //     border-right: 1px solid #e9e9e9;
  //    
  //     li:first-child {
  //       border-top: 1px solid #e9e9e9;
  //     }
  //    
  //     li:last-child {
  //       border-top: 1px dashed #e9e9e9;
  //     }
  //   }
  //
  //   ::-webkit-scrollbar {
  //     width: var(--webkit-scrollbar-width);
  //     height: var(--webkit-scrollbar-width);
  //     background: var(--webkit-scrollbar-background);
  //   }
  //
  //   ::-webkit-scrollbar-thumb {
  //     height: var(--webkit-scrollbar-thumb-height);
  //     background-color: var(--webkit-scrollbar-thumb-background-color);
  //   }
  // }
`;