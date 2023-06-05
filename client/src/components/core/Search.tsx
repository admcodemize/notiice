import React, { useState, useRef } from "react";

import { StyledSearch } from "../../assets/styles/components/core/Search.styles";
import { StyledDropdown } from "../../assets/styles/components/core/Dropdown.styles";

import { FaIcon } from "./FontAwesomeIcon";

import { getCalendarDropdownElemBySearch, getCalendarDropdownElemBySearchClick } from "../../utils/helpers/Dropdown";

import { useClickOutside } from "../../utils/hooks/useClickOutside";
import {getShortcutByKey} from "../../utils/helpers/Shortcuts";

export const Search = (): JSX.Element => {
    const [ isOpenChange, setIsOpenChange ] = useState<boolean>(false);
    const [ isOpenClick, setIsOpenClick ] = useState<boolean>(false);

    const refObjDropdown = useRef(null);
    useClickOutside(refObjDropdown, () => {
        setIsOpenChange(false);
        setIsOpenClick(false);
    });

    const _onClick = (): void => isOpenChange ? setIsOpenClick(false) : setIsOpenClick(true);
    const _onLiveChange = (evt: React.ChangeEvent<HTMLInputElement>): void => {
        setIsOpenClick(false);
        evt.target.value ? setIsOpenChange(true) : setIsOpenChange(false);
    };

    return (
        <StyledDropdown float="left">
            <StyledSearch>
                <FaIcon src="faSearch" styling="thin"/>
                <input type="text" placeholder="Type a command or search..." onInput={_onLiveChange} onClick={_onClick} autoFocus={true}/>
                <div className="keyboard-shortcut-dark">
                    <mask>{getShortcutByKey("search")}</mask>
                </div>
            </StyledSearch>
            <div ref={refObjDropdown} className={`dropdown-content ${isOpenClick
                ? "dropdown-active"
                : "dropdown-inactive"}`}>
                {getCalendarDropdownElemBySearchClick()}
            </div>
            <div ref={refObjDropdown} className={`dropdown-content ${isOpenChange
                ? "dropdown-active"
                : "dropdown-inactive"}`}>
                {getCalendarDropdownElemBySearch()}
            </div>
        </StyledDropdown>
    )
}