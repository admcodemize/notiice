import React, { useState } from "react";

import { StyledEventType } from "../../assets/styles/components/core/EventType.styles";
import { IEventTypeProps, TEventTypeContentPartsProps } from "../../assets/types/components/core/EventType";
import { ModelEventTypeMenuItems, ModelEventTypeMenuKeys } from "../../assets/models/components/core/EventType";

import { FaIcon } from "./FontAwesomeIcon";
import { Button } from "./Button";
import { Tag } from "./Tag";
import { Switch } from "./Switch";
import { RichTextEditor } from "./RichTextEditor";
import { Dialog } from "./Dialog";

import { addListItem } from "../../utils/helpers/UnorderedList";
import {ScrollClickIcon} from "./ScrollClickIcon";

export const EventType = ({ tags = [], ...props }: IEventTypeProps): JSX.Element => {
    const [ isSettingsVisible, setIsSettingsVisible ] = useState<boolean>(false);
    const [ activeItem, setActiveItem ] = useState<string>(ModelEventTypeMenuKeys.general);
    const [ showEdit, setShowEdit ] = useState<boolean>(false);

    const _onSettingsClick = (evt: React.MouseEvent<HTMLButtonElement>): void => {
        setIsSettingsVisible(true);
    };

    const _onSettingsClickCallback = (): void => {
        setIsSettingsVisible(false);
    };

    const _addContentItemGeneral = (): JSX.Element => (
        <div className="eventType-content-item">
            {_addContentParts({ iconSrc: "faLocationDot", text: props.locationText })}
            {_addContentParts({ iconSrc: "faStopwatch", text: props.time.toString() })}
            {_addContentParts({ iconSrc: "faArrowUpRightFromSquare", text: props.hrefText, href: props.href })}
        </div>
    );

    const _addContentItemNotes = (): JSX.Element => (
        <div className="eventType-content-item">
            <RichTextEditor readOnly={true} placeholder="Capture a public note in edit mode, which will be seen in the booking page"/>
        </div>
    );

    const _addContentItemPayment = (): JSX.Element => (
        <div className="eventType-content-item eventType-content-item-payment">
            <div className="vertical-list-scroll-container">
                <ul className="vertical-list">
                    {addListItem({ activeItem: "mastercard", key: "mastercard", iconSrc: "faCcMastercard", iconStyling: "brands", text: "Mastercard", onClick: () => {}})}
                    {addListItem({ activeItem: "mastercard", key: "paypal", iconSrc: "faCcPaypal", iconStyling: "brands", text: "PayPal", onClick: () => {}})}
                    {addListItem({ activeItem: "mastercard", key: "apple", iconSrc: "faCcApplePay", iconStyling: "brands", text: "Apple Pay", onClick: () => {}})}
                </ul>
            </div>
            <div className="payment-qrcode">

            </div>
        </div>
    );

    const _addContentParts = ({ iconSrc, iconStyling = "thin", text, href }: TEventTypeContentPartsProps): JSX.Element => (
        <div className="flex-svg-with-text">
            <FaIcon src={iconSrc} styling={iconStyling} />
            {href ? <a href={`/page${href}`} target="_blank">{text}</a> : <span>{text}</span>}
        </div>
    );

    return (
        <>
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
                            <Button iconSrc="faArrowUpRightAndArrowDownLeftFromCenter" showBorder={false} onClick={() => setShowEdit(true)}/>
                            <Button id="eventTypesSettings" iconSrc="faEllipsisStrokeVertical" showBorder={false} iconStyling="solid" dropdown={true} dropdownFloat="right" dropdownCallback={_onSettingsClickCallback} onClick={_onSettingsClick}/>
                        </div>
                    </header>
                    <div className="eventType-content">
                        {tags.length > 0 && <div className="eventType-content-tags">
                            {tags.map(({ text, isPayable }) => <Tag text={text} styling="thin" className="sliderLeft-calendar-tag" />)}
                        </div>}
                        <ul className="horizontal-list">
                            {ModelEventTypeMenuItems.map((menuItem) => !menuItem.onlyProvideMode && addListItem({
                                activeItem, key: menuItem.key, iconSrc: menuItem.iconSrc, text: menuItem.text, onClick: () => setActiveItem(menuItem.key)
                            }))}
                        </ul>
                        {activeItem === ModelEventTypeMenuKeys.general && _addContentItemGeneral()}
                        {activeItem === ModelEventTypeMenuKeys.notes && _addContentItemNotes()}
                        {activeItem === ModelEventTypeMenuKeys.payment && _addContentItemPayment()}
                    </div>
                    <footer>
                        <div className="flex-justify-between-left">
                            <Button text="Share" iconSrc="faShareAll" styling="light" />
                            <Button text="Copy" iconSrc="faCopy" styling="light" />
                        </div>
                        <div className="flex-justify-between-right">
                            <Switch htmlFor="eventType" checked={props.isActive} setChecked={() => {}}/>
                        </div>
                    </footer>
                </div>
            </StyledEventType>
            {showEdit && <Dialog id="eventTypeProvide" data={{tags, ...props}} callback={(key, isOpen) => setShowEdit(isOpen || false)}/>}
        </>
    )
}