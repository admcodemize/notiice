import React from "react";

import { StyledCalendar } from "../../assets/styles/components/content/Calendar.styles";

import { FaIcon } from "../core/FontAwesomeIcon";
import { Button } from "../core/Button";
import { DatePicker } from "../core/DatePicker";
import { Tag } from "../core/Tag";
import { Search } from "../core/Search";

import { getDaysOfWeek, getDaysOfWeekByIdx } from "../../utils/helpers/Calendar";

import { useCalendarContext } from "../../utils/hooks/useCalendarContext";


export const Calendar = (): JSX.Element => {
    /** @desc Destructuring calendar context which handles the overall current week */
    const { state, dispatch } = useCalendarContext();

    const _onEventClick = (evt: React.MouseEvent<HTMLButtonElement>, id: string): void => {};

    const _onPrevWeek = (): void => dispatch({ type: "prev", payload: state });
    const _onNextWeek = (): void => {};

    return (
        <StyledCalendar>
            <header>
                <div className="content-calendar-hactions">
                    <div className="content-calendar-hactionsl">
                        <Button iconSrc="faCaretLeft"/>
                        <FaIcon src="faPipe" styling="thin" className="pipe-separator"/>
                        <Button id="spaces" iconSrc="faLayerGroup" text="AEW FI" dropdown={true} />
                    </div>
                    <div className="content-calendar-hactionsr">
                        <Search />
                        <FaIcon src="faPipe" styling="thin" className="pipe-separator"/>
                        <Button id="settings" iconSrc="faSlider" text="Settings" dropdown={true} dropdownFloat="right" />
                        <Button iconSrc="faRotateRight"/>
                        <Button iconSrc="faPlus" text="Create" styling="create"/>
                    </div>
                </div>
                <menu>
                    <div className="content-calendar-hml">
                        <Button iconSrc="faCalendarDay" text="Today" />
                        <FaIcon src="faPipe" styling="thin" className="pipe-separator"/>
                        <Button iconSrc="faCaretLeft" onClick={_onPrevWeek}/>
                        <DatePicker id="datePicker" {...state} />
                        <Button iconSrc="faCaretRight" onClick={_onNextWeek}/>
                        <FaIcon src="faPipe" styling="thin" className="pipe-separator"/>
                        <Tag text={`Week ${state.week}`} />
                    </div>
                    <div className="content-calendar-hmr">
                        <Button id="inbox" iconSrc="faMegaphone" text="Inbox" badge={true} dropdown={true} dropdownFloat="right"/>
                        <FaIcon src="faPipe" styling="thin" className="pipe-separator"/>
                        <Button id="view" iconSrc="faMountainSun" text="Week" dropdown={true} dropdownFloat="right"/>
                    </div>
                </menu>
            </header>
            <div className="content-calendar-header">
                <div className="content-calendar-week">
                    <div className="content-calendar-times">
                        <span>GMT+12</span>
                        <Button iconSrc="faCaretDown" />
                    </div>
                    {getDaysOfWeek(state.iso8601).map((weekDay, idx) => (
                        <ul className="content-calendar-weekday">
                            <li>
                                <div>
                                    <span>{weekDay}</span>
                                    <span className="content-calendar-weekday-no">{getDaysOfWeekByIdx(state.startDate, idx).getDate()}</span>
                                </div>
                                <p>{idx} Events</p>
                            </li>
                        </ul>
                    ))}
                </div>
            </div>
            <div className="content-calendar-grid">
                <div className="content-calendar-week">
                    <div className="content-calendar-times">
                        <span>08:00</span>
                    </div>
                    <ul className="content-calendar-weekday content-calendar-time">
                        <li>
                            hallo
                        </li>
                        <li>
                            test
                        </li>
                    </ul>
                    <ul className="content-calendar-weekday content-calendar-time">
                        <li>
                            hallo
                        </li>
                        <li>
                            test
                        </li>
                    </ul>
                    <ul className="content-calendar-weekday content-calendar-time">
                        <li>
                            hallo
                        </li>
                        <li>
                            test
                        </li>
                    </ul>
                </div>
                <div className="content-calendar-week">
                    <div className="content-calendar-times">
                        <span>09:00</span>
                    </div>
                    <ul className="content-calendar-weekday content-calendar-time">
                        <li>
                            hallo
                        </li>
                        <li>
                            test
                        </li>
                    </ul>
                    <ul className="content-calendar-weekday content-calendar-time">
                        <li>
                            hallo
                        </li>
                        <li>
                            test
                        </li>
                    </ul>
                    <ul className="content-calendar-weekday content-calendar-time">
                        <li>
                            hallo
                        </li>
                        <li>
                            test
                        </li>
                    </ul>
                </div>
            </div>
        </StyledCalendar>
    )
}