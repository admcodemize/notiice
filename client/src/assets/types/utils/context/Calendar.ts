import { Dispatch } from "react";

import { ICalendarReducerState, TActionType } from "../reducer/Calendar";

export interface ICalendarContextProps {
    state: ICalendarReducerState,
    dispatch: Dispatch<TActionType>
}