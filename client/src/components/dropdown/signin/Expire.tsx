import { StyledExpire } from "../../../assets/styles/components/dropdown/signin/Expire.styles";

import { IDropdownProps } from "../../../assets/types/components/dropdown/Global";

import { FaIcon } from "../../core/FontAwesomeIcon";

export const Expire = ({ callback }: IDropdownProps): JSX.Element => {
    const _addExpireTimes = (timeRange: string, hour: number, days = 0): JSX.Element => {
        const expireDate = new Date(new Date().setTime(new Date().getTime() + (days > 0 ? (hour*60*60*1000*days) : (hour*60*60*1000))));
        return (
            <li onClick={() => callback && callback(false)}>
                <div><span>{timeRange}</span> <p>{days > 0 ? expireDate.toLocaleString() : expireDate.toLocaleTimeString()}</p></div>
            </li>
        );
    }

    return (
        <StyledExpire>
            <ul className="vertical-list">
                {_addExpireTimes("1 Hour", 1)}
                {_addExpireTimes("8 Hours", 8)}
                {_addExpireTimes("1 Week", 24, 7)}
                {_addExpireTimes("1 Month", 24, 30)}
            </ul>
        </StyledExpire>
    )
}