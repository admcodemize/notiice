import styled from "styled-components";

export const StyledButtonGroup = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.primaryBorderColor};
  transition: all 0.2s ease-in;
  padding: 2px;
  background-color: #f6f6f6;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    color: #fff;
    height: 26px;
    width: 100%;
    padding: 6px 12px;
    border: none;
    background: ${({ theme }) => theme.primaryBgColor};
    cursor: pointer;
    transition: all 0.2s ease-in;

    svg {
      font-size: 1rem;
    }

    span {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    :first-child {
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
      border-right: 1px solid ${({ theme }) => theme.primaryBorderColor};
    }

    :last-child {
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
      border-left: 1px solid ${({ theme }) => theme.primaryBorderColor};
    }

    :hover {
      span, svg {
        color: ${({ theme }) => theme.createBgColor};
      }
    }
  }

  button.active {
    border-color: ${({ theme }) => theme.createBorderColor};
    background: ${({ theme }) => theme.createBgColor};

    svg, span {
      color: #fff;
    }
  }
`;