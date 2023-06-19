import { StyledSchedulePages } from "../../assets/styles/components/sliderLeft/SchedulePages.styles";

import { Button } from "../core/Button";
import {FaIcon} from "../core/FontAwesomeIcon";
import {ButtonGroup} from "../core/ButtonGroup";
import {Tag} from "../core/Tag";
import {Route, Routes} from "react-router-dom";
import {EventTypes} from "../sliderLeft/schedulePages/EventTypes";
import {Events} from "./schedulePages/Events";
import {Calendar} from "../sliderLeft/schedulePages/Calendar";
import {Schedule} from "../content/schedulePages/Schedule";
import { Settings } from "../sliderLeft/schedulePages/Settings";
import React from "react";

export const SchedulePages = (): JSX.Element => {

    return (
        <StyledSchedulePages>
            <Routes>
                <Route path={`types`} element={<EventTypes />} />
                <Route path={`events`} element={<Events />} />
                <Route path={`calendar`} element={<Calendar />} />
                <Route path={`schedule`} element={<Schedule />} />
                <Route path={`settings`} element={<Settings />} />
            </Routes>


            {/*<div className="sliderLeft-calendar-card">*/}
            {/*    <header>*/}
            {/*        <div className="sliderLeft-calendar-date">*/}
            {/*            <span className="sliderLeft-calendar-day">24</span>*/}
            {/*            <span className="sliderLeft-calendar-month">Apr</span>*/}
            {/*        </div>*/}
            {/*        <div className="sliderLeft-calendar-info">*/}
            {/*            <span className="sliderLeft-calendar-title">Workshop meeting</span>*/}
            {/*            <span>Beschreibung Test 1234</span>*/}
            {/*        </div>*/}
            {/*    </header>*/}
            {/*    <main>*/}
            {/*        <div className="sliderLeft-calendar-tags">*/}
            {/*            <Tag text="Umfrage" className="sliderLeft-calendar-tag" />*/}
            {/*            <Tag text="AEW FI" iconSrc="faLayerGroup" styling="thin" className="sliderLeft-calendar-tag" />*/}
            {/*        </div>*/}
            {/*        <div className="sliderLeft-calendar-time">*/}
            {/*            <div className="sliderLeft-calender-time-info">*/}
            {/*                <FaIcon src="faGlobe" styling="solid" />*/}
            {/*                <span>Mitteleuropäische Zeit MEZ</span>*/}
            {/*            </div>*/}
            {/*            <div className="sliderLeft-calender-time-info">*/}
            {/*                <FaIcon src="faCheckToSlot" styling="solid"/>*/}
            {/*                <span>75% der Stimmen bestätigt</span>*/}
            {/*            </div>*/}
            {/*            <div className="sliderLeft-calender-time-info">*/}
            {/*                <FaIcon src="faLocationDot" styling="solid" />*/}
            {/*                <span>Teams-Besprechung</span>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <div className="sliderLeft-calendar-actions">*/}
            {/*            <Button text="Share Link" iconSrc="faShareAll" styling="light"/>*/}
            {/*            <Button text="Participants" iconSrc="faUsersRays" styling="light"/>*/}
            {/*        </div>*/}
            {/*    </main>*/}
            {/*</div>*/}

            {/*<div className="sliderLeft-calendar-card">*/}
            {/*    <header>*/}
            {/*        <div className="sliderLeft-calendar-date">*/}
            {/*            <span className="sliderLeft-calendar-day">01</span>*/}
            {/*            <span className="sliderLeft-calendar-month">Mai</span>*/}
            {/*        </div>*/}
            {/*        <div className="sliderLeft-calendar-info">*/}
            {/*            <span className="sliderLeft-calendar-title">Jour-Fix Fachverantwortung</span>*/}
            {/*            <span className="webkit-word-break webkit-line-clamp1">Übernahme und Lohnbesprechung</span>*/}
            {/*        </div>*/}
            {/*    </header>*/}
            {/*    <main>*/}
            {/*        <div className="sliderLeft-calendar-tags">*/}
            {/*            <Tag text="Meeting" className="sliderLeft-calendar-tag" />*/}
            {/*            <Tag text="Google" iconSrc="faLockKeyhole" styling="thin" className="sliderLeft-calendar-tag" />*/}
            {/*        </div>*/}
            {/*        <div className="sliderLeft-calendar-time">*/}
            {/*            <div className="sliderLeft-calender-time-info">*/}
            {/*                <FaIcon src="faGlobe" styling="solid" />*/}
            {/*                <span>Mitteleuropäische Zeit MEZ</span>*/}
            {/*            </div>*/}
            {/*            <div className="sliderLeft-calender-time-info">*/}
            {/*                <FaIcon src="faClock" styling="solid"/>*/}
            {/*                <span>13:00 - 15:30</span>*/}
            {/*            </div>*/}
            {/*            <div className="sliderLeft-calender-time-info">*/}
            {/*                <FaIcon src="faLocationDot" styling="solid" />*/}
            {/*                <span>Google Meet</span>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <div className="sliderLeft-calendar-actions">*/}
            {/*            <Button text="Join Meeting" iconSrc="faHandshake" styling="light"/>*/}
            {/*        </div>*/}
            {/*    </main>*/}
            {/*</div>*/}

            {/*<div className="sliderLeft-calendar-card">*/}
            {/*    <header>*/}
            {/*        <div className="sliderLeft-calendar-date">*/}
            {/*            <span className="sliderLeft-calendar-day">01</span>*/}
            {/*            <span className="sliderLeft-calendar-month">Mai</span>*/}
            {/*        </div>*/}
            {/*        <div className="sliderLeft-calendar-info">*/}
            {/*            <span className="sliderLeft-calendar-title">Jour-Fix Fachverantwortung</span>*/}
            {/*            <span className="webkit-word-break webkit-line-clamp1">Übernahme und Lohnbesprechung</span>*/}
            {/*        </div>*/}
            {/*    </header>*/}
            {/*    <main>*/}
            {/*        <div className="sliderLeft-calendar-tags">*/}
            {/*            <Tag text="Event" className="sliderLeft-calendar-tag" />*/}
            {/*            <Tag text="Google" iconSrc="faLockKeyhole" styling="thin" className="sliderLeft-calendar-tag" />*/}
            {/*        </div>*/}
            {/*        <div className="sliderLeft-calendar-time">*/}
            {/*            <div className="sliderLeft-calender-time-info">*/}
            {/*                <FaIcon src="faGlobe" styling="solid" />*/}
            {/*                <span>Mitteleuropäische Zeit MEZ</span>*/}
            {/*            </div>*/}
            {/*            <div className="sliderLeft-calender-time-info">*/}
            {/*                <FaIcon src="faClockTwo" styling="solid"/>*/}
            {/*                <span>13:00</span>*/}
            {/*                <FaIcon src="faClockEight" styling="solid"/>*/}
            {/*                <span>15.05.2023 at 17:00</span>*/}
            {/*            </div>*/}
            {/*            <div className="sliderLeft-calender-time-info">*/}
            {/*                <FaIcon src="faLocationDot" styling="solid" />*/}
            {/*                <span>Industriesstrasse 20, 5000 Aarau</span>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <div className="sliderLeft-calendar-actions">*/}
            {/*            <Button text="Show route" iconSrc="faMapLocationDot" styling="light"/>*/}
            {/*        </div>*/}
            {/*    </main>*/}
            {/*</div>*/}





            {/*<div className="sliderLeft-calendar-upcoming">*/}
            {/*    <div className="sliderLeft-calendar-left">*/}
            {/*        <span className="sliderLeft-calendar-left-day">24</span>*/}
            {/*        <span className="sliderLeft-calendar-left-month">Apr</span>*/}
            {/*    </div>*/}
            {/*    <div className="sliderLeft-calendar-middle">*/}
            {/*        <div className="sliderLeft-calendar-middle-time">*/}
            {/*            <FaIcon src="faClock" styling="thin"/>*/}
            {/*            <span>11:00 - 11:30 Uhr</span>*/}
            {/*        </div>*/}
            {/*        <span className="sliderLeft-calendar-middle-title">Workshop meeting</span>*/}
            {/*        <Tag text="Event" className="slider-left-calendar-middle-tag" />*/}
            {/*    </div>*/}
            {/*    <div className="sliderLeft-calendar-right">*/}

            {/*    </div>*/}
            {/*</div>*/}

            {/*<div className="sliderLeft-calendar-upcoming">*/}
            {/*    <div className="sliderLeft-calendar-left">*/}
            {/*        <span className="sliderLeft-calendar-left-day">04</span>*/}
            {/*        <span className="sliderLeft-calendar-left-month">Mai</span>*/}
            {/*    </div>*/}
            {/*    <div className="sliderLeft-calendar-middle">*/}
            {/*        <div className="sliderLeft-calendar-middle-time">*/}
            {/*            <FaIcon src="faClock" styling="thin"/>*/}
            {/*            <span>13:00 - 15:30 Uhr</span>*/}
            {/*        </div>*/}
            {/*        <span className="sliderLeft-calendar-middle-title">Workshop meeting</span>*/}
            {/*        <Tag text="Event" className="slider-left-calendar-middle-tag" />*/}
            {/*    </div>*/}
            {/*    <div className="sliderLeft-calendar-right">*/}

            {/*    </div>*/}
            {/*</div>*/}

            {/*<div className="sliderLeft-calendar-invitations">*/}
            {/*    <div className="sliderLeft-calendar-top">*/}
            {/*        <div className="sliderLeft-calendar-left">*/}
            {/*            <span className="sliderLeft-calendar-left-day">04</span>*/}
            {/*            <span className="sliderLeft-calendar-left-month">Mai</span>*/}
            {/*        </div>*/}
            {/*        <div className="sliderLeft-calendar-middle">*/}
            {/*            <div className="sliderLeft-calendar-middle-time">*/}
            {/*                <FaIcon src="faClock" styling="thin"/>*/}
            {/*                <span>13:00 - 15:30 Uhr</span>*/}
            {/*            </div>*/}
            {/*            <span className="sliderLeft-calendar-middle-title">Workshop meeting</span>*/}
            {/*        </div>*/}
            {/*        <div className="sliderLeft-calendar-right">*/}

            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <div className="sliderLeft-calendar-bottom">*/}
            {/*        <Button text="Accept" styling="success" />*/}
            {/*        <Button text="Decline" styling="error" />*/}
            {/*        <Button text="Reschedule" />*/}
            {/*    </div>*/}
            {/*</div>*/}
            <div>
                {/*<header>*/}
                {/*    <div className="sliderLeft-calendar-hdl">*/}
                {/*        <Button text="April 2023" dropdown={true} />*/}
                {/*    </div>*/}
                {/*    <div className="sliderLeft-calendar-hdr">*/}
                {/*        <Button iconSrc="faCaretLeft" />*/}
                {/*        <Button iconSrc="faCaretRight" />*/}
                {/*    </div>*/}
                {/*</header>*/}
                {/*<main>*/}
                {/*    <div className="sliderLeft-calendar-week">*/}
                {/*        {getDaysOfWeek(true).map((weekDay) => (*/}
                {/*            <span>{weekDay}</span>*/}
                {/*        ))}*/}
                {/*    </div>*/}
                {/*    <div className="sliderLeft-calendar-days">*/}
                {/*        {getDaysOfMonth().map(({ day, month, year, prevOrNext}) => (*/}
                {/*            <div className="sliderLeft-calendar-day">*/}
                {/*                <span className={prevOrNext ? "sliderLeft-calendar-day-prevOrNext" : ""}>{day}</span>*/}
                {/*                <div className="sliderLeft-calendar-day-events">*/}
                {/*                    {day === 27 && <FaIcon src="faCircle" styling="solid" />}*/}
                {/*                    {day === 4 && <FaIcon src="faCircle" styling="solid" />}*/}
                {/*                    {day === 4 && <FaIcon src="faCircle" styling="solid" />}*/}
                {/*                    {day === 7 && <FaIcon src="faCircle" styling="solid" />}*/}
                {/*                    {day === 13 && <FaIcon src="faCircle" styling="solid" />}*/}
                {/*                    {day === 14 && <FaIcon src="faCircle" styling="solid" />}*/}
                {/*                    {day === 14 && <FaIcon src="faCircle" styling="solid" />}*/}
                {/*                    {day === 19 && <FaIcon src="faCircle" styling="solid" />}*/}
                {/*                    {day === 19 && <FaIcon src="faCircle" styling="solid" />}*/}
                {/*                    {day === 19 && <FaIcon src="faCircle" styling="solid" />}*/}
                {/*                    {day === 24 && <FaIcon src="faCircle" styling="solid" />}*/}
                {/*                    {day === 25 && <FaIcon src="faCircle" styling="solid" />}*/}
                {/*                    {day === 25 && <FaIcon src="faCircle" styling="solid" />}*/}
                {/*                    {day === 26 && <FaIcon src="faCircle" styling="solid" />}*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        ))}*/}
                {/*    </div>*/}
                {/*    <div className="sliderLeft-calendar-invitations">*/}
                {/*        <h4>Invitations</h4>*/}
                {/*    </div>*/}
                {/*    <div className="sliderLeft-calendar-upevents">*/}
                {/*        <h4>Upcoming Events</h4>*/}
                {/*    </div>*/}
                {/*</main>*/}
            </div>

        </StyledSchedulePages>
    )
}