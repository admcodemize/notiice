import { useContext } from "react";

import { SchedulePageContext } from "../context/SchedulePage";

export const useSchedulePageContext = () => useContext(SchedulePageContext);