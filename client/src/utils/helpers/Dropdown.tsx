import { Spaces as CalendarSpaces } from "../../components/dropdown/calendar/Spaces";
import { DatePicker as CalendarDatePicker } from "../../components/dropdown/calendar/DatePicker";
import { Settings as CalendarSettings } from "../../components/dropdown/calendar/Settings";
import { Inbox as CalendarInbox } from "../../components/dropdown/calendar/Inbox";
import { View as CalendarView } from "../../components/dropdown/calendar/View";
import { Create as CalendarCreate } from "../../components/dropdown/calendar/Create";
import { SearchClick as CalendarSearchClick } from "../../components/dropdown/calendar/SearchClick";
import { Expire as SignInExpire } from "../../components/dropdown/signin/Expire";

import { IDropdownProps } from "../../assets/types/components/dropdown/Global";

export const getDropdownElemByButtonId = (props: IDropdownProps): JSX.Element|undefined => ({
    spaces: <CalendarSpaces {...props}/>,
    datePicker: <CalendarDatePicker {...props}/>,
    settings: <CalendarSettings {...props}/>,
    inbox: <CalendarInbox {...props}/>,
    view: <CalendarView {...props}/>,
    create: <CalendarCreate {...props}/>,
    expire: <SignInExpire {...props}/>
})[props.id];

export const getCalendarDropdownElemBySearch = (): JSX.Element => (
    <div>search</div>
)

export const getCalendarDropdownElemBySearchClick = (): JSX.Element => ( <CalendarSearchClick /> );