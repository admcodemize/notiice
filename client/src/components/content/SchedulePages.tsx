import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { StyledSchedulePages } from "../../assets/styles/components/content/SchedulePages.styles";
import { ModelSpaceMenuItems, ModelCallbacks } from "../../assets/models/components/content/SchedulePage";
import { TSpaceMenuItems, TCallback } from "../../assets/types/components/content/SchedulePages";

import { EventTypes } from "./schedulePages/EventTypes";
import { Events } from "./schedulePages/Events";
import { Calendar } from "./schedulePages/Calendar";
import { Schedule } from "./schedulePages/Schedule";
import { Settings } from "./schedulePages/Settings";

import { FaIcon } from "../core/FontAwesomeIcon";
import { Button } from "../core/Button";
import { Dialog } from "../core/Dialog";

import { addListItem } from "../../utils/helpers/UnorderedList";
import { useGlobalContext, useSchedulePageContext } from "../../utils/hooks/useContext";
import { useKeyPress } from "../../utils/hooks/useKeyPress";

export const SchedulePages = (): JSX.Element => {
    const [ isSliderToggleVisible, setIsSliderToggleVisible ] = useState<boolean>(false);
    const [ callback, setCallback ] = useState<TCallback>(ModelCallbacks);

    /** @desc In a suspense-enabled app, the navigate function is aware of when your app is suspending. */
    const navigate = useNavigate();

    /** @desc Returns the translation function for reading from the locales files */
    const { t } = useTranslation();

    /** @desc Load overall schedule page information */
    const { state, dispatch } = useSchedulePageContext();

    /** @desc Destructuring global context which handles show/hide of slider left/right -> ../context/Global.tsx **/
    const { toggleSliderLeft } = useGlobalContext();

    useEffect(() => {
        const obj: TSpaceMenuItems|any = ModelSpaceMenuItems.find(({ key}) => key === state.activeItem);
        (Object.keys(obj).length !== 0 && obj.constructor === Object) ? _updSliderLeft(obj.showSliderLeft) : _updSliderLeft(false);
        navigate(state.activeItem || "pages/types");
    }, []);

    useKeyPress(() => _updCallbackState("eventTypeProvide"), ["MetaLeft", "KeyE"])

    const _onMenuItemClick = (path: string, showSliderLeft: boolean): void => {
        navigate(path);
        dispatch({ type: "item", payload: { ...state, activeItem: path }});
        _updSliderLeft(showSliderLeft);
    };

    const _updSliderLeft = (showSliderLeft: boolean): void => {
        toggleSliderLeft(showSliderLeft);
        setIsSliderToggleVisible(showSliderLeft);
    };

    const _onCreateDropdownCallback = (key: string): void => {
        _updCallbackState(key);
    };

    const _updCallbackState = (key: string): void => {
        let obj: TCallback = {};
        Object.keys(ModelCallbacks).forEach((callbackKey: string) => {
            obj[callbackKey] = callbackKey === key
        });
        setCallback(() => (obj))
    }

    return (
        <StyledSchedulePages logoBgColor={state.space.logoBgColor}>
            <header className="content-pages-header">
                <div className="content-pages-project">
                    <div className="content-pages-project-icon">
                        <FaIcon src={state.space.logoSrc} styling="thin" />
                    </div>
                    <div className="content-pages-project-menu">
                        <div className="content-pages-project-actions">
                            <div>
                                {isSliderToggleVisible && <Button iconSrc="faSlidersSimple" styling="default" onClick={() => toggleSliderLeft()}/>}
                                {isSliderToggleVisible && <FaIcon src="faPipe" styling="solid" className="pipe-separator"/>}
                                <Button id="schedulePageSpaces" text={state.space.text} iconSrc={state.space.iconSrc} styling="default" dropdown={true} />
                                <FaIcon src="faPipe" styling="solid" className="pipe-separator"/>
                                <Button iconSrc="faArrowUpRightFromSquare" styling="default" />
                            </div>
                            <div>
                                <Button id="schedulePageCreate" iconSrc="faPlus" iconStyling="solid" text="Create" styling="create" dropdown={true} dropdownFloat="right" dropdownCallback={_onCreateDropdownCallback} />
                            </div>
                        </div>
                        <ul className="horizontal-list">
                            {ModelSpaceMenuItems.map(({ key, iconSrc, text, showSliderLeft}) => addListItem({
                                activeItem: state.activeItem, key, iconSrc, text: t(text),
                                onClick: (path) => _onMenuItemClick(path, showSliderLeft)
                            }))}
                        </ul>
                    </div>
                </div>
            </header>
            <div className="content-pages-routes">
                <Routes>
                    <Route path={`types`} element={<EventTypes />} />
                    <Route path={`events`} element={<Events />} />
                    <Route path={`calendar`} element={<Calendar />} />
                    <Route path={`schedule`} element={<Schedule />} />
                    <Route path={`settings`} element={<Settings />} />
                </Routes>
            </div>
            {callback.schedulePageSpaceProvide && <Dialog id="schedulePageSpaceProvide" callback={(key, isOpen) => setCallback((prevState) => ({ ...prevState, spaceEdit: false }))}/>}
            {callback.eventTypeProvide && <Dialog id="eventTypeProvide" callback={(key, isOpen) => setCallback((prevState) => ({ ...prevState, eventType: false }))}/>}
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