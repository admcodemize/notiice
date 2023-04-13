import { StyledCalendar } from "../../assets/styles/components/content/Calendar.styles";

import { FaIcon } from "../core/FontAwesomeIcon";
import { Button } from "../core/Button";

export const Calendar = (): JSX.Element => {
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
                        <Button iconSrc="faPlus" text="Create" styling="create"/>
                    </div>
                </div>
                <menu>
                    <div className="content-calendar-hml">
                    </div>
                    <div className="content-calendar-hmr">
                        <Button iconSrc="faMegaphone" text="Updates" badge={true}/>
                        <FaIcon src="faPipe" styling="thin" className="pipe-separator"/>
                        <Button iconSrc="faMountainSun"/>
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