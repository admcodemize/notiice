export interface IRichTextEditorProps {
    height?: string,
    readOnly?: boolean,
    placeholder?: string,
    isToolbarVisible?: boolean,
    modules?: TRichTextEditorModulesProps
}

export interface IStyledRichTextEditorProps {
    height?: string
}

export type TRichTextEditorModulesProps = {
    toolbarConfig?: any[],
    customToolbar?: {
        container: string
    },
}