import { ICalendarReducerState, TActionType } from "../../assets/types/utils/reducer/Calendar";

import { getWeekNumber, getFirstDayOfWeek, getLastDayOfWeek, getDatesBetween } from "../helpers/Calendar";

export const calendarReducerInitState: ICalendarReducerState = {
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
    week: getWeekNumber(new Date()),
    startDate: getFirstDayOfWeek(new Date()),
    endDate: getLastDayOfWeek(new Date()),
    iso8601: true,
    datesBetween: getDatesBetween(getFirstDayOfWeek(new Date()), getLastDayOfWeek(new Date())),
    timeScale: 30
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
                datesBetween: getDatesBetween(prevWeekStartDate, getLastDayOfWeek(prevWeekStartDate, state.iso8601))
            }
        }
        case "next": {
            return state;
        }
        case "today": {
            return {
                ...state,
                month: new Date().getMonth(),
                year: new Date().getFullYear(),
                week: getWeekNumber(new Date()),
                startDate: getFirstDayOfWeek(new Date(), state.iso8601),
                endDate: getLastDayOfWeek(new Date(), state.iso8601),
                datesBetween: getDatesBetween(new Date(), getLastDayOfWeek(new Date(), state.iso8601))
            }
        }
        default: return state;
    }
}