import { IListItemProps } from "../../assets/types/utils/helpers/UnorderedList";

import { FaIcon } from "../../components/core/FontAwesomeIcon";

import { getShortcutByKey } from "./Shortcuts";

export const addListItem = ({ activeItem, key, iconSrc, text, className, onClick }: IListItemProps): JSX.Element => (
    <li key={key} style={{ justifyContent: "flex-start" }} className={activeItem === key ? `active-list-item ${className}` : className} onClick={() => onClick(key, false, { iconSrc, text })}>
        <FaIcon src={iconSrc} styling="thin"  />
        <span>{text}</span>
    </li>
);

// export const addListItem = (activeItem: string, key: string, iconSrc: string, text: string, onClick: (key: string, isOpen: boolean, data?: Object) => void = () => {}): JSX.Element => (
//     <li key={key} style={{ justifyContent: "flex-start" }} className={activeItem === key ? "active-list-item" : ""} onClick={() => onClick(key, false, { iconSrc, text })}>
//         <FaIcon src={iconSrc} styling="thin"  />
//         <span>{text}</span>
//     </li>
// );

export const addListItemWithShortcut = (key: string, iconSrc: string, text: string, onClick: (key: string, isOpen: boolean, data?: Object) => void = () => {}): JSX.Element => {
    const shortcut = getShortcutByKey(key);
    return (
        <li key={key} onClick={() => onClick(key, false, { iconSrc, text })}>
            <div className="li-content">
                <FaIcon src={iconSrc} styling="thin" />
                <span>{text}</span>
            </div>
            {shortcut ? <div className="keyboard-shortcut-dark">
                <mask>{shortcut}</mask>
            </div> : <></>}
        </li>
    );
}

export const addGroup = (groupTitle: string, items: JSX.Element[]): JSX.Element => (
    <div className="unorderlist-group">
        <header className="unorderlist-group-header">
            <span>{groupTitle}</span>
        </header>
        <ul className="vertical-list">
            {items}
        </ul>
    </div>
)