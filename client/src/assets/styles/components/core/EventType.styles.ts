import styled from "styled-components";

import { IStyledEventTypeProps } from "../../../types/components/core/EventType";

export const StyledEventType = styled("div")<IStyledEventTypeProps>`
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

    .eventType-icon {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 36px;
      width: 36px;
      border-radius: 10px;
      border: 1px solid ${({ theme }) => theme.tagBorderColor};
      background-color: ${props => props.iconBgColor || props.theme.tagBgColor};

      svg {
        color: #fff;
      }
    }

    .eventType-info {
      display: flex;
      flex-direction: column;
    }
  }

  .eventType-content {
    display: flex;
    flex-direction: column;
    gap: 12px;

    .eventType-content-tags {
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

.eventType-inactive {
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
`;