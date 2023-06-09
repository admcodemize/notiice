import React, { useState, useRef } from "react";

import { StyledButton } from "../../assets/styles/components/core/Button.styles";
import { StyledDropdown } from "../../assets/styles/components/core/Dropdown.styles";

import { IButtonProps } from "../../assets/types/components/core/Button";

import { FaIcon } from "./FontAwesomeIcon";

import { useClickOutside } from "../../utils/hooks/useClickOutside";
import { getDropdownElemByButtonId } from "../../utils/helpers/Dropdown";

export const Button = ({ id, iconSrc, iconStyling = "thin", text, styling = "default", className, dropdown, dropdownFloat, dropdownCallback, badge, onClick, ...props }: IButtonProps): JSX.Element => {
    const [ isOpen, setIsOpen ] = useState<boolean>(false);

    const refObjDropdown = useRef(null);
    useClickOutside(refObjDropdown, () => {
        /** @ts-ignore */
        if (!refObjDropdown?.current?.className.includes("dropdown-inactive")) {
            setIsOpen(false);
            dropdownCallback && dropdownCallback(id || String(), {});
        }
    });

    const _onClick = (evt: React.MouseEvent<HTMLButtonElement>): void => {
        if (dropdown) setIsOpen((prevState) => !prevState);
        onClick && onClick(evt, id);
    };

    return (
        <StyledDropdown float={dropdownFloat || "left"} className={className}>
            <StyledButton
                styling={styling}
                onClick={_onClick}
                isOpen={isOpen}
                showBorder={props?.showBorder || true}
                {...props}>
                <div className="button-infoLeft">
                    {iconSrc && <FaIcon src={iconSrc} styling={iconStyling} />}
                    {text && <span>{text}</span>}
                </div>
                {badge && <FaIcon src="faCircle" styling="solid" className="button-badge"/>}
                {dropdown && (text || iconSrc) && <FaIcon src="faCaretDown" styling="thin" className="button-dropdown" />}
            </StyledButton>
            {dropdown && <div ref={refObjDropdown} className={`dropdown-content ${isOpen 
                ? "dropdown-active" 
                : "dropdown-inactive"}`}>
                {id && getDropdownElemByButtonId({
                    id, callback: (key, isOpen, data) => {
                        setIsOpen(isOpen || false);
                        dropdownCallback && dropdownCallback(key, data);
                    }
                })}
            </div>}
        </StyledDropdown>
    )
}