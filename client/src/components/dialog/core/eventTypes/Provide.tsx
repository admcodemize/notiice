import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import { StyledProvide } from "../../../../assets/styles/components/dialog/core/eventTypes/Provide.styles";
import { IDialogContentProps } from "../../../../assets/types/components/core/Dialog";
import { IEventTypeProps } from "../../../../assets/types/components/core/EventType";
import { ModelEventTypeMenuItems, ModelEventTypeMenuKeys } from "../../../../assets/models/components/core/EventType";

import { Button } from "../../../core/Button";
import { Input } from "../../../core/Input";

import { addListItem } from "../../../../utils/helpers/UnorderedList";

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
                    {ModelEventTypeMenuItems.map(({ key, iconSrc, text}) => addListItem({
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
                    <div>
                        <label>Location(s)</label>
                        <div className="eventType-edit-content-locations">
                            <div className="eventType-edit-content-location">
                                <Button id="eventLocation" text="Location" iconSrc="faLocationDot" dropdown={true} />
                                <Button iconSrc="faTrashXmark" iconStyling="solid" styling="error"  />
                            </div>
                            <div className="eventType-edit-content-location">
                                <Button id="eventLocation" text="Location" iconSrc="faLocationDot" dropdown={true} />
                                <Button iconSrc="faTrashXmark" iconStyling="solid" styling="error"  />
                            </div>
                        </div>
                        <Button text="Add location option" styling="light" showBorder={false} iconSrc="faAdd" iconStyling="solid" />
                    </div>
                    <Input id="eventLink" label="Event link" required={true} iconSrc="faArrowUpRightFromSquare" iconStyling="thin" message="/mstoeckli/" className="eventType-edit-content-input" onChange={() => {}} />
                </div>
            </div>
            <footer>
                <div className="flex-justify-between-left">
                    <Button text="Share" iconSrc="faShareAll" styling="light" />
                    <Button text="Live Preview" iconSrc="faArrowUpRightFromSquare" styling="light" />
                </div>
                <div className="flex-justify-between-right">
                    <Button text="Close" iconSrc="faXmark" iconStyling="solid" styling="light" />
                    <Button text="Save" iconSrc="faSave" iconStyling="solid" styling="create" />
                </div>
            </footer>
        </StyledProvide>
    )
}