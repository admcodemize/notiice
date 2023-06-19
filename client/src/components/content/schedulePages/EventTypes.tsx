import React from "react";
import { StyledEventTypes } from "../../../assets/styles/components/content/schedulePages/EventTypes.styles";
import { ModelEventTypesMock } from "../../../assets/models/components/content/schedulePage/EventTypes";

import { Button } from "../../core/Button";
import { EventType } from "../../core/EventType";

import { useAuthDecoder } from "../../../utils/hooks/useAuthDecoder";

export const EventTypes = (): JSX.Element => {
    /** @desc Decode JWT access token */
    const authDecoded = useAuthDecoder();

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
                    <div className="schedulePages-types-content-user">
                        <div className="flex-header-block-column">
                            <div>
                                <h2>{`${authDecoded()?.sub?.firstname} ${authDecoded()?.sub?.lastname}`}</h2>
                                <span>Have an in-depth look at all the metrics within your workspace.</span>
                            </div>
                        </div>

                        <div className="schedulePages-types-content-user-data">
                            {ModelEventTypesMock.map((eventTypeMock) => <EventType {...eventTypeMock} />)}
                        </div>
                    </div>
                </div>
            </div>
        </StyledEventTypes>
    )
}