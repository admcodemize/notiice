import { ISchedulePageReducerState, TActionType } from "../../assets/types/utils/reducer/SchedulePage";

export const schedulePageReducerInitState: ISchedulePageReducerState = {
    space: {
        id: String(),
        text: String(),
        iconSrc: "faLockKeyhole",
        logoSrc: "faBolt",
        logoBgColor: "#2c3e50"
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