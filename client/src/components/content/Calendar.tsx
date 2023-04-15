import { StyledCalendar } from "../../assets/styles/components/content/Calendar.styles";

import { FaIcon } from "../core/FontAwesomeIcon";
import { Button } from "../core/Button";
import { DatePicker } from "../core/DatePicker";
import {Tag} from "../core/Tag";

export const Calendar = (): JSX.Element => {
    return (
        <StyledCalendar>
            <header>
                <div className="content-calendar-hactions">
                    <div className="content-calendar-hactionsl">
                        <Button iconSrc="faCaretLeft" />
                        <FaIcon src="faPipe" styling="thin" className="pipe-separator"/>
                        <Button iconSrc="faLayerGroup" text="AEW FI" dropdown={true} />
                        <Button iconSrc="faUsersGear" />
                    </div>
                    <div className="content-calendar-hactionsr">
                        <Button iconSrc="faSearch"/>
                        <FaIcon src="faPipe" styling="thin" className="pipe-separator"/>
                        <Button iconSrc="faSlider" text="Settings" dropdown={true} />
                        <Button iconSrc="faRotateRight"/>
                        <Button iconSrc="faPlus" text="Create" styling="create"/>
                    </div>
                </div>
                <menu>
                    <div className="content-calendar-hml">
                        <Button iconSrc="faCalendarDay" text="Today" />
                        <FaIcon src="faPipe" styling="thin" className="pipe-separator"/>
                        <Button iconSrc="faCaretLeft" />
                        <DatePicker />
                        <Button iconSrc="faCaretRight" />
                        <FaIcon src="faPipe" styling="thin" className="pipe-separator"/>
                        <Tag text="Week 14" />
                    </div>
                    <div className="content-calendar-hmr">
                        <Button iconSrc="faMegaphone" text="Updates" badge={true} dropdown={true} />
                        <FaIcon src="faPipe" styling="thin" className="pipe-separator"/>
                        <Button iconSrc="faMountainSun" text="Week" dropdown={true} />
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