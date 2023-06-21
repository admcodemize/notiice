import React, { useState, useLayoutEffect, useRef } from "react";

import { StyledCalendar } from "../../../assets/styles/components/content/schedulePages/Calendar.styles";

import { Button } from "../../core/Button";
import { DatePicker } from "../../core/DatePicker";
import { FaIcon } from "../../core/FontAwesomeIcon";
import { Tag } from "../../core/Tag";

import { getHoursOfDay, getDaysOfWeek, getDateOfWeekByIdx, compareDates } from "../../../utils/helpers/Calendar";

import { useCalendarContext } from "../../../utils/hooks/useContext";

export const Calendar = (): JSX.Element => {
    let top: number = 0;
    let bottom: number = 100 - (4.16667 / 2);

    let top1: number = 0;
    let bottom1: number = 100 - (4.16667 / 2);

    let top2: number = 0;
    let bottom2: number = 100 - (4.16667 / 2);

    /** @desc Destructuring calendar context which handles the overall current week */
    const { state, dispatch } = useCalendarContext();

    const _onToday = (): void => dispatch({ type: "today", payload: state });
    const _onPrevWeek = (): void => dispatch({ type: "prev", payload: state });
    const _onNextWeek = (): void => {};

    debugger

    const refObjGrid = useRef(null);

    useLayoutEffect(() => {
        debugger;
        const a = refObjGrid;
        debugger
    })

    const _addDayOfWeek = (weekDay: string, idx: number): JSX.Element => {
        const dayDate = getDateOfWeekByIdx(state.startDate, idx);
        return (
            <div className={compareDates(dayDate, new Date()) ? "schedulePages-calendar-content-day-current" : ""}>
                <span>{weekDay}</span>
                <time dateTime="2023-04-24">{dayDate.getDate()}</time>
            </div>
        )
    };

    const _addAlldayOfWeek = (idx: number): JSX.Element => {
        const dayDate = getDateOfWeekByIdx(state.startDate, idx);
        return (
            <div className={compareDates(dayDate, new Date()) ? "schedulePages-calendar-content-allday-current" : ""}>
            </div>
        )
    }

    const _addDayContainerOfWeek = (): JSX.Element => {
        return (
            <div className="test" onClick={(evt) => {
                /** @desc Corresponds to the container of current day in week */
                const a = evt.currentTarget;

            }}>
                <div className="abwesend-oder-background-zu-allday-event">

                </div>
                <div className="draggable-objects">
                    <div draggable={true}>
                        <div>
                            <div title="test 123">
                                <div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const _addTimesOfDay = (): JSX.Element => {

        const a: JSX.Element = ( <div className="teest" style={{ top: `${top}%`, bottom: `${bottom}%` }}></div> );
        top = top + 4.16667
        bottom = bottom - 4.16667;
        return a;
    };

    const _addTimesOfDay2 = (): JSX.Element => {

        const a: JSX.Element = ( <div className="teest" style={{ top: `${top2}%`, bottom: `${bottom2}%` }}></div> );
        top2 = top2 + 4.16667
        bottom2 = bottom2 - 4.16667;
        return a;
    };


    const _addTimeOfDay = (hour: string): JSX.Element => {
        const a: JSX.Element = ( <time style={{ top: `${top1}%`, bottom: `${bottom1}%` }}>{hour}</time> );
        top1 = top1 + 4.16667;
        bottom1 = bottom1 - 4.16667;
        return a;
    }

    return (
        <StyledCalendar>
            <header className="flex-header-submenu-actions">
                <div className="flex-justify-between-left">
                    <Button text="Day" iconSrc="faCalendarDay" dropdown={true} showBorder={false} />
                    <Button text="Week" iconSrc="faCalendarWeek" showBorder={false} />
                    <Button text="Work Week" iconSrc="faCalendarClock" showBorder={false} />
                </div>
                <div className="flex-justify-between-right">
                    <Tag text={`Week ${state.week}`} className="schedulePages-calendar-tags"/>
                    <FaIcon src="faPipe" styling="thin" className="pipe-separator"/>
                    <Button text="Today" />
                    <FaIcon src="faPipe" styling="thin" className="pipe-separator"/>
                    <Button iconSrc="faCaretLeft" onClick={_onPrevWeek} />
                    <DatePicker id="calendarDatePicker" {...state} />
                    <Button iconSrc="faCaretRight" onClick={_onNextWeek} />
                </div>
            </header>
            <div className="schedulePages-calendar-content">
                <div className="schedulePages-calendar-content-container">
                    <header>
                        <div className="schedulePages-calendar-content-inline">
                            <div className="schedulePages-calendar-content-timezone">
                                <div>
                                </div>
                            </div>
                            <div className="schedulePages-calendar-content-weekdays">
                                <div className="schedulePages-calendar-content-weekdays-inline">
                                    <div className="schedulePages-calendar-content-day">
                                        <div className="schedulePages-calendar-content-day-inline">
                                            {getDaysOfWeek(true).map((weekDay, idx) => _addDayOfWeek(weekDay, idx))}
                                        </div>
                                    </div>
                                    <div className="schedulePages-calendar-content-allday">
                                        <div className="schedulePages-calendar-content-allday-inline">
                                            {getDaysOfWeek(true).map((weekDay, idx) => _addAlldayOfWeek(idx))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>
                    <div className="schedulePages-calendar-content-height">
                        <div className="schedulePages-calendar-content-grid">
                            <div className="schedulePages-calendar-content-grid-times">
                                <div className="schedulePages-calendar-content-grid-times-inline">
                                    <div className="schedulePages-calendar-content-grid-times-inline-flex">
                                        <div className="schedulePages-calendar-content-grid-times-inline-position">
                                            {getHoursOfDay().map(() => _addTimesOfDay())}
                                            {getHoursOfDay().map((hour) => _addTimeOfDay(hour))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="schedulePages-calendar-content-grid-events">
                                <div className="schedulePages-calendar-content-grid-events-inline">
                                    <div className="schedulePages-calendar-content-grid-events-inline-flex">
                                        <div ref={refObjGrid} className="schedulePages-calendar-content-grid-events-inline-position">
                                            {getHoursOfDay().map(() => _addTimesOfDay2())}
                                            {getDaysOfWeek(true).map((weekDay, idx) => _addDayContainerOfWeek())}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                    {/*<header>*/}
                    {/*    <div className="schedulePages-calendar-content-inline">*/}
                    {/*        <div className="schedulePages-calendar-content-timezone">*/}
                    {/*            <div>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*        <div className="schedulePages-calendar-content-weekdays">*/}
                    {/*            <div className="schedulePages-calendar-content-weekdays-header">*/}
                    {/*                <div className="schedulePages-calendar-content-day">*/}
                    {/*                    <div className="schedulePages-calendar-content-day-inline">*/}
                    {/*                        {getDaysOfWeek(true).map((weekDay, idx) => _addDayOfWeek(weekDay, idx))}*/}
                    {/*                    </div>*/}
                    {/*                </div>*/}
                    {/*                <div className="schedulePages-calendar-content-allday">*/}
                    {/*                    <div className="schedulePages-calendar-content-allday-container">*/}

                    {/*                    </div>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</header>*/}
                    {/*<div className="schedulePages-calendar-content-grid">*/}
                    {/*    <div className="schedulePages-calendar-content-grid-times">*/}
                    {/*        <div className="schedulePages-calendar-content-grid-times-inline">*/}
                    {/*            <div className="schedulePages-calendar-content-grid-times-inline-flex">*/}
                    {/*                <div className="schedulePages-calendar-content-grid-times-inline-position">*/}
                    {/*                    {getHoursOfDay().map(() => _addTimesOfDay())}*/}
                    {/*                    {getHoursOfDay().map((hour) => _addTimeOfDay(hour))}*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <div data-is-scrollable={true} className="schedulePages-calendar-content-grid-events">*/}
                    {/*        <div className="schedulePages-calendar-content-grid-events-inline">*/}
                    {/*            <div className="schedulePages-calendar-content-grid-events-inline-flex">*/}
                    {/*                <div className="schedulePages-calendar-content-grid-events-inline-position">*/}
                    {/*                    {getHoursOfDay().map(() => _addTimesOfDay2())}*/}
                    {/*                    {getDaysOfWeek(true).map((weekDay, idx) => _addDayContainerOfWeek())}*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>













                    {/*<header aria-hidden="true">*/}
                    {/*    <div className="schedulePages-calendar-content-timezone">*/}
                    {/*        <span>+</span>*/}
                    {/*    </div>*/}
                    {/*    <div className="schedulePages-calendar-content-weekdays">*/}
                    {/*        <div className="schedulePages-calendar-content-day">*/}
                    {/*            {getDaysOfWeek(true).map((weekDay, idx) => _addDayOfWeek(weekDay, idx))}*/}
                    {/*        </div>*/}
                    {/*        <div className="schedulePages-calendar-content-allday">*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</header>*/}
                    {/*<div className="schedulePages-calendar-content-grid">*/}
                    {/*    <div aria-hidden="true" className="schedulePages-calendar-content-times">*/}
                    {/*        <div className="schedulePages-calendar-content-times-flex">*/}
                    {/*            <ul>*/}
                    {/*                {getHoursOfDay().map(() => _addTimesOfDay())}*/}
                    {/*                {getHoursOfDay().map((hour) => _addTimeOfDay(hour))}*/}
                    {/*            </ul>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*<div className="schedulePages-calendar-content-grid">*/}
                    {/*    <div aria-hidden="true" className="schedulePages-calendar-content-times">*/}
                    {/*        <div className="schedulePages-calendar-content-times-flex">*/}
                    {/*            <ul>*/}
                    {/*                {getHoursOfDay().map(() => _addTimesOfDay())}*/}
                    {/*                {getHoursOfDay().map((hour) => _addTimeOfDay(hour))}*/}
                    {/*            </ul>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}

                    {/*    <div className="schedulePages-calendar-content-events">*/}
                    {/*        <div className="schedulePages-calendar-content-events-flex">*/}
                    {/*            <div className="schedulePages-calendar-content-events-flex-grid">*/}
                    {/*                <ul>*/}
                    {/*                    {getHoursOfDay().map(() => _addTimesOfDay2())}*/}
                    {/*                    {getDaysOfWeek(true).map((weekDay, idx) =>  (<div></div>))}*/}
                    {/*                </ul>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
            </div>

        </StyledCalendar>
    )
}