import { FaIcon } from "../../components/core/FontAwesomeIcon";

export const addListItem = (activeItem: string, path: string, iconSrc: string, text: string, onClick: (path: string) => void): JSX.Element => (
    <li key={path} className={activeItem === path ? "active-list-item" : ""} onClick={() => onClick(path)}>
        <FaIcon src={iconSrc} styling="thin" />
        <span>{text}</span>
    </li>
);