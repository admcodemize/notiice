import { StyledEventTypes } from "../../../assets/styles/components/content/schedulePages/EventTypes.styles";

import { Button } from "../../core/Button";
import { FaIcon } from "../../core/FontAwesomeIcon";
import { Tag } from "../../core/Tag";
import {Switch} from "../../core/Switch";
import React from "react";

export const EventTypes = (): JSX.Element => {
    return (
        <StyledEventTypes>
            <header className="flex-header-submenu-actions">
                <div className="flex-justify-between-left">
                    <Button text="Filter" iconSrc="faBarsFilter" dropdown={true} showBorder={false}/>
                    <Button text="Sort" iconSrc="faArrowDownArrowUp" showBorder={false}/>
                    <Button text="Templates" iconSrc="faSheetPlastic" showBorder={false}/>
                </div>
                <div className="flex-justify-between-right">
                </div>
            </header>
            <div className="schedulePages-types-content">
                <div className="schedulePages-types-content-grid">

                    {/*<div className="schedulePages-types-content-user">*/}
                    {/*    <div className="schedulePages-types-content-user-info">*/}
                    {/*        <div className="schedulePages-types-content-user-info-image">*/}
                    {/*            <FaIcon src="faBolt" />*/}
                    {/*        </div>*/}
                    {/*        <div>*/}
                    {/*            <h4>Team</h4>*/}
                    {/*            <span>Public Event Types - Only visible in team schedule pages</span>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <div className="schedulePages-types-content-user-data">*/}
                    {/*        <div className="schedulePages-types-content-eventtypes">*/}
                    {/*            <header>*/}
                    {/*                <div className="schedulePages-types-content-eventtypes-left">*/}
                    {/*                    <div className="schedulePages-types-content-eventtypes-icon">*/}
                    {/*                        <FaIcon src="faCalendar" />*/}
                    {/*                    </div>*/}
                    {/*                    <div className="schedulePages-types-content-eventtypes-info">*/}
                    {/*                        <span>Event Type 1</span>*/}
                    {/*                        <p>One-on-One</p>*/}
                    {/*                    </div>*/}
                    {/*                </div>*/}
                    {/*                <div className="schedulePages-types-content-eventtypes-right">*/}
                    {/*                    <Button iconSrc="faArrowUpRightAndArrowDownLeftFromCenter" showBorder={false} />*/}
                    {/*                    <Button iconSrc="faEllipsisStrokeVertical" showBorder={false} iconStyling="solid" />*/}
                    {/*                </div>*/}
                    {/*            </header>*/}
                    {/*            <div className="schedulePages-types-content-eventtypes-content">*/}
                    {/*                <div className="schedulePages-types-content-eventtypes-tags">*/}
                    {/*                    <Tag text="English" iconSrc="faLanguage" styling="thin" className="sliderLeft-calendar-tag" />*/}
                    {/*                    <Tag text="$25" iconSrc="faCreditCardFront" styling="thin" className="sliderLeft-calendar-tag" />*/}
                    {/*                </div>*/}
                    {/*                <div className="schedulePages-types-content-eventtypes-item">*/}
                    {/*                    <FaIcon src="faLocationDot" styling="thin" />*/}
                    {/*                    <span>Teams-Besprechung</span>*/}
                    {/*                </div>*/}
                    {/*                <div className="schedulePages-types-content-eventtypes-item">*/}
                    {/*                    <FaIcon src="faStopwatch" styling="thin" />*/}
                    {/*                    <span>30 Minutes</span>*/}
                    {/*                </div>*/}
                    {/*                <div className="schedulePages-types-content-eventtypes-item">*/}
                    {/*                    <FaIcon src="faArrowUpRightFromSquare" styling="thin" />*/}
                    {/*                    <a href="/team/eventtype1" target="_blank">/team/eventtype1</a>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}



                    {/*    </div>*/}
                    {/*</div>*/}

                    <div className="schedulePages-types-content-user">
                        <div className="flex-header-block-column">
                            <div>
                                <h2>Marc Stöckli</h2>
                                <span>Have an in-depth look at all the metrics within your workspace.</span>
                            </div>
                        </div>
                        <div className="schedulePages-types-content-user-data">
                            <div className="schedulePages-types-content-eventtypes">
                                <header>
                                    <div className="flex-justify-between-left">
                                        <div className="schedulePages-types-content-eventtypes-icon">
                                            <FaIcon src="faCalendar" />
                                        </div>
                                        <div className="schedulePages-types-content-eventtypes-info">
                                            <span className="title">Event Type 1</span>
                                            <p>One-on-One</p>
                                        </div>
                                    </div>
                                    <div className="flex-justify-between-right">
                                        <Button iconSrc="faArrowUpRightAndArrowDownLeftFromCenter" showBorder={false} />
                                        <Button iconSrc="faEllipsisStrokeVertical" showBorder={false} iconStyling="solid" />
                                    </div>
                                </header>
                                <div className="schedulePages-types-content-eventtypes-content">
                                    <div className="schedulePages-types-content-eventtypes-tags">
                                        <Tag text="English" styling="thin" className="sliderLeft-calendar-tag" />
                                        <Tag text="$25" styling="thin" className="sliderLeft-calendar-tag" />
                                    </div>
                                    <div className="flex-svg-with-text">
                                        <FaIcon src="faLocationDot" styling="thin" />
                                        <span>Teams-Besprechung</span>
                                    </div>
                                    <div className="flex-svg-with-text">
                                        <FaIcon src="faStopwatch" styling="thin" />
                                        <span>30 Minutes</span>
                                    </div>
                                    <div className="flex-svg-with-text">
                                        <FaIcon src="faArrowUpRightFromSquare" styling="thin" />
                                        <a href="/page/mstoeckli/eventtype1" target="_blank">/mstoeckli/eventtype1</a>
                                    </div>
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

                            <div className="schedulePages-types-content-eventtypes schedulePages-types-content-eventtypes-inactive">
                                <header>
                                    <div className="flex-justify-between-left">
                                        <div className="schedulePages-types-content-eventtypes-icon">
                                            <FaIcon src="faCalendar" />
                                        </div>
                                        <div className="schedulePages-types-content-eventtypes-info">
                                            <span>Event Type 2</span>
                                            <p>One-on-One</p>
                                        </div>
                                    </div>
                                    <div className="flex-justify-between-right">
                                        <Button iconSrc="faArrowUpRightAndArrowDownLeftFromCenter" showBorder={false} />
                                        <Button iconSrc="faEllipsisStrokeVertical" showBorder={false} iconStyling="solid" />
                                    </div>
                                </header>
                                <div className="schedulePages-types-content-eventtypes-content">
                                    <div className="schedulePages-types-content-eventtypes-tags">
                                        <Tag text="English" styling="thin" className="sliderLeft-calendar-tag" />
                                    </div>
                                    <div className="flex-svg-with-text">
                                        <FaIcon src="faLocationDot" styling="thin" />
                                        <span>Industriestrasse 20, 5001 Aarau</span>
                                    </div>
                                    <div className="flex-svg-with-text">
                                        <FaIcon src="faStopwatch" styling="thin" />
                                        <span>60 Minutes</span>
                                    </div>
                                    <div className="flex-svg-with-text">
                                        <FaIcon src="faArrowUpRightFromSquare" styling="thin" />
                                        <a href="/page/mstoeckli/eventtype2" target="_blank">/mstoeckli/eventtype2</a>
                                    </div>
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

                        </div>
                    </div>

                </div>
            </div>
        </StyledEventTypes>
    )
}