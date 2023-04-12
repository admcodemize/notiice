import { StyledCalendar } from "../../assets/styles/components/content/Calendar.styles";

import { ICalendarHeaderSubMenuItem } from "../../assets/types/components/content/Calendar";

import { FaIcon } from "../core/FontAwesomeIcon";

export const Calendar = (): JSX.Element => {
    const _addHeaderSubMenuItems = ({ iconSrc, text }: ICalendarHeaderSubMenuItem): JSX.Element => (
        <li>
            {iconSrc && <FaIcon src={iconSrc} styling="thin" />}
            {text && <span>{text}</span>}
        </li>
    );

    return (
        <StyledCalendar>
            <header>
                <menu>
                    <div className="content-calendar-hml">
                        {_addHeaderSubMenuItems({ text: "All" })}
                        {_addHeaderSubMenuItems({ text: "Organizer" })}
                        {_addHeaderSubMenuItems({ text: "Visitor" })}
                    </div>
                    <div className="content-calendar-hmr">
                        <span>View</span>
                        {_addHeaderSubMenuItems({ iconSrc: "faListTree" })}
                        {_addHeaderSubMenuItems({ iconSrc: "faSquareKanban" })}
                        {_addHeaderSubMenuItems({ iconSrc: "faCalendarLines" })}
                    </div>
                </menu>
            </header>
            <main>

            </main>
            <footer>

            </footer>
        </StyledCalendar>
    )
}