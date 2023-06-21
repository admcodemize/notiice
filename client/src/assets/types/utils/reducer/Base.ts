export interface IBaseReducerState {
    content: IBaseContentReducerState
}

export interface IBaseContentReducerState {
    activeSettingMenu: string
}

export type TActionType =
    | { type: "content", payload: IBaseContentReducerState }