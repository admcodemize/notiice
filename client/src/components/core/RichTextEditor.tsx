import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import { StyledRichTextEditor } from "../../assets/styles/components/core/RichTextEditor.styles";
import { IRichTextEditorProps } from "../../assets/types/components/core/RichTextEditor";

export const RichTextEditor = (props: IRichTextEditorProps): JSX.Element => {
    const [ value, setValue ] = useState<string>(String());
    return (
        <StyledRichTextEditor height={props.height || "100%"}>
            <ReactQuill theme="snow" value={value} onChange={setValue} readOnly={props?.readOnly || false} placeholder={props.placeholder} modules={{
                toolbar: (props?.toolbarConfig && props?.toolbarConfig.length > 0) ? props.toolbarConfig : !!props?.isToolbarVisible
            }} />
        </StyledRichTextEditor>
    )
}