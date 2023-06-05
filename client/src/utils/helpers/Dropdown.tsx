import { Expire as SignInExpire } from "../../components/dropdown/base/signin/Expire";

import { SearchClick as HeaderSearchClick } from "../../components/dropdown/base/header/SearchClick";
import { Inbox as HeaderInbox } from "../../components/dropdown/base/header/Inbox";

import { Settings as EventTypesSettings } from "../../components/dropdown/core/eventTypes/Settings";

import { Spaces as SchedulePageSpaces } from "../../components/dropdown/content/schedulePages/Spaces";
import { Create as SchedulePageCreate } from "../../components/dropdown/content/schedulePages/Create";

import { DatePicker as CalendarDatePicker } from "../../components/dropdown/content/schedulePages/calendar/DatePicker";
import { Settings as CalendarSettings } from "../../components/dropdown/content/schedulePages/calendar/Settings";

import { IDropdownProps } from "../../assets/types/components/dropdown/Global";

export const getDropdownElemByButtonId = (props: IDropdownProps): JSX.Element|undefined => ({
    schedulePageSpaces: <SchedulePageSpaces {...props}/>,
    schedulePageCreate: <SchedulePageCreate {...props}/>,
    headerInbox: <HeaderInbox {...props}/>,
    calendarDatePicker: <CalendarDatePicker {...props}/>,
    calendarSettings: <CalendarSettings {...props}/>,
    signInExpire: <SignInExpire {...props}/>,
    eventTypesSettings: <EventTypesSettings {...props} />
})[props.id];

export const getCalendarDropdownElemBySearch = (): JSX.Element => (
    <div>search</div>
)

export const getCalendarDropdownElemBySearchClick = (): JSX.Element => ( <HeaderSearchClick /> );