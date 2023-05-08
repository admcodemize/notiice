import styled from "styled-components";

export const StyledCalendar = styled("div")`
  height: 100%;

  .schedulePages-calendar-content {
    display: flex;
    padding: 0 24px;
    position: relative;
    height: 100%;
    width: 100%;

    .schedulePages-calendar-content-container {
      display: flex;
      flex-direction: column;
      z-index: 0;
      width: 100%;
    }

    .schedulePages-calendar-content-inline {
      display: flex;
    }

    .schedulePages-calendar-content-timezone {
      display: flex;
      flex-shrink: 0;

      > div {
        width: 48px;
        border-bottom: 1px solid #bbbbbb;;
      }
    }

    .schedulePages-calendar-content-weekdays {
      display: flex;
      width: 100%;

      .schedulePages-calendar-content-weekdays-inline {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        position: relative;
      }

      .schedulePages-calendar-content-allday,
      .schedulePages-calendar-content-day {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        position: relative;

        .schedulePages-calendar-content-allday-inline,
        .schedulePages-calendar-content-day-inline {
          display: flex;
          flex-direction: row;
          border-color: #e9e9e9;
          height: 48px;
          min-height: 48px;
          width: 100%;

          > div {
            box-sizing: border-box;
            display: flex;
            flex-shrink: 0;
            overflow: hidden;
            position: relative;
            flex-basis: calc(100% / 7);
            justify-content: space-between;
            align-items: center;
            padding: 0 12px;
            border-left: 1px solid #e9e9e9;

            :last-child {
              border-right: 1px solid #e9e9e9;
            }
            
            time, span {
              font-size: 0.8rem;
              font-weight: 600;
              color: ${({theme}) => theme.dateTimeColor};
            }

            time {
              font-weight: 800;
              font-size: 1.25rem;
            }
          }

          .schedulePages-calendar-content-day-current {
            background-color: #fff;

            time, span {
              color: ${({theme}) => theme.createBgColor};
            }
          }

          .schedulePages-calendar-content-allday-current {
            border-bottom: 2px solid ${({theme}) => theme.createBgColor};
            background-color: #fff;
          }
        }

        .schedulePages-calendar-content-allday-inline {
          border-bottom: 1px solid #bbbbbb;;
        }
      }
    }
    
    
    .schedulePages-calendar-content-height {
      display: flex;
      height: calc(100% - 215px);
    }
    

    .schedulePages-calendar-content-grid {
      display: flex;
      height: 100%;
      width: 100%;
      position: relative;
      z-index: 0;
      overflow: auto;

      .teest {
        border-bottom-color: #e9e9e9;
        border-bottom-style: dashed;
        font-size: 8px;
        border-top-style: solid;
        border-top-color: #e9e9e9;
        border-width: thin;
        left: 0;
        margin-top: -1px;
        right: 0;
        position: absolute;
      }

      .schedulePages-calendar-content-grid-times {
        flex-shrink: 0;
        //overflow: auto;
        //border-right: 1px solid #e9e9e9;

        .schedulePages-calendar-content-grid-times-inline {
          display: flex;

          .schedulePages-calendar-content-grid-times-inline-flex {
            background-color: transparent;
            display: flex;
            flex-shrink: 0;

            .schedulePages-calendar-content-grid-times-inline-position {
              display: flex;
              flex-direction: column;
              flex-grow: 0;
              flex-shrink: 0;
              position: relative;
              width: 48px;
              height: 1440px;

              > time {
                display: flex;
                align-items: center;
                justify-content: center;
                color: ${({theme}) => theme.dateTimeColor};
                font-size: 12px;
                font-weight: 500;
                top: 0;
                width: 100%;
                position: absolute;
              }
            }
          }
        }
      }

      .schedulePages-calendar-content-grid-events {
        display: flex;
        flex-grow: 1;
        
        
        
        
        
        .test {
          display: flex;
          flex-shrink: 0;
          overflow: hidden;
          position: relative;
          flex-basis: calc(100% / 7);
          border-left: 1px solid #e9e9e9;
          
          :last-child {
            border-right: none;
          }
        }
        
        .abwesend-oder-background-zu-allday-event {
          top: 0%;
          bottom: 0%;
          background-color: #fff;
          left: 0;
          opacity: .06;
          pointer-events: none;
          position: absolute;
          right: 0;
        }
        
        .draggable-objects {
          position: absolute;
          left: 0;
          bottom: 0;
          top: 0;
        }
        
        
        
        

        .schedulePages-calendar-content-grid-events-inline {
          height: 1440px;
          display: flex;
          flex-grow: 1;

          .schedulePages-calendar-content-grid-events-inline-flex {
            display: flex;
            flex-direction: row;
            flex-grow: 1;
            height: inherit;
            overflow: visible;
            position: relative;
            width: 100%;

            .schedulePages-calendar-content-grid-events-inline-position {
              border-right: 1px solid #e9e9e9;
              display: flex;
              flex-direction: row;
              flex-grow: 1;
              height: inherit;
              overflow: visible;
              position: relative;
              width: 100%;
              background-color: #fff;
            }
          }
        }
      }

      ::-webkit-scrollbar {
        width: var(--webkit-scrollbar-width);
        height: var(--webkit-scrollbar-width);
        background: var(--webkit-scrollbar-background);
      }

      ::-webkit-scrollbar-thumb {
        height: var(--webkit-scrollbar-thumb-height);
        background-color: var(--webkit-scrollbar-thumb-background-color);
      }
    }
  
  // .test {
  //   border-right: 1px solid #e9e9e9;
  //   flex-shrink: 0;
  //   flex-basis: calc(calc(100% - 48px) / 7);
  //   position: relative;
  // }
  //
  // .schedulePages-calendar-content {
  //   background-color: transparent;
  //   inset: 0;
  //   display: flex;
  //   flex-direction: column;
  //   position: relative;
  //   height: calc(100% - 180px);
  //   width: 100%;
  //   z-index: 0;
  //   -webkit-box-orient: vertical;
  //   -webkit-box-direction: normal;
  //
  //   .schedulePages-calendar-content-container {
  //     -webkit-box-orient: vertical;
  //     -webkit-box-direction: normal;
  //     background-color: transparent;
  //     bottom: 0;
  //     display: flex;
  //     flex-direction: column;
  //     left: 0;
  //     position: absolute;
  //     right: 0;
  //     top: 0;
  //     z-index: 0;
  //
  //     .schedulePages-calendar-content-timezone {
  //       display: flex;
  //       flex-shrink: 0;
  //
  //       > div {
  //         width: 48px;
  //         border-bottom: 1px solid #e9e9e9;
  //       }
  //     }
  //    
  //     > header {
  //       //padding-right: 24px;
  //      
  //       .schedulePages-calendar-content-inline {
  //         display: flex;
  //        
  //         .schedulePages-calendar-content-weekdays {
  //           display: flex;
  //           flex-grow: 1;
  //           margin-bottom: -75vh;
  //           padding-bottom: 75vh;
  //           overflow: hidden;
  //           margin-left: -10px;
  //           padding-left: 10px;
  //          
  //           .schedulePages-calendar-content-weekdays-header {
  //             -webkit-box-orient: vertical;
  //             -webkit-box-direction: normal;
  //             display: -webkit-box;
  //             display: -ms-flexbox;
  //             display: flex;
  //             flex-direction: column;
  //             flex-grow: 1;
  //             position: relative;
  //             margin-right: 0;
  //           }
  //
  //           .schedulePages-calendar-content-day {
  //             margin-right: 0px;
  //             -webkit-box-flex: 1;
  //             -webkit-box-orient: vertical;
  //             -webkit-box-direction: normal;
  //             display: flex;
  //             flex-direction: column;
  //             flex-grow: 1;
  //             position: relative;
  //            
  //             .schedulePages-calendar-content-day-inline {
  //               -webkit-box-orient: horizontal;
  //               -webkit-box-direction: normal;
  //               border-color: #e9e9e9;
  //               display: -webkit-box;
  //               display: -ms-flexbox;
  //               display: flex;
  //               -ms-flex-direction: row;
  //               flex-direction: row;
  //               height: 48px;
  //               min-height: 48px;
  //               width: 100%;
  //              
  //               > div {
  //                 box-sizing: border-box;
  //                 display: flex;
  //                 flex-shrink: 0;
  //                 overflow: hidden;
  //                 position: relative;
  //                 flex-basis: calc(calc(100% - 48px) / 7);
  //                 justify-content: space-between;
  //                 align-items: center;
  //                 padding: 0 12px;
  //                 border-left: 1px solid #e9e9e9;
  //                
  //                 time, span {
  //                   font-size: 0.8rem;
  //                   font-weight: 600;
  //                   color: ${({ theme }) => theme.dateTimeColor};
  //                 }
  //
  //                 time {
  //                   font-weight: 800;
  //                   font-size: 1.25rem;
  //                 }
  //               }
  //
  //               .schedulePages-calendar-content-day-current {
  //                 border-bottom: 2px solid ${({ theme }) => theme.createBgColor};
  //                 background-color: #fff;
  //
  //                 time,
  //                 span {
  //                   color: ${({ theme }) => theme.createBgColor};
  //                 }
  //               }
  //             }
  //           }
  //          
  //           .schedulePages-calendar-content-allday {
  //             display: block;
  //             flex: 1 1 auto;
  //             min-height: 0;
  //             position: relative;
  //             border-bottom: 1px solid #e9e9e9;
  //            
  //             .schedulePages-calendar-content-allday-placeholder {
  //               width: 100%;
  //             }
  //            
  //             .schedulePages-calendar-content-allday-container {
  //               background-color: transparent;
  //               min-height: 100%;
  //               width: 100%;
  //               position: absolute;
  //               top: 0;
  //               z-index: 1;
  //             }
  //           }
  //         }
  //       }
  //     }
  //    
  //     .schedulePages-calendar-content-grid {
  //       display: flex;
  //       flex: 1 1 auto;
  //       height: 100%;
  //       position: relative;
  //       z-index: 0;
  //
  //       .teest {
  //         border-bottom-color: #e9e9e9;
  //         border-bottom-style: dashed;
  //         font-size: 8px;
  //         border-top-style: solid;
  //         border-top-color: #e9e9e9;
  //         border-width: thin;
  //         left: 0;
  //         margin-top: -1px;
  //         right: 0;
  //         position: absolute;
  //       }
  //      
  //       .schedulePages-calendar-content-grid-times {
  //         flex-shrink: 0;
  //         overflow: hidden;
  //         border-right: 1px solid #e9e9e9;
  //        
  //         .schedulePages-calendar-content-grid-times-inline {
  //           display: flex;
  //           transform: translateZ(0);
  //          
  //           .schedulePages-calendar-content-grid-times-inline-flex {
  //             background-color: transparent;
  //             display: flex;
  //             flex-shrink: 0;
  //            
  //             .schedulePages-calendar-content-grid-times-inline-position {
  //               -webkit-box-orient: vertical;
  //               -webkit-box-direction: normal;
  //               display: flex;
  //               flex-direction: column;
  //               flex-grow: 0;
  //               flex-shrink: 0;
  //               position: relative;
  //               height: 1440px;
  //               width: 48px;
  //              
  //               > time {
  //                 color: red;
  //                 font-size: 12px;
  //                 font-weight: 400;
  //                 margin-top: 3px;
  //                 text-align: center;
  //                 top: 0;
  //                 width: 100%;
  //                 position: absolute;
  //               }
  //             }
  //           }
  //         }
  //       }
  //      
  //       .schedulePages-calendar-content-grid-events {
  //         display: flex;
  //         flex-grow: 1;
  //         height: inherit;
  //         margin-left: -2px;
  //         overflow: overlay;
  //         padding-left: 2px;
  //         padding-right: 18px;
  //         position: relative;
  //         transform: translateZ(0);
  //        
  //         .schedulePages-calendar-content-grid-events-inline {
  //           height: 1440px;
  //           display: flex;
  //           flex-grow: 1;
  //          
  //           .schedulePages-calendar-content-grid-events-inline-flex {
  //             margin-right: 0;
  //             -webkit-box-orient: horizontal;
  //             -webkit-box-direction: normal;
  //             border-right: 1px solid;
  //             display: flex;
  //             flex-direction: row;
  //             flex-grow: 1;
  //             height: inherit;
  //             overflow: visible;
  //             position: relative;
  //             width: 100%;
  //             color: red;
  //            
  //             .schedulePages-calendar-content-grid-events-inline-position {
  //               border-right: none;
  //               -webkit-box-orient: horizontal;
  //               -webkit-box-direction: normal;
  //               border-right: 1px solid green;
  //               display: flex;
  //               flex-direction: row;
  //               flex-grow: 1;
  //               height: inherit;
  //               overflow: visible;
  //               position: relative;
  //               width: 100%;
  //               background-color: #fff;
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  //  
  //  
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    // > header {
    //   display: flex;
    //   width: 100%;
    //   border-bottom: 1px solid #afafaf;
    //
    //   .schedulePages-calendar-content-timezone {
    //     display: flex;
    //     flex-shrink: 0;
    //     border-right: 1px solid #e9e9e9;
    //
    //     > * {
    //       width: 48px;
    //     }
    //   }
    //
    //   .schedulePages-calendar-content-weekdays {
    //     margin-bottom: -75vh;
    //     padding-bottom: 75vh;
    //     overflow: hidden;
    //     width: 100%;
    //
    //     .schedulePages-calendar-content-day {
    //       -webkit-box-orient: horizontal;
    //       -webkit-box-direction: normal;
    //       display: flex;
    //       flex-direction: row;
    //       height: 48px;
    //       min-height: 48px;
    //       width: 100%;
    //
    //       div {
    //         -webkit-box-pack: start;
    //         -webkit-box-direction: normal;
    //         -webkit-box-orient: horizontal;
    //         flex-basis: calc(calc(100% - 48px) / 7);
    //         display: flex;
    //         flex-shrink: 0;
    //         flex-flow: row nowrap;
    //         align-items: center;
    //         justify-content: space-between;
    //         overflow: hidden;
    //         position: relative;
    //         padding: 0 12px 0px;
    //         border-right: 1px solid ${({ theme }) => theme.primaryBorderColor};
    //         border-bottom: 2px solid transparent;
    //
    //         time,
    //         span {
    //           font-size: 0.8rem;
    //           font-weight: 600;
    //           color: ${({ theme }) => theme.dateTimeColor};
    //         }
    //
    //         time {
    //           font-weight: 800;
    //           font-size: 1.25rem;
    //         }
    //       }
    //
    //       .schedulePages-calendar-content-day-current {
    //         border-bottom: 2px solid ${({ theme }) => theme.createBgColor};
    //         background-color: #fff;
    //
    //         time,
    //         span {
    //           color: ${({ theme }) => theme.createBgColor};
    //         }
    //       }
    //     }
    //
    //     .schedulePages-calendar-content-allday {
    //       -webkit-box-flex: 1;
    //       display: block;
    //       flex: 1 1 auto;
    //       min-height: 0;
    //       position: relative;
    //     }
    //   }
    // }
    //
    // .schedulePages-calendar-content-grid {
    //   -webkit-box-flex: 1;
    //   display: flex;
    //   flex: 1 1 auto;
    //   height: auto;
    //   position: relative;
    //   z-index: 0;
    //   overflow: hidden;
    //
    //   .schedulePages-calendar-content-times {
    //     flex-shrink: 0;
    //     overflow: hidden;
    //
    //     .schedulePages-calendar-content-times-flex {
    //       display: flex;
    //       flex-shrink: 0;
    //
    //       > ul {
    //         -webkit-box-flex: 0;
    //         -webkit-box-orient: vertical;
    //         -webkit-box-direction: normal;
    //         border-right: 1px solid #e9e9e9;
    //         display: flex;
    //         flex-direction: column;
    //         flex-grow: 0;
    //         flex-shrink: 0;
    //         position: relative;
    //         height: 1440px;
    //         width: 48px;
    //
    //         li, time {
    //           display: flex;
    //           align-items: center;
    //           justify-content: center;
    //           font-size: 0.775rem;
    //           border-bottom-color: #e9e9e9;
    //           border-bottom-style: dashed;
    //           border-width: thin;
    //           left: 0;
    //           margin-top: -1px;
    //           right: 0;
    //           position: absolute;
    //           border-top-style: solid;
    //           border-top-color: #e9e9e9;
    //         }
    //       }
    //     }
    //   }
    // }
    
    //  
    //  .schedulePages-calendar-content-events {
    //    -webkit-box-flex: 1;
    //    display: flex;
    //    flex-grow: 1;
    //    height: inherit;
    //    margin-left: -2px;
    //    overflow: auto;
    //    padding-left: 2px;
    //    padding-right: 18px;
    //    position: relative;
    //    border-left: 1px solid #e9e9e9;
    //    background-color: #fff;
    //    transform: translateZ(0);
    //    
    //    .schedulePages-calendar-content-events-flex {
    //      -webkit-box-flex: 1;
    //      display: flex;
    //      flex-grow: 1;
    //      height: 1440px;
    //      
    //      .schedulePages-calendar-content-events-flex-grid {
    //        -webkit-box-flex: 1;
    //        -webkit-box-orient: horizontal;
    //        -webkit-box-direction: normal;
    //        border-right: 1px solid;
    //        display: flex;
    //        flex-direction: row;
    //        flex-grow: 1;
    //        height: inherit;
    //        overflow: visible;
    //        position: relative;
    //        width: 100%;
    //        
    //        > ul {
    //          -webkit-box-flex: 1;
    //          -webkit-box-orient: horizontal;
    //          -webkit-box-direction: normal;
    //          border-right: 1px solid;
    //          display: flex;
    //          flex-direction: row;
    //          flex-grow: 1;
    //          height: inherit;
    //          overflow: visible;
    //          position: relative;
    //          width: 100%;
    //
    //          li, time {
    //            display: flex;
    //            align-items: center;
    //            justify-content: center;
    //            font-size: 0.775rem;
    //            border-bottom-color: #e9e9e9;
    //            border-bottom-style: dashed;
    //            border-width: thin;
    //            left: 0;
    //            margin-top: -1px;
    //            right: 0;
    //            position: absolute;
    //            border-top-style: solid;
    //            border-top-color: #e9e9e9;
    //          }
    //        }
    //      }
    //    }
    //  }
    //}
  }
`;