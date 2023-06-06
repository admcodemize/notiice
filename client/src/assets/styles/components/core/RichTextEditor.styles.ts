import styled from "styled-components";

import { IStyledRichTextEditorProps } from "../../../types/components/core/RichTextEditor";

export const StyledRichTextEditor = styled("div")<IStyledRichTextEditorProps>`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  height: 100%;
  
  .quill,
  .ql-container {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
  
  .ql-editor {
    font-family: Montserrat, Helvetica, Arial, sans-serif;
    color: ${({ theme }) => theme.primaryColor};
    font-weight: 400;
    font-size: 0.7rem;
  }
`;