import { IBaseReducerState, TActionType } from "../../assets/types/utils/reducer/Base";
import { ModelSettingsSubActionsKeys } from "../../assets/models/components/content/schedulePage/Settings";

export const baseReducerInitState: IBaseReducerState = {
    content: {
        activeSettingMenu: ModelSettingsSubActionsKeys.space
    }
}

export function baseReducer(state: IBaseReducerState, action: TActionType) {
    switch (action.type) {
        case "content": {
            return {
                ...state,
                content: action.payload
            }
        }
        default: return state;
    }
}