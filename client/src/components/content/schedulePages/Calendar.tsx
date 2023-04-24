import React, { useState } from "react";

import { StyledCalendar } from "../../../assets/styles/components/content/schedulePages/Calendar.styles";

import { Button } from "../../core/Button";
import { DatePicker } from "../../core/DatePicker";
import { FaIcon } from "../../core/FontAwesomeIcon";

import { getHoursOfDay, getDaysOfWeek, getDateOfWeekByIdx, compareDates } from "../../../utils/helpers/Calendar";

import { useCalendarContext } from "../../../utils/hooks/useCalendarContext";

export const Calendar = (): JSX.Element => {
    let top: number = 0;
    let bottom: number = 100 - (4.16667 / 2);

    let top1: number = 0;
    let bottom1: number = 100 - (4.16667 / 2);

    /** @desc Destructuring calendar context which handles the overall current week */
    const { state, dispatch } = useCalendarContext();

    const _addDayOfWeek = (weekDay: string, idx: number): JSX.Element => {
        const dayDate = getDateOfWeekByIdx(state.startDate, idx);
        return (
            <li className={compareDates(dayDate, new Date()) ? "schedulePages-calendar-content-day-current" : ""}>
                <span>{weekDay}</span>
                <time dateTime="2023-04-24">{dayDate.getDate()}</time>
            </li>
        )
    };

    const _addTimesOfDay = (): JSX.Element => {

        const a: JSX.Element = ( <div className="teeest" style={{ top: `${top}%`, bottom: `${bottom}%` }}></div> );
        top = top + 4.16667
        bottom = bottom - 4.16667;
        return a;
    };

    const _addTimeOfDay = (hour: string): JSX.Element => {
        const a: JSX.Element = ( <time className="teeest" style={{ top: `${top1}%`, bottom: `${bottom1}%` }}>{hour}</time> );
        top1 = top1 + 4.16667
        bottom1 = bottom1 - 4.16667;
        return a;
    }

    return (
        <StyledCalendar>
            <header className="schedulePages-calendar-header">
                <div className="schedulePages-calendar-header-left">
                    <Button text="Filter" iconSrc="faBarsFilter" dropdown={true} showBorder={false}/>
                    <Button text="Day" iconSrc="faCalendarDay" dropdown={true} showBorder={false} />
                    <Button text="Week" iconSrc="faCalendarWeek" showBorder={false} />
                    <Button text="Work Week" iconSrc="faCalendarWeek" showBorder={false} />
                </div>
                <div className="schedulePages-calendar-header-right">
                    <Button text="Today" />
                    <FaIcon src="faPipe" styling="thin" className="pipe-separator"/>
                    <Button iconSrc="faCaretLeft" />
                    <DatePicker />
                    <Button iconSrc="faCaretRight" />
                </div>
            </header>
            <div aria-hidden="true" className="schedulePages-calendar-content">
                <div aria-hidden="true" className="schedulePages-calendar-content-data">
                    <header aria-hidden="true">
                        <div className="schedulePages-calendar-content-timezone">
                        </div>
                        <div className="schedulePages-calendar-content-weekdays">
                            <ul className="schedulePages-calendar-content-day">
                                {getDaysOfWeek(true).map((weekDay, idx) => _addDayOfWeek(weekDay, idx))}
                            </ul>
                            <div className="schedulePages-calendar-content-allday">

                            </div>
                        </div>
                    </header>
                    <div className="schedulePages-calendar-content-grid">
                        <div aria-hidden="true" className="schedulePages-calendar-content-times">
                            <div className="schedulePages-calendar-content-times-flex">
                                <ul>
                                    {getHoursOfDay().map(() => _addTimesOfDay())}
                                    {getHoursOfDay().map((hour) => _addTimeOfDay(hour))}
                                </ul>
                            </div>
                        </div>

                        <div className="schedulePages-calendar-content-events">

                        </div>
                    </div>
                </div>
            </div>

        </StyledCalendar>
    )
}