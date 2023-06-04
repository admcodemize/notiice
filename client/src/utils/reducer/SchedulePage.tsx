import { ISchedulePageReducerState, TActionType } from "../../assets/types/utils/reducer/SchedulePage";

export const schedulePageReducerInitState: ISchedulePageReducerState = {
    space: {
        id: String(),
        text: String(),
        iconSrc: "faLockKeyhole"
    },
    activeItem: "types"
}

export function schedulePageReducer(state: ISchedulePageReducerState, action: TActionType) {
    switch (action.type) {
        case "space": {
            return {
                ...state, space: {
                    id: action.payload.space.id,
                    text: action.payload.space.text,
                    iconSrc: action.payload.space.iconSrc
                }
            }
        }
        case "item": {
            return { ...state, activeItem: action.payload.activeItem }
        }
        default: return state;
    }
}