import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import { StyledProvide } from "../../../../assets/styles/components/dialog/core/eventTypes/Provide.styles";
import { IDialogContentProps } from "../../../../assets/types/components/core/Dialog";
import { IEventTypeProps } from "../../../../assets/types/components/core/EventType";
import { ModelEventTypeMenuItems, ModelEventTypeMenuKeys } from "../../../../assets/models/components/core/EventType";

import { Button } from "../../../core/Button";
import { Input } from "../../../core/Input";

import { addListItem, addListItemWithCheckState } from "../../../../utils/helpers/UnorderedList";
import {FaIcon} from "../../../core/FontAwesomeIcon";
import {Switch} from "../../../core/Switch";

export const Provide = ({ callback = () => {}, ...props }: IDialogContentProps): JSX.Element => {
    const [ activeItem, setActiveItem ] = useState<string>(ModelEventTypeMenuKeys.general);
    const [ eventTypeProps, setEventTypeProps ] = useState<IEventTypeProps>(props.data);

    debugger;

    /** @desc Returns the translation function for reading from the locales files */
    const { t } = useTranslation();

    return (
        <StyledProvide>
            <header>
                <ul className="horizontal-list">
                    {ModelEventTypeMenuItems.map(({ key, iconSrc, text}) => addListItemWithCheckState({
                        activeItem, key, iconSrc, text: t(text),
                        onClick: (path) => setActiveItem(path)
                    }))}
                </ul>
            </header>
            <div className="eventType-edit-content">
                <div className="flex-header-block-column">
                    <div className="eventType-edit-content-groupInfo">
                        <h4>Event information</h4>
                        <span>Have an in-depth look at all</span>
                    </div>
                    <Input id="eventName" label="Event name" required={true} iconSrc="faInputText" iconStyling="thin" className="eventType-edit-content-input" value={eventTypeProps.title} />
                    <div style={{ width: "300px" }}>
                        <label className="required">Event type</label>
                        <Button id="eventTypeTypes" text="Choose an event type" iconSrc="faFlag" iconStyling="solid" dropdown={true} />
                    </div>
                    <div style={{ width: "300px" }}>
                        <label>Location(s)</label>
                        <div className="eventType-edit-content-locations">
                            <Button id="eventTypeLocations" text="Add Location" iconSrc="faAdd" iconStyling="solid" dropdown={true} />
                            <Input id="locationPersonalMeeting" iconSrc="faLocationDot" iconStyling="thin" className="eventType-edit-content-input" value="Personal Meeting" disabled={true} customIcon="faXmark"/>
                            <Input id="locationCall" iconSrc="faMobile" iconStyling="thin" className="eventType-edit-content-input" value="Call" disabled={true} customIcon="faXmark"/>
                        </div>
                    </div>
                    <Input id="eventTypeLink" label="Event link" required={true} iconSrc="faArrowUpRightFromSquare" iconStyling="thin" message="/mstoeckli/" className="eventType-edit-content-input" onChange={() => {}} />
                    <div style={{ width: "300px" }}>
                        <label>Event color</label>
                        <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
                            <Button id="eventTypeColor" text="Choose a Color" iconSrc="faBrush" iconStyling="solid" dropdown={true} />
                            <div className="color-tile"></div>
                        </div>

                    </div>
                </div>
                <div className="flex-header-block-column">
                    <div className="eventType-edit-content-groupInfo">
                        <h4>Time Aspect</h4>
                        <span>Have an in-depth look at all</span>
                    </div>
                    <div style={{ width: "300px" }}>
                        <label className="required">Duration</label>
                        <Button id="eventTypeDurations" text="Duration" iconSrc="faStopwatch" iconStyling="solid" dropdown={true} />
                    </div>
                    <div style={{ width: "300px" }}>
                        <label>Buffer times</label>
                        <span className="eventType-infoText">Give yourself some buffer time to prepare for or follow up on events.</span>
                    </div>
                    <div style={{ width: "300px" }}>
                        <label>Before</label>
                        <div className="flex-header-block-row">
                            <Switch />
                            <Button id="eventTypeDurations" text="15 Minutes" iconSrc="faHourglassStart" iconStyling="solid" dropdown={true} disabled={true} />
                        </div>
                    </div>
                    <div style={{ width: "300px" }}>
                        <label>After</label>
                        <div className="flex-header-block-row">
                            <Switch />
                            <Button id="eventTypeDurations" text="15 Minutes" iconSrc="faHourglassEnd" iconStyling="solid" dropdown={true} disabled={true} />
                        </div>
                    </div>
                    <div style={{ width: "300px" }}>
                        <label className="required">Date range</label>
                        <span className="eventType-infoText">Give yourself some buffer time to prepare </span>
                    </div>
                    <div style={{ width: "300px" }}>
                        <div className="flex-header-block-column">
                            <div style={{ width: "300px" }}>
                                <label>Zukunft</label>
                                <div className="flex-header-block-row">
                                    <Switch />
                                    <Input id="eventName" iconStyling="thin" className="eventType-edit-content-input" value="30" style={{ maxWidth: "47px", minWidth: "47px" }} />
                                    <Button id="eventTypeDateRange" text="Calendar days" iconSrc="faStopwatch" iconStyling="solid" dropdown={true} />
                                </div>
                            </div>
                            <div style={{ width: "300px" }}>
                                <label>Zukunft</label>
                                <div className="flex-header-block-row">
                                    <Switch />
                                    <Button id="eventTypeDateRange" text="Schedule in a certain range" iconSrc="faCalendarRange " iconStyling="solid" dropdown={true} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer>
                <div className="flex-justify-between-left">
                    <Button text="Share" iconSrc="faShareAll" styling="light" />
                </div>
                <div className="flex-justify-between-right">
                    <Button text="Close" iconSrc="faXmark" iconStyling="solid" styling="light" />
                    <Button text="Save" iconSrc="faSave" iconStyling="solid" styling="create" />
                </div>
            </footer>
        </StyledProvide>
    )
}