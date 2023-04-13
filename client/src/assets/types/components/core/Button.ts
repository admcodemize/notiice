import { TFontAwesomeIconStyle } from "./FontAwesomeIcon";

export interface IButtonProps {
    key?: string,
    iconSrc?: string,
    iconStyling?: TFontAwesomeIconStyle
    text?: string,
    styling?: TButtonStyling,
    dropdown?: boolean,
    badge?: boolean
}

export interface IStyledButtonProps {
    styling: TButtonStyling
}

export type TButtonStyling = "default" | "success" | "warning" | "error" | "create";