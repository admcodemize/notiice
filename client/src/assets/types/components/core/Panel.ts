export interface IPanelProps {
    title: string,
    info?: string,
    expanded?: boolean
    children: JSX.Element
}

export interface IStyledPanelProps {
    expanded: boolean
}