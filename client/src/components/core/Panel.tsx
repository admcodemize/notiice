import React, { useState } from "react";
import { StyledPanel } from "../../assets/styles/components/core/Panel.styles";
import { IPanelProps } from "../../assets/types/components/core/Panel";

import { Button } from "./Button";

export const Panel = ({ title, info, children, ...props }: IPanelProps): JSX.Element => {
    const [ expanded, setExpanded ] = useState<boolean>(props?.expanded || true);
    return (
        <StyledPanel expanded={expanded}>
            <header className="flex-header-block-row">
                <Button iconSrc={expanded ? "faCaretUp" : "faCaretDown"} iconStyling="solid" styling="tag" onClick={() => setExpanded((prevState) => !prevState)}/>
                <div className="flex-header-block-column">
                    <h5>{title}</h5>
                    {info && <p>{info}</p>}
                </div>
            </header>
            <div className={`panel-content ${expanded ? "panel-content-active" : "panel-content-inactive"}`}>
                {children}
            </div>
        </StyledPanel>
    )
}