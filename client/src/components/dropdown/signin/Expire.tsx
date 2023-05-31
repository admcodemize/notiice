import { useTranslation } from "react-i18next";
import { StyledExpire } from "../../../assets/styles/components/dropdown/signin/Expire.styles";

import { IDropdownProps } from "../../../assets/types/components/dropdown/Global";

import { compareDates } from "../../../utils/helpers/Calendar";

export const Expire = ({ callback }: IDropdownProps): JSX.Element => {
    /** @desc Returns the translation function for reading from the locales files */
    const { t } = useTranslation();

    const _addExpireTimes = (timeRange: string, hour: number, days = 0): JSX.Element => {
        const expireDate = new Date(new Date().setTime(new Date().getTime() + (days > 0 ? (hour*60*60*1000*days) : (hour*60*60*1000))));
        return (
            <li onClick={() => callback && callback(false, { expireDate })}>
                <div><span>{t(timeRange)}</span> <p>{compareDates(new Date(), expireDate) ? expireDate.toLocaleTimeString() : expireDate.toLocaleString()}</p></div>
            </li>
        );
    }

    return (
        <StyledExpire>
            <ul className="vertical-list">
                {_addExpireTimes("times.15minutes", 0.25)}
                {_addExpireTimes("times.30minutes", 0.5)}
                {_addExpireTimes("times.1hour", 1)}
                {_addExpireTimes("times.8hours", 8)}
                {_addExpireTimes("times.1week", 24, 7)}
                {_addExpireTimes("times.1month", 24, 30)}
            </ul>
        </StyledExpire>
    )
}