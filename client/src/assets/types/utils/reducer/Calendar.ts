export interface ICalendarReducerState {
    month: number,
    year: number,
    week: number
    startDate: Date,
    endDate: Date,
    iso8601: boolean,
    datesBetween: Date[],
    timeScale: TTimeScale
}

export type TTimeScale = 15 | 30 | 60;

export type TActionType =
    | { type: "prev", payload: ICalendarReducerState }
    | { type: "next", payload: ICalendarReducerState }
    | { type: "today", payload: ICalendarReducerState }