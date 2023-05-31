import { IDropdownProps } from "../../../assets/types/components/dropdown/Global";
import { FaIcon } from "../../core/FontAwesomeIcon";

export const View = ({ callback }: IDropdownProps): JSX.Element => {
    return (
        <ul>
            <li>
                <div className="global-li-content">
                    <FaIcon src="faCalendarDay" styling="thin" />
                    <span>Day</span>
                </div>
                <div className="global-li-shortcut">
                    <span>⇧ ⌘ D</span>
                </div>
            </li>
            <li>
                <div className="global-li-content">
                    <FaIcon src="faCalendarWeek" styling="thin" />
                    <span>Week</span>
                </div>
                <div className="global-li-shortcut">
                    <span>⇧ ⌘ W</span>
                </div>
            </li>
        </ul>
    )
}