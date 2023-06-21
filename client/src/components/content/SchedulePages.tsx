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

    // useKeyPress(() => _updCallbackState("eventTypeProvide"), ["MetaLeft", "KeyE"])

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
}