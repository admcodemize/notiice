import React, { useReducer, useState } from "react";
import { useTranslation } from "react-i18next";

import { StyledProvide } from "../../../../assets/styles/components/dialog/core/eventTypes/Provide.styles";
import { IDialogContentProps } from "../../../../assets/types/components/core/Dialog";
import { IEventTypeProps, TEventTypeActionType } from "../../../../assets/types/components/core/EventType";
import { ModelEventTypeMenuItems, ModelEventTypeMenuKeys } from "../../../../assets/models/components/core/EventType";

import { Button } from "../../../core/Button";
import { Input } from "../../../core/Input";
import { ScrollClickIcon } from "../../../core/ScrollClickIcon";
import { FaIcon } from "../../../core/FontAwesomeIcon";
import { Switch } from "../../../core/Switch";
import { RichTextEditor } from "../../../core/RichTextEditor";

import { addListItemWithCheckState } from "../../../../utils/helpers/UnorderedList";

function eventTypeReducer(state: IEventTypeProps, action: TEventTypeActionType) {
    switch (action.type) {
        case "input": {
            return state;
        }
        default: return state;
    }
}

export const Provide = ({ callback = () => {}, ...props }: IDialogContentProps): JSX.Element => {
    const [ activeItem, setActiveItem ] = useState<string>(ModelEventTypeMenuKeys.general);

    const [ state, dispatch ] = useReducer(eventTypeReducer, props?.data)

    /** @desc Returns the translation function for reading from the locales files */
    const { t } = useTranslation();

    const _onClickSave = (): void => {
        callback(props.id, false, {
            state
        });
    };

    const _onInputChange = (id: string, evt: React.ChangeEvent<HTMLInputElement>): void => {
        debugger

    }

    const _addContentItemGeneral = (): JSX.Element => (
        <>
            <div className="flex-header-block-column">
                <div className="eventType-edit-content-groupInfo">
                    <h4>Event information</h4>
                    <span>Have an in-depth look at all</span>
                </div>
                <Input id="eventName" label="Event name" required={true} iconSrc="faInputText" iconStyling="thin" className="eventType-edit-content-input" value={state?.title} onChange={(evt) => _onInputChange("title", evt)}/>
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
                <Input id="eventTypeLink" label="Event link" required={true} iconSrc="faArrowUpRightFromSquare" iconStyling="thin" value={state?.href} message={`/url/${state?.href || String()}`} className="eventType-edit-content-input" onChange={() => {}} />
                <div style={{ display: "flex", gap: "24px", width: "300px" }}>
                    <div>
                        <label>Event color</label>
                        <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                            <Button id="coreColorPicker" iconSrc="faBrush" iconStyling="solid" dropdown={true} />
                            <div className="color-tile" style={{ backgroundColor: "#2c3e50", margin: "0"}}></div>
                        </div>
                    </div>
                    <div>
                        <label>Event icon</label>
                        <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                            <Button id="eventTypeIcons" iconSrc="faIcons" iconStyling="solid" dropdown={true} />
                            <FaIcon src="faIcons" />
                        </div>
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
                        <label>Plan a maximum of "X" days into the future</label>
                        <div className="flex-header-block-row">
                            <Switch />
                            <Input id="eventName" iconStyling="thin" className="eventType-edit-content-input" value="30" style={{ maxWidth: "47px", minWidth: "47px" }} />
                            <Button id="eventTypeDateRange" text="Calendar days" iconSrc="faStopwatch" iconStyling="solid" dropdown={true} />
                        </div>
                    </div>
                    <div style={{ width: "300px" }}>
                        <label>Schedule in a specific date range</label>
                        <div className="flex-header-block-row">
                            <Switch />
                            <Button id="eventTypeDateRange" text="Schedule in a certain range" iconSrc="faCalendarRange" iconStyling="solid" dropdown={true} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );

    const _addContentItemNotes = (): JSX.Element => (
        <>
            <div className="flex-header-block-column">
                <div className="eventType-edit-content-groupInfo">
                    <h4>Private Notes</h4>
                    <span>Have an in-depth look at all</span>
                </div>
                <RichTextEditor modules={{
                    customToolbar: {
                        container: "eventTypePrivate",
                    }
                }}/>
            </div>
            <div className="flex-header-block-column">
                <div className="eventType-edit-content-groupInfo">
                    <h4>Public Notes</h4>
                    <span>Have an in-depth look at all</span>
                </div>
                {/*<RichTextEditor modules={{*/}
                {/*    customToolbar: {*/}
                {/*        id: "eventType",*/}
                {/*        container: "eventTypePublic",*/}
                {/*        handlers: {*/}
                {/*            variables: () => {*/}
                {/*                debugger*/}
                {/*            }*/}
                {/*        }*/}
                {/*    }*/}
                {/*}}/>*/}
            </div>
        </>
    );

    const _addContentItemPayment = (): JSX.Element => (
        <div>
            payment
        </div>
    );


    return (
        <StyledProvide>
            <header className="dialog-container-toolbar">
                <ScrollClickIcon iconSrc="faCaretLeft" scrollTo="right" onClick={() => { debugger }} />
                <ul className="horizontal-list">
                    {ModelEventTypeMenuItems.map(({ key, iconSrc, text}) => addListItemWithCheckState({
                        activeItem, key, iconSrc, text: t(text),
                        onClick: (path) => setActiveItem(path)
                    }))}
                </ul>
                <ScrollClickIcon iconSrc="faCaretRight" scrollTo="left" isVisible={true} onClick={() => { debugger }}/>
            </header>
            <div className="eventType-edit-content">
                {activeItem === ModelEventTypeMenuKeys.general && _addContentItemGeneral()}
                {activeItem === ModelEventTypeMenuKeys.notes && _addContentItemNotes()}
                {activeItem === ModelEventTypeMenuKeys.payment && _addContentItemPayment()}




            </div>
            <footer className="dialog-container-toolbar">
                <div className="flex-justify-between-left">
                    <Button text="Share" iconSrc="faShareAll" styling="light" />
                </div>
                <div className="flex-justify-between-right">
                    <Button text={t("global.close")} iconSrc="faXmark" iconStyling="solid" styling="light" />
                    <Button text={t("global.save")} iconSrc="faSave" iconStyling="solid" styling="create" onClick={_onClickSave} />
                </div>
            </footer>
        </StyledProvide>
    )
}