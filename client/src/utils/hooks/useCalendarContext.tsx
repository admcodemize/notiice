import { useContext } from "react";

import { CalendarContext } from "../context/Calendar";

export const useCalendarContext = () => useContext(CalendarContext);
