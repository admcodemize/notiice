import { StyledCalendar } from "../../assets/styles/components/content/Calendar.styles";

import { ICalendarHeaderSubMenuItem } from "../../assets/types/components/content/Calendar";

import { FaIcon } from "../core/FontAwesomeIcon";
import { Button } from "../core/Button";

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
                <div className="content-calendar-hactions">
                    <div className="content-calendar-hactionsl">
                        <Button iconSrc="faCaretLeft" />
                        <FaIcon src="faPipe" styling="thin" className="pipe-separator"/>
                        <Button iconSrc="faCalendarDay" text="Today" />
                        <FaIcon src="faPipe" styling="thin" className="pipe-separator"/>
                    </div>
                    <div className="content-calendar-hactionsr">
                        <Button iconSrc="faSearch"/>
                        <FaIcon src="faPipe" styling="thin" className="pipe-separator"/>
                        <Button iconSrc="faBarsFilter"/>
                        <Button iconSrc="faSlider"/>
                        <Button iconSrc="faPlus" text="Create" type="create"/>
                    </div>
                </div>
                <menu>
                    <div className="content-calendar-hml">
                        <h3>APRIL 2023</h3>
                        {/*{_addHeaderSubMenuItems({ text: "All" })}*/}
                        {/*{_addHeaderSubMenuItems({ text: "Organizer" })}*/}
                        {/*{_addHeaderSubMenuItems({ text: "Visitor" })}*/}
                    </div>
                    <div className="content-calendar-hmr">
                        <Button iconSrc="faMegaphone" text="Updates" badge={true}/>
                        <FaIcon src="faPipe" styling="thin" className="pipe-separator"/>
                        <Button iconSrc="faMountainSun"/>
                        {/*{_addHeaderSubMenuItems({ iconSrc: "faListTree" })}*/}
                        {/*{_addHeaderSubMenuItems({ iconSrc: "faSquareKanban" })}*/}
                        {/*{_addHeaderSubMenuItems({ iconSrc: "faCalendarLines" })}*/}
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