import { TFontAwesomeIconStyle } from "./FontAwesomeIcon";

export interface IButtonProps {
    iconSrc?: string,
    iconStyling?: TFontAwesomeIconStyle
    text?: string,
    type?: TButtonType,
    badge?: boolean
}

export interface IStyledButtonProps {
    type: TButtonType
}

export type TButtonType = "default" | "success" | "warning" | "error" | "create";