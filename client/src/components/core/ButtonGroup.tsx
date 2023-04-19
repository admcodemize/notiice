import React, { useState } from "react";

import { StyledButtonGroup } from "../../assets/styles/components/core/ButtonGroup.styles";

import { IButtonGroupProps } from "../../assets/types/components/core/ButtonGroup";

import { FaIcon } from "./FontAwesomeIcon";

export const ButtonGroup = ({ initialKey, buttons, onClick = () => {} }: IButtonGroupProps): JSX.Element => {
    const [ activeButtonGroupKey, setActiveButtonGroupKey ] = useState(initialKey);

    /** @desc Handle click for setting the active button group */
    const _onClick = (key: string|undefined) => setActiveButtonGroupKey(key || initialKey);

    return (
        <StyledButtonGroup>
            {buttons.map(({ id, iconSrc, text}) => (
                <button
                    key={id}
                    onClick={(evt: React.MouseEvent<HTMLButtonElement>) => {
                        _onClick(id);
                        onClick(evt, id || initialKey);
                    }}
                    className={activeButtonGroupKey === id ? "active" : "inactive"}>
                    {iconSrc && <FaIcon src={iconSrc} styling="thin" />}
                    <span>{text}</span>
                </button>
            ))}
        </StyledButtonGroup>
    );
};