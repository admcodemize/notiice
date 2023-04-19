import { ICalendarReducerState, TActionType } from "../../assets/types/utils/reducer/Calendar";

import { getWeekNumber, getFirstDayOfWeek, getLastDayOfWeek } from "../helpers/Calendar";

export const calendarReducerInitState: ICalendarReducerState = {
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
    week: getWeekNumber(new Date()),
    startDate: getFirstDayOfWeek(new Date()),
    endDate: getLastDayOfWeek(new Date(), true),
    iso8601: true
}

export function calendarReducer(state: ICalendarReducerState, action: TActionType) {
    switch (action.type) {
        case "prev": {
            let prevWeekStartDate = new Date();
            prevWeekStartDate = new Date(prevWeekStartDate.setDate(action.payload.startDate.getDate() - 7))

            return {
                ...state,
                month: prevWeekStartDate.getMonth(),
                year: prevWeekStartDate.getFullYear(),
                week: getWeekNumber(prevWeekStartDate),
                startDate: prevWeekStartDate,
                endDate: getLastDayOfWeek(prevWeekStartDate, state.iso8601),
            }
        }
        default: return state;
    }
}