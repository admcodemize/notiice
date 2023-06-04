import { useContext } from "react";

import { AuthContext } from "../context/Auth";
import { CalendarContext } from "../context/Calendar";
import { SchedulePageContext } from "../context/SchedulePage";

export const useAuthContext = () => useContext(AuthContext);
export const useCalendarContext = () => useContext(CalendarContext);
export const useSchedulePageContext = () => useContext(SchedulePageContext);
