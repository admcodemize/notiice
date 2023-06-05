import React from "react";

import { StyledEventType } from "../../assets/styles/components/core/EventType.styles";

import { IEventTypeProps } from "../../assets/types/components/core/EventType";

import { FaIcon } from "./FontAwesomeIcon";
import { Button } from "./Button";
import { Tag } from "./Tag";
import { Switch } from "./Switch";

export const EventType = (props: IEventTypeProps): JSX.Element => {
    const _onSettingsClick = (evt: React.MouseEvent<HTMLButtonElement>): void => {
        /** @desc Determine closes parent element by classname */
        //const parentElement = evt.currentTarget.closest(".schedulePages-types-content-eventtypes");

    };

    const _onSettingsClickCallback = (): void => {

    };

    const _addContentParts = (iconSrc: string, text: string, href?: string): JSX.Element => (
        <div className="flex-svg-with-text">
            <FaIcon src={iconSrc} styling="thin" />
            {href ? <a href={`/page${href}`} target="_blank">{text}</a> : <span>{text}</span>}
        </div>
    );

    return (
        <StyledEventType key={props.id} iconBgColor={props.iconBgColor} isSettingsVisible={false}>
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
                <div className="eventType-content-tags">
                    {props.tags.map(({ text, isPayable }) => <Tag text={text} styling="thin" className="sliderLeft-calendar-tag" />)}
                </div>
                {_addContentParts("faLocationDot", props.locationText)}
                {_addContentParts("faStopwatch", props.dateTime.toTimeString())}
                {_addContentParts("faArrowUpRightFromSquare", props.hrefText, props.href)}
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
        </StyledEventType>
    )
}