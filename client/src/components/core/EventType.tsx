import React, { useState } from "react";

import { StyledEventType } from "../../assets/styles/components/core/EventType.styles";
import { IEventTypeProps, TEventListItems } from "../../assets/types/components/core/EventType";

import { FaIcon } from "./FontAwesomeIcon";
import { Button } from "./Button";
import { Tag } from "./Tag";
import { Switch } from "./Switch";

import { addListItem } from "../../utils/helpers/UnorderedList";

export const EventType = ({ tags = [], ...props }: IEventTypeProps): JSX.Element => {
    const listItems: TEventListItems = { general: "general", notes: "notes", payment: "payment" };
    const [ isSettingsVisible, setIsSettingsVisible ] = useState<boolean>(false);
    const [ activeItem, setActiveItem ] = useState<string>(listItems.general);

    const _onSettingsClick = (evt: React.MouseEvent<HTMLButtonElement>): void => {
        /** @desc Determine closes parent element by classname */
        //const parentElement = evt.currentTarget.closest(".schedulePages-types-content-eventtypes");
        setIsSettingsVisible(true);
    };

    const _onSettingsClickCallback = (): void => {
        setIsSettingsVisible(false);
    };

    const _addContentItemGeneral = (): JSX.Element => (
        <div className="eventType-content-item">
            {_addContentParts("faLocationDot", props.locationText)}
            {_addContentParts("faStopwatch", props.time.toString())}
            {_addContentParts("faArrowUpRightFromSquare", props.hrefText, props.href)}
        </div>
    );

    const _addContentItemNotes = (): JSX.Element => (
        <div className="eventType-content-item">

        </div>
    );

    const _addContentItemPayment = (): JSX.Element => (
        <div className="eventType-content-item">

        </div>
    );

    const _addContentParts = (iconSrc: string, text: string, href?: string): JSX.Element => (
        <div className="flex-svg-with-text">
            <FaIcon src={iconSrc} styling="thin" />
            {href ? <a href={`/page${href}`} target="_blank">{text}</a> : <span>{text}</span>}
        </div>
    );

    return (
        <StyledEventType key={props.id} iconBgColor={props.iconBgColor} isSettingsVisible={isSettingsVisible}>
            <div className={`eventType-container ${isSettingsVisible ? "eventType-inactive" : String()}`}>
                <header>
                    <div className="flex-justify-between-left">
                        <div className="eventType-icon">
                            <FaIcon src={props.iconSrc} styling="solid" />
                        </div>
                        <div className="eventType-info">
                            <span className="title">{props.title}</span>
                            <p>{props.eventTypeText}</p>
                        </div>
                    </div>
                    <div className="flex-justify-between-right">
                        <Button iconSrc="faArrowUpRightAndArrowDownLeftFromCenter" showBorder={false} />
                        <Button id="eventTypesSettings" iconSrc="faEllipsisStrokeVertical" showBorder={false} iconStyling="solid" dropdown={true} dropdownFloat="right" dropdownCallback={_onSettingsClickCallback} onClick={_onSettingsClick}/>
                    </div>
                </header>
                <div className="eventType-content">
                    {tags.length > 0 && <div className="eventType-content-tags">
                        {tags.map(({ text, isPayable }) => <Tag text={text} styling="thin" className="sliderLeft-calendar-tag" />)}
                    </div>}
                    <ul className="horizontal-list">
                        {addListItem({ activeItem, key: listItems.general, iconSrc: "faSquareInfo", text: "General", onClick: () => setActiveItem("general") })}
                        {addListItem({ activeItem, key: listItems.notes, iconSrc: "faNotes", text: "Notes", onClick: () => setActiveItem("notes") })}
                        {addListItem({ activeItem, key: listItems.payment, iconSrc: "faCreditCard", text: "Payment", onClick: () => setActiveItem("payment") })}
                    </ul>
                    {activeItem === listItems.general && _addContentItemGeneral()}
                    {activeItem === listItems.notes && _addContentItemNotes()}
                    {activeItem === listItems.payment && _addContentItemPayment()}
                </div>
                <footer>
                    <div className="flex-justify-between-left">
                        <Button text="Share" iconSrc="faShareAll" styling="light" />
                        <Button text="Copy" iconSrc="faCopy" styling="light" />
                    </div>
                    <div className="flex-justify-between-right">
                        <Switch />
                    </div>
                </footer>
            </div>
        </StyledEventType>
    )
}