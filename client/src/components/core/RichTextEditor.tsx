import React, { useRef, useState } from "react";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";

import { StyledRichTextEditor } from "../../assets/styles/components/core/RichTextEditor.styles";
import { IRichTextEditorProps, TRichTextEditorModulesProps } from "../../assets/types/components/core/RichTextEditor";

export const RichTextEditor = ({ isToolbarVisible = true, ...props }: IRichTextEditorProps): JSX.Element => {
    const refQuill = useRef(null);
    const [ value, setValue ] = useState<string>(String());

    const _onHandlerVariablesClick = (): void => {

    };

    const getCustomToolbar = (container: string): JSX.Element => (
        <div id={`rte-${container}`}>
            <select className="ql-header" defaultValue="0">
                <option value="3">H1</option>
                <option value="4">H2</option>
                <option value="0">Normal</option>
            </select>
            <button className="ql-list" value="ordered" />
            <button className="ql-list" value="bullet" />
            <button className="ql-bold" />
            <button className="ql-italic" />
            <button className="ql-underline" />
            <button className="ql-blockquote" />
            <select className="ql-align" />
            <select className="ql-color" />
            <select className="ql-background" />
            <button className="ql-variables">Variables</button>
        </div>
    );

    const getModules = (modules: TRichTextEditorModulesProps): Object => {
        let toolbar: boolean|[]|Object = modules?.customToolbar ? modules.customToolbar : modules?.toolbarConfig || true;
        if (modules?.customToolbar) {
            toolbar = {
                container: `#rte-${modules.customToolbar.container}`,
                handlers: {
                    "variables": () => {

                    }
                }
            }
        }

        return {
            toolbar,
            history: {
                delay: 500,
                maxStack: 100,
                userOnly: true
            }
        };
    };

    /** @desc Add fonts to whitelist and register them */
    const Font = Quill.import("formats/font");
    Font.whitelist = [ "arial", "montserrat" ];
    Quill.register(Font, true);

    return (
        <StyledRichTextEditor height={props.height || "100%"}>
            {isToolbarVisible && props?.modules?.customToolbar && getCustomToolbar(props.modules.customToolbar.container)}
            <ReactQuill
                ref={refQuill}
                theme="snow"
                value={value}
                onChange={setValue}
                readOnly={props?.readOnly || false}
                placeholder={props.placeholder}
                modules={getModules(props?.modules || {})}
            />
        </StyledRichTextEditor>
    );
}