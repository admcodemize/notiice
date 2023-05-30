import { IMessageReducerState, TActionType } from "../../assets/types/components/core/Message";

export const messageReducerInitialState: IMessageReducerState = {
    showAlert: false,
    showToast: false,
    title: String(),
    info: String(),
    type: "error",
    hideIconSrc: false,
    buttonCancel: { visible: true }
}

export function messageReducer(state: IMessageReducerState, action: TActionType): IMessageReducerState {
    switch (action.type) {
        case "dialog": {
            return {
                ...state, ...action.payload,
                showAlert: !state.showAlert
            }
        }
        case "toast": {
            return {
                ...state, ...action.payload,
                showToast: !state.showToast
            }
        }
        default: return state
    }
}