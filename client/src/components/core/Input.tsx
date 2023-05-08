import React from 'react';

import { StyledInput } from '../../assets/styles/components/core/Input.styles';

import { IInputProps } from "../../assets/types/components/core/Input";

import { FaIcon } from "./FontAwesomeIcon";

export const Input = ({ id, label, info, required, iconSrc, message, height, messageType, onChange, ...props }: IInputProps): JSX.Element => {
    const _onShowHidePasswordClick = (evt: React.MouseEvent<SVGSVGElement>|any): void => {
        evt.currentTarget.previousElementSibling.type = evt?.currentTarget?.previousElementSibling?.type === "password"
            ? "text"
            : "password"
    }

    return (
        <StyledInput
            height={height || "32px"}
            messageType={messageType || "default"}>
            <label className={required ? "required": String()}>{label}</label>
            <div className={`input-container ${props.disabled ? "input-disabled" : String()}`}>
                {/** @ts-ignore */}
                <FaIcon src={iconSrc} styling="regular"/>
                <input
                    onChange={(evt: React.ChangeEvent<HTMLInputElement>) => onChange && onChange(evt, id)}
                    {...props} />
                {props.type === "password" && <FaIcon
                    className="input-password-icon"
                    src="faEyeLowVision"
                    styling="regular"
                    onClick={_onShowHidePasswordClick}/>}
            </div>
            {info && <p>{info}</p>}
            <span className={`input-message ${message ? "show" : "hide"}`}>{message}</span>
        </StyledInput>
    );
}