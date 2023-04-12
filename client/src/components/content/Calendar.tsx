import { StyledCalendar } from "../../assets/styles/components/content/Calendar.styles";

import { FaIcon } from "../core/FontAwesomeIcon";

export const Calendar = (): JSX.Element => {
    const _addHeaderMenuItems = (iconSrc: string, text: string): JSX.Element => (
        <li>
            <FaIcon src={iconSrc} styling="thin" />
            <span>{text}</span>
        </li>
    );

    return (
        <StyledCalendar>
            <header>
                <menu>
                    {_addHeaderMenuItems("faListTree", "Liste")}
                    {_addHeaderMenuItems("faSquareKanban", "Board")}
                    {_addHeaderMenuItems("faCalendarLines", "Calendar")}
                </menu>
            </header>
            <main>

            </main>
            <footer>

            </footer>
        </StyledCalendar>
    )
}