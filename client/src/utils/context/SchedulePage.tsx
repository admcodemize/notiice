import { createContext, useReducer } from "react";

import { schedulePageReducer, schedulePageReducerInitState } from "../reducer/SchedulePage";

import { ISchedulePageContextProps } from "../../assets/types/utils/context/SchedulePage";

export const SchedulePageContext = createContext<ISchedulePageContextProps>({
    state: schedulePageReducerInitState,
    dispatch: () => null
});

export const SchedulePageProvider = ({ children }: any): JSX.Element => {
    const [ state, dispatch ] = useReducer(schedulePageReducer, schedulePageReducerInitState);
    return (
        <SchedulePageContext.Provider value={{ state, dispatch }}>
            {children}
        </SchedulePageContext.Provider>
    )
}