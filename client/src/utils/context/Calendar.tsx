import { createContext, useReducer } from "react";

import { calendarReducer, calendarReducerInitState } from "../reducer/Calendar";

import { ICalendarContextProps } from "../../assets/types/utils/context/Calendar";

export const CalendarContext = createContext<ICalendarContextProps>({
    state: calendarReducerInitState,
    dispatch: () => null
});

export const CalendarProvider = ({ children }: any): JSX.Element => {
    const [ state, dispatch ] = useReducer(calendarReducer, calendarReducerInitState);
    return (
        <CalendarContext.Provider value={{ state, dispatch }}>
            {children}
        </CalendarContext.Provider>
    )
}