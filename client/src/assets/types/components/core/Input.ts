import React from "react";
import { DefaultTFuncReturn } from "i18next";

export interface IInputProps {
    id: string,
    label?: string|DefaultTFuncReturn,
    info?: string|DefaultTFuncReturn,
    required?: boolean,
    iconSrc?: string,
    message?: string,
    messageType?: TMessageTypes,
    height?: string,
    type?: string,
    placeholder?: string,
    value?: any,
    readOnly?: any,
    disabled?: boolean,
    onChange?: (evt: React.ChangeEvent<HTMLInputElement>, id: string) => void
}

export interface IStyledInputProps {
    messageType: TMessageTypes,
    height: string
}

export type TMessageTypes = "success" | "warning" | "error" | "information" | "default";