import React, { Dispatch } from "react";
import { IButtonProps } from "./Button";

export interface IStyledMessageProps {
    type: TMessageType
}

export interface IMessageReducerState {
    showAlert?: boolean,
    showToast?: boolean,
    top?: string,
    right?: string,
    title: string,
    info: string,
    type?: TMessageType,
    timeMS?: number,
    hideIconSrc?: boolean,
    buttonOK?: TMessageButtonConfig,
    buttonCancel?: TMessageButtonConfig,
    buttonSupport?: TMessageButtonConfig,
    customButtons?: IButtonProps[]
}

export interface IMessageContextProps {
    state: IMessageReducerState,
    dispatch: Dispatch<TActionType>,
    setMessageDialog: Dispatch<IMessageReducerState>,
    setMessageToast: Dispatch<IMessageReducerState>
}

export interface IMessageIconByType {
    [key: string]: string,
    information: string,
    success: string,
    warning: string,
    error: string
}

export type TActionType =
    | { type: "dialog", payload?: IMessageReducerState }
    | { type: "toast", payload?: IMessageReducerState }

export type TMessageType = "information" | "success" | "warning" | "error";

export type TMessageButtonConfig = {
    visible?: boolean,
    text?: string,
    iconSrc?: string,
    onClick?: (oEvt: React.MouseEvent<HTMLButtonElement>) => void
}