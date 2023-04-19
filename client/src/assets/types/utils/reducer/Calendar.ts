export interface ICalendarReducerState {
    month: number,
    year: number,
    week: number
    startDate: Date,
    endDate: Date,
    iso8601: boolean
}

export type TActionType =
    | { type: "prev", payload: ICalendarReducerState }
    | { type: "next", payload: ICalendarReducerState }