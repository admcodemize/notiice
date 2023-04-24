import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import { StyledSchedulePages } from "../../assets/styles/components/content/SchedulePages.styles";

import { EventTypes } from "./schedulePages/EventTypes";
import { List } from "./schedulePages/List";
import { Calendar } from "./schedulePages/Calendar";
import { Schedule } from "./schedulePages/Schedule";
import { Settings } from "./schedulePages/Settings";

import { FaIcon } from "../core/FontAwesomeIcon";
import { Button } from "../core/Button";
import { DatePicker } from "../core/DatePicker";
import { Tag } from "../core/Tag";
import { Search } from "../core/Search";

import { getDateOfWeekByIdx, getDaysOfWeek, getHoursOfDay } from "../../utils/helpers/Calendar";

import { useCalendarContext } from "../../utils/hooks/useCalendarContext";
import {Landing} from "../base/Landing";
import {RoleBasedRoute} from "../routes/RoleBasedRoute";
import {RoleProps, RouteProps} from "../../assets/constants/Properties";
import {Dashboard} from "./Dashboard";
import {Workflow} from "./Workflow";
import {WorkSchedule} from "./WorkSchedule";
import {Integrations} from "./Integrations";

export const SchedulePages = (): JSX.Element => {
    const [ activeItem, setActiveItem ] = useState<string>("types");
    const navigate = useNavigate();

    const _onMenuItemClick = (path: string): void => {
        navigate(path);
        setActiveItem(path);
    };

    const _addMenuItem = (path: string, iconSrc: string, text: string): JSX.Element => (
        <li key={path} className={activeItem === path ? "content-pages-menu-item-active" : ""} onClick={() => _onMenuItemClick(path)}>
            <FaIcon src={iconSrc} styling="thin" />
            <span>{text}</span>
        </li>
    );

    return (
        <StyledSchedulePages>
            <header className="content-pages-header">
                <div className="content-pages-project">
                    <div className="content-pages-project-icon">
                        <FaIcon src="faBolt" styling="thin" />
                    </div>
                    <div className="content-pages-project-menu">
                        <div className="content-pages-project-actions">
                            <div>
                                <Button text="AEW FI" styling="default" dropdown={true} />
                                <Button iconSrc="faLink" styling="default" />
                            </div>
                            <div>
                                <Search />
                                <FaIcon src="faPipe" styling="thin" className="pipe-separator"/>
                                <Button iconSrc="faPlus" text="Create" styling="create"/>
                                <FaIcon src="faPipe" styling="thin" className="pipe-separator"/>
                                <Button id="inbox" iconSrc="faMegaphone" text="Inbox" badge={true} dropdown={true} dropdownFloat="right"/>
                            </div>
                        </div>
                        <ul>
                            {_addMenuItem("types", "faToolbox", "Event Types")}
                            {_addMenuItem("list", "faList", "List")}
                            {_addMenuItem("calendar", "faCalendar", "Calendar")}
                            {_addMenuItem("schedule", "faBusinessTime", "Work Schedule")}
                            {_addMenuItem("settings", "faCog", "Settings")}
                        </ul>
                    </div>
                </div>
            </header>
            <div className="content-pages-routes">
                <Routes>
                    <Route path={`types`} element={<EventTypes />} />
                    <Route path={`list`} element={<List />} />
                    <Route path={`calendar`} element={<Calendar />} />
                    <Route path={`schedule`} element={<Schedule />} />
                    <Route path={`settings`} element={<Settings />} />
                </Routes>
            </div>

        </StyledSchedulePages>
    );
    // /** @desc Destructuring calendar context which handles the overall current week */
    // const { state, dispatch } = useCalendarContext();
    //
    //
    // const refObjGrid = useRef(null);
    // useLayoutEffect(() => {
    //     debugger
    //     let a = refObjGrid;
    //     debugger
    // }, [refObjGrid]);
    //
    //
    // const _onToday = (): void => dispatch({ type: "today", payload: state });
    // const _onPrevWeek = (): void => dispatch({ type: "prev", payload: state });
    // const _onNextWeek = (): void => {};
    //
    // const _getHoursOfDay = (hour: string): JSX.Element => (
    //     <>
    //         <div className="content-calendar-grid-item content-calendar-time">
    //             <span>{hour}</span>
    //         </div>
    //         <div className="content-calendar-grid-item content-calendar-datetime">
    //             <div className="content-calendar-grid-sub-item">
    //                 <div>
    //                     <li></li>
    //                 </div>
    //                 <div></div>
    //             </div>
    //         </div>
    //         <div className="content-calendar-grid-item content-calendar-datetime">
    //             <div className="content-calendar-grid-sub-item">
    //                 <div></div>
    //                 <div></div>
    //             </div>
    //         </div>
    //         <div className="content-calendar-grid-item content-calendar-datetime">
    //             <div className="content-calendar-grid-sub-item">
    //                 <div></div>
    //                 <div></div>
    //             </div>
    //         </div>
    //         <div className="content-calendar-grid-item content-calendar-datetime">
    //             <div className="content-calendar-grid-sub-item">
    //                 <div></div>
    //                 <div></div>
    //             </div>
    //         </div>
    //         <div className="content-calendar-grid-item content-calendar-datetime">
    //             <div className="content-calendar-grid-sub-item">
    //                 <div></div>
    //                 <div></div>
    //             </div>
    //         </div>
    //         <div className="content-calendar-grid-item content-calendar-datetime">
    //             <div className="content-calendar-grid-sub-item">
    //                 <div></div>
    //                 <div></div>
    //             </div>
    //         </div>
    //         <div className="content-calendar-grid-item content-calendar-datetime">
    //             <div className="content-calendar-grid-sub-item">
    //                 <div></div>
    //                 <div></div>
    //             </div>
    //         </div>
    //     </>
    //     // <div className="content-calendar-week">
    //     //     <div className="content-calendar-times">
    //     //         <span>{hour}</span>
    //     //     </div>
    //     //     {/*{state.datesBetween.map((date) => (*/}
    //     //     {/*    <ul id={date.toDateString()} className="content-calendar-weekday content-calendar-time">*/}
    //     //     {/*        <li id={new Date(date.getFullYear(), date.getMonth(), date.getDate(), parseInt(hour.split(":")[0])).toTimeString()} onClick={() => { debugger }}>*/}
    //     //     {/*            <div>*/}
    //     //     {/*                <div>*/}
    //     //
    //     //     {/*                </div>*/}
    //     //     {/*            </div>*/}
    //     //     {/*        </li>*/}
    //     //     {/*        <li id={new Date(date.getFullYear(), date.getMonth(), date.getDate(), parseInt(hour.split(":")[0]), 30).toTimeString()}></li>*/}
    //     //     {/*    </ul>*/}
    //     //     {/*))}*/}
    //     // </div>
    // );
    //
    // return (
    //     <StyledCalendar>
    //         <header>
    //             <div className="content-calendar-hactions">
    //                 <div className="content-calendar-hactionsl">
    //                     <Button iconSrc="faCaretLeft"/>
    //                     <FaIcon src="faPipe" styling="thin" className="pipe-separator"/>
    //                     <Button id="spaces" iconSrc="faLayerGroup" text="AEW FI" dropdown={true} />
    //                 </div>
    //                 <div className="content-calendar-hactionsr">
    //                     <Search />
    //                     <FaIcon src="faPipe" styling="thin" className="pipe-separator"/>
    //                     <Button id="settings" iconSrc="faSlider" text="Settings" dropdown={true} dropdownFloat="right" />
    //                     <Button iconSrc="faRotateRight"/>
    //                     <Button iconSrc="faPlus" text="Create" styling="create"/>
    //                 </div>
    //             </div>
    //             <menu>
    //                 <div className="content-calendar-hml">
    //                     <Button iconSrc="faCalendarDay" text="Today" onClick={_onToday} />
    //                     <FaIcon src="faPipe" styling="thin" className="pipe-separator"/>
    //                     <Button iconSrc="faCaretLeft" onClick={_onPrevWeek}/>
    //                     <DatePicker id="datePicker" {...state} />
    //                     <Button iconSrc="faCaretRight" onClick={_onNextWeek}/>
    //                     <FaIcon src="faPipe" styling="thin" className="pipe-separator"/>
    //                     <Tag text={`Week ${state.week}`} />
    //                 </div>
    //                 <div className="content-calendar-hmr">
    //                     <Button id="inbox" iconSrc="faMegaphone" text="Inbox" badge={true} dropdown={true} dropdownFloat="right"/>
    //                     <FaIcon src="faPipe" styling="thin" className="pipe-separator"/>
    //                     <Button id="view" iconSrc="faMountainSun" text="Week" dropdown={true} dropdownFloat="right"/>
    //                 </div>
    //             </menu>
    //         </header>
    //         <div className="content-calendar-header content-calendar-grid">
    //             <div className="content-calendar-weekdays content-calendar-time">
    //                 <span>GMT+2</span>
    //             </div>
    //             {getDaysOfWeek(state.iso8601).map((weekDay, idx) => (
    //                 <div className="content-calendar-weekdays">
    //                     <div className={`content-calendar-weekdays-header ${idx === 4 && "content-calendar-current"}`}>
    //                         <div>
    //                             <span>{weekDay}</span>
    //                             <span className="content-calendar-weekdays-date">{getDateOfWeekByIdx(state.startDate, idx).getDate()}</span>
    //                         </div>
    //                         <p>{idx} Events</p>
    //                     </div>
    //                 </div>
    //             ))}
    //         </div>
    //         <div className="content-calendar-allday content-calendar-grid">
    //             <div className="content-calendar-weekdays content-calendar-time">
    //                 <span>All day</span>
    //             </div>
    //             {getDaysOfWeek(state.iso8601).map((weekDay, idx) => (
    //                 <div className={`content-calendar-weekdays ${idx === 4 && "content-calendar-current"}`}>
    //                     <div></div>
    //                     <div></div>
    //                 </div>
    //             ))}
    //         </div>
    //         <div className="content-calendar-data content-calendar-grid">
    //
    //             {getHoursOfDay().map((hour) => _getHoursOfDay(hour))}
    //         </div>
    //         {/*<div ref={refObjGrid} className="content-calendar-grid">*/}
    //         {/*    <div className="content-calendar-week content-calendar-week-init">*/}
    //         {/*        <div className="content-calendar-times">*/}
    //         {/*        </div>*/}
    //         {/*    </div>*/}
    //
    //         {/*    /!*<div className="content-calendar-week content-calendar-timeline">*!/*/}
    //         {/*    /!*    <div className="content-calendar-times" />*!/*/}
    //         {/*    /!*</div>*!/*/}
    //
    //
    //         {/*    {getHoursOfDay().map((hour) => _getHoursOfDay(hour))}*/}
    //         {/*</div>*/}
    //     </StyledCalendar>
    // )
}