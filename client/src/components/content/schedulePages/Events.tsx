import { StyledEvents } from "../../../assets/styles/components/content/schedulePages/Events.styles";
import {Button} from "../../core/Button";
import {Tag} from "../../core/Tag";

import { addListItem } from "../../../utils/helpers/UnorderedList";
import React, {useState} from "react";
import {FaIcon} from "../../core/FontAwesomeIcon";
import {ButtonGroup} from "../../core/ButtonGroup";

export const Events = (): JSX.Element => {
    const [ activeItems, setActiveItems ] = useState<[{ key: string, active: string }]>([{
        key: "/mstoeckli/event/id-129392",
        active: "general"
    }, {
        key: "/mstoeckli/event/id-129393",
        active: "description"
    }]);

    const _getActiveItemByKey = (key: string): string => {
        const activeItem = activeItems.find((state) => state.key === key);
        if (activeItem) return activeItem.active;
        else return "general"
    };

    return (
        <StyledEvents>
            <header className="flex-header-submenu-actions">
                <div className="flex-justify-between-left">
                    <Button text="Filter" iconSrc="faBarsFilter" dropdown={true} showBorder={false}/>
                    <Button text="All" iconSrc="faClipboardListCheck" showBorder={false}/>
                    <Button text="Pending" iconSrc="faMailbox" showBorder={false}/>
                    <Button text="Upcoming" iconSrc="faPhoneArrowDownLeft" showBorder={false}/>
                </div>
                <div className="flex-justify-between-right">
                </div>
            </header>
            <div className="schedulePages-events-content">
                {/*<div className="flex-header-block-column">*/}
                {/*    <div>*/}
                {/*        <h2>Analytics</h2>*/}
                {/*        <span>Have an in-depth look at all the metrics within your workspace.</span>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<div className="schedulePages-events-analytics">*/}
                {/*</div>*/}

                <div className="flex-header-block-column">
                    <div>
                        <h2>Events</h2>
                        <span>Have an in-depth look at all the metrics within your workspace.</span>
                    </div>
                </div>
                <div className="schedulePages-events-data">

                    <div key="/mstoeckli/event/id-129392" className="schedulePages-events-event">
                        <header>
                            <div className="flex-justify-between-left">
                                <div className="schedulePages-events-event-category"></div>
                                <div className="schedulePages-events-event-date">
                                    <span className="schedulePages-events-event-date-day">24</span>
                                    <span className="schedulePages-events-event-date-month">Apr</span>
                                </div>
                                <div className="schedulePages-events-event-info">
                                    <span className="title webkit-word-break webkit-line-clamp1">Übergreifender Workshop AEW FI</span>
                                    <span className="webkit-word-break webkit-line-clamp2">Beschreibung Test 1234 adfljs kldjas fkl öjasds dfaö dfklja kadjsf öas dfkl öjasdfkl jasdf</span>
                                </div>
                            </div>
                            <div className="flex-justify-between-right">
                                <Button iconSrc="faArrowUpRightAndArrowDownLeftFromCenter" showBorder={false} />
                                <Button iconSrc="faEllipsisStrokeVertical" showBorder={false} iconStyling="solid" />
                            </div>
                        </header>
                        <div className="schedulePages-events-event-tags">
                            <Tag text="Upcoming" styling="thin" className="sliderLeft-calendar-tag" />
                            <Tag text="One-on-One" styling="thin" className="sliderLeft-calendar-tag" />
                        </div>
                        <ul className="horizontal-list">
                            {/*{addListItem(_getActiveItemByKey("/mstoeckli/event/id-129392"), "general", "faSquareInfo", "General", () => {})}*/}
                            {/*{addListItem(_getActiveItemByKey("/mstoeckli/event/id-129392"), "description", "faFileLines", "Description", () => {})}*/}
                            {/*/!*{addListItem(activeItem, "members", "faUsersViewfinder", "Members", () => {})}*!/*/}
                            {/*{addListItem(_getActiveItemByKey("/mstoeckli/event/id-129392"), "payment", "faCreditCardFront", "Payment", () => {})}*/}
                            {/*/!*{addListItem(activeItem, "documents", "faFile", "Documents", () => {})}*!/*/}
                            {/*/!*{addListItem(activeItem, "notes", "faNotes", "Notizen", () => {})}*!/*/}
                        </ul>
                        <div className="schedulePages-events-event-content">
                            <div className="flex-svg-with-text">
                                <FaIcon src="faLocationDot" styling="thin" />
                                <span>Teams-Besprechung</span>
                            </div>
                            <div className="flex-svg-with-text">
                                <FaIcon src="faCalendarClock" styling="thin" />
                                <span>08:00 AM - 25.04.2023 / 05:00 PM</span>
                            </div>
                            <div className="flex-svg-with-text">
                                <FaIcon src="faStopwatch" styling="thin" />
                                <span>30 Minutes</span>
                            </div>
                            <div className="flex-svg-with-text">
                                <FaIcon src="faGlobeStand" styling="thin" />
                                <span>MZE GMT+2</span>
                            </div>
                        </div>
                        <footer>
                            <Button text="Join" iconSrc="faPhoneArrowDownLeft" styling="create"/>
                            <Button text="Share" iconSrc="faShareAll" styling="light"/>
                            <Button text="Reschedule" iconSrc="faPaperPlane" styling="light"/>
                        </footer>
                    </div>



                    <div className="schedulePages-events-event">
                        <header>
                            <div className="flex-justify-between-left">
                                <div className="schedulePages-events-event-category"></div>
                                <div className="schedulePages-events-event-date">
                                    <span className="schedulePages-events-event-date-day">04</span>
                                    <span className="schedulePages-events-event-date-month">Mai</span>
                                </div>
                                <div className="schedulePages-events-event-info">
                                    <span className="title webkit-word-break webkit-line-clamp1">Umfrage für Termin 1</span>
                                    <span className="webkit-word-break webkit-line-clamp2">Waschen/Schneiden/Föhnen</span>
                                </div>
                            </div>
                            <div className="flex-justify-between-right">
                                <Button iconSrc="faArrowUpRightAndArrowDownLeftFromCenter" showBorder={false} />
                                <Button iconSrc="faEllipsisStrokeVertical" showBorder={false} iconStyling="solid" />
                            </div>
                        </header>
                        <div className="schedulePages-events-event-tags">
                            <Tag text="Pending" styling="thin" className="sliderLeft-calendar-tag" />
                            <Tag text="Poll" styling="thin" className="sliderLeft-calendar-tag" />
                            <Tag text="One-on-One" styling="thin" className="sliderLeft-calendar-tag" />
                        </div>
                        <ul className="horizontal-list">
                            {/*{addListItem(_getActiveItemByKey("/mstoeckli/event/id-129393"), "general", "faSquareInfo", "General", () => {})}*/}
                            {/*{addListItem(_getActiveItemByKey("/mstoeckli/event/id-129393"), "description", "faFileLines", "Description", () => {})}*/}
                            {/*{addListItem(_getActiveItemByKey("/mstoeckli/event/id-129393"), "participants", "faUserGroupSimple", "Participants", () => {})}*/}
                            {/*/!*{addListItem(activeItem, "payment", "faCreditCardFront", "Payment", () => {})}*!/*/}
                            {/*/!*{addListItem(activeItem, "documents", "faFile", "Documents", () => {})}*!/*/}
                            {/*/!*{addListItem(activeItem, "notes", "faNotes", "Notizen", () => {})}*!/*/}
                        </ul>
                        <div className="schedulePages-events-event-content">
                            <div className="flex-svg-with-text">
                                <FaIcon src="faLocationDot" styling="thin" />
                                <span>Industriestrasse 20, 5001 Aarau</span>
                            </div>
                            <div className="flex-svg-with-text">
                                <FaIcon src="faAlarmClock" styling="thin" />
                                <span>05.05.2023 / 05:00 PM (Progressbar?)</span>
                            </div>
                            <div className="flex-svg-with-text">
                                <FaIcon src="faArrowUpRightFromSquare" styling="thin" />
                                <a href="/page/mstoeckli/poll1" target="_blank">/mstoeckli/poll1</a>
                            </div>
                            <div className="flex-svg-with-text">
                                <FaIcon src="faGlobeStand" styling="thin" />
                                <span>MZE GMT+2</span>
                            </div>
                        </div>
                        <footer>
                            <Button text="Close" iconSrc="faXmark" styling="error"/>
                            <Button text="Share" iconSrc="faShareAll" styling="light"/>
                            <Button text="Extend" iconSrc="faAlarmClock" styling="light"/>
                        </footer>
                    </div>


                </div>

            </div>
        </StyledEvents>
    )
}