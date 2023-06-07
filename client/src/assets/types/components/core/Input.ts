import React from "react";
import { DefaultTFuncReturn } from "i18next";

import { TFontAwesomeIconStyle } from "./FontAwesomeIcon";

export interface IInputProps {
    id: string,
    label?: string|DefaultTFuncReturn,
    info?: string|DefaultTFuncReturn,
    required?: boolean,
    iconSrc?: string,
    iconStyling?: TFontAwesomeIconStyle,
    message?: string,
    messageType?: TMessageTypes,
    height?: string,
    type?: string,
    placeholder?: string,
    value?: any,
    readOnly?: any,
    disabled?: boolean,
    className?: string,
    onChange?: (evt: React.ChangeEvent<HTMLInputElement>, id: string) => void
}

export interface IStyledInputProps {
    messageType: TMessageTypes,
    height: string
}

export type TMessageTypes = "success" | "warning" | "error" | "information" | "default";