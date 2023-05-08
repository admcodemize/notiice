import { StyledSchedule } from "../../../assets/styles/components/content/schedulePages/Schedule.styles";
import React from "react";
import {Button} from "../../core/Button";

export const Schedule = (): JSX.Element => {
    return (
        <StyledSchedule>
            <header className="flex-header-submenu-actions">
                <div className="flex-justify-between-left">
                    <Button text="Primary" iconSrc="faBusinessTime" dropdown={true} showBorder={false}/>
                </div>
                <div className="flex-justify-between-right">
                </div>
            </header>
            <div className="schedulePages-schedule-content">
                <div className="flex-header-block-column">
                    <div>
                        <h2>Schedule</h2>
                        <span>Choose a schedule below to edit or create a new one that you can apply to your event types</span>
                    </div>
                </div>
            </div>
        </StyledSchedule>
    )
}