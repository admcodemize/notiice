import { Spaces as CalendarSpaces } from "../../components/dropdown/calendar/Spaces";
import { DatePicker as CalendarDatePicker } from "../../components/dropdown/calendar/DatePicker";
import { Settings as CalendarSettings } from "../../components/dropdown/calendar/Settings";
import { Inbox as CalendarInbox } from "../../components/dropdown/calendar/Inbox";
import { View as CalendarView } from "../../components/dropdown/calendar/View";
import { SearchClick as CalendarSearchClick } from "../../components/dropdown/calendar/SearchClick";

export const getCalendarDropdownElemByButtonId = (id: string): JSX.Element|undefined => ({
    spaces: <CalendarSpaces />,
    datePicker: <CalendarDatePicker />,
    settings: <CalendarSettings />,
    inbox: <CalendarInbox />,
    view: <CalendarView />
})[id];

export const getCalendarDropdownElemBySearch = (): JSX.Element => (
    <div>search</div>
)

export const getCalendarDropdownElemBySearchClick = (): JSX.Element => ( <CalendarSearchClick /> );
