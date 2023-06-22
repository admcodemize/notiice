import { ISchedulePageReducerState, TActionType } from "../../assets/types/utils/reducer/SchedulePage";

export const schedulePageReducerInitState: ISchedulePageReducerState = {
    space: {
        id: String(),
        name: String(),
        iconSrc: "faLockKeyhole",
        logoSrc: "faBolt",
        logoBgColor: "#2c3e50",
        logoBorderColor: "#2c3e50",
        publicUrl: String(),
        base64Avatar: String(),
        base64CompanyLogo: String(),
        pageWelcomeMessage: String(),
        pageBackgroundColor: "#2c3e50",
        pageHeadingTextColor: "#464a50",
        pageWelcomeMessageColor: "#6e717a",
        pageDateSelectionColor: "#6585b5",
        pageTimeSelectionColor: "#6585b5"
    },
    activeItem: "types"
}

export function schedulePageReducer(state: ISchedulePageReducerState, action: TActionType) {
    switch (action.type) {
        case "space": {
            return {
                ...state, space: { ...action.payload.space }
            }
        }
        case "item": {
            return { ...state, activeItem: action.payload.activeItem }
        }
        default: return state;
    }
}