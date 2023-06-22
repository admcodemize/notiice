export interface IColorPickerProps {
    callback: (hexColor: string) => void
}

export type TColorPickerDefault = {
    hexColor: string,
    hexBgColor: string
}