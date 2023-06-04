import { Dispatch } from "react";

import { ISchedulePageReducerState, TActionType } from "../reducer/SchedulePage";

export interface ISchedulePageContextProps {
    state: ISchedulePageReducerState,
    dispatch: Dispatch<TActionType>
}