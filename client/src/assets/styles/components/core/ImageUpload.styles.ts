import styled from "styled-components";

import { IStyledImageUploadProps } from "../../../types/components/core/ImageUpload";

export const StyledImageUpload = styled("div")<IStyledImageUploadProps>`
  width: ${props => props.containerWidth};
  height: ${props => props.containerHeight};
  
  form {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    gap: 6px;
    width: 100%;
    height: 100px;
    background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='6' ry='6' stroke='%232C3E50FF' stroke-width='1' stroke-dasharray='4' stroke-dashoffset='34' stroke-linecap='butt'/%3e%3c/svg%3e");
    border-radius: 6px;
    cursor: pointer;

    > div {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 6px;

      svg {
        font-size: 1.25rem;
      }

      span, p {
        font-weight: 600;
      }

      p {
        font-size: 0.675rem;
      }
    }

    > * {
      cursor: pointer;
    }

    img {
      border: 1px solid ${({ theme }) => theme.tagBorderColor};
      padding: 2px;
      cursor: default;
    } 
  }
`;