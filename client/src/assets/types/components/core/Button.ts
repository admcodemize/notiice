import React from "react";

import { DefaultTFuncReturn } from "i18next";
import { TFontAwesomeIconStyle } from "./FontAwesomeIcon";

export interface IButtonProps {
    id?: string,
    iconSrc?: string,
    iconStyling?: TFontAwesomeIconStyle
    text?: string|DefaultTFuncReturn,
    styling?: TButtonStyling,
    dropdown?: boolean,
    dropdownFloat?: TButtonDropdownFloat
    dropdownCallback?: () => void,
    badge?: boolean,
    disabled?: boolean,
    showBorder?: boolean,
    onClick?: (evt: React.MouseEvent<HTMLButtonElement>, id: string|undefined) => void
}

export interface IStyledButtonProps {
    styling: TButtonStyling,
    isOpen: boolean,
    showBorder?: boolean
}

export type TButtonStyling = "default" | "success" | "warning" | "error" | "create" | "tag" | "light";

export type TButtonDropdownFloat = "right" | "left"