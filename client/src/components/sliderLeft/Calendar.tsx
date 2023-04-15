import { StyledCalendar } from "../../assets/styles/components/sliderLeft/Calendar.styles";

import { ICalendarDaysOfMonth } from "../../assets/types/components/sliderLeft/Calendar";

import { Button } from "../core/Button";
import {FaIcon} from "../core/FontAwesomeIcon";

export const Calendar = (): JSX.Element => {
    const _isLeapYear = (year: number): boolean => (year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0) || (year % 100 === 0 && year % 400 === 0);

    const _getDaysLeapMonth = (year: number): number => _isLeapYear(year) ? 29 : 28;

    const _getMonths = (): number[] => ([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);

    const getFirstDay = (month: number = new Date().getMonth(), year: number = new Date().getFullYear()): number => new Date(year, month, 1).getDay();

    const getLastDay = (month: number = new Date().getMonth(), year: number =new Date().getFullYear()): number => new Date(year, month + 1, 0).getDay();

    const getDayCountOfMonth = (year: number): number[] => ([31, _getDaysLeapMonth(year), 31, 30, 31, 30, 31, 31, 30, 31, 30]);

    const getDaysOfWeek = (bISO8601: boolean = true): Array<string> => bISO8601
        ? ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
        : ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    const getDaysOfMonth = (year: number = new Date().getFullYear(), month: number = new Date().getMonth(), startDate:Date|null = null, endDate:Date|null = null, datesBetween:Date[]|[] = []): ICalendarDaysOfMonth[] => {
        /** @desc 0 = Sunday; 1 = Monday; ... 6 = Saturday */
        const aPrevDays = [];
        const aDays = [];
        const aNextDays = [];

        const iFirstDay = getFirstDay(month, year);
        const iLastDay = getLastDay(month, year);
        const iDaysOfMonth = getDayCountOfMonth(year)[month - 1] + 1;

        for (let i = iFirstDay === 0 ? iDaysOfMonth - 6 : (iDaysOfMonth - iFirstDay) + 1; i <= getDayCountOfMonth(year)[month - 1]; i++) {
            /** @desc Determine class name for previous days and add days */
            aPrevDays.push({
                day: i,
                month: month - 1,
                year: year,
                prevOrNext: true
            });
        }

        for (let i = getDayCountOfMonth(year)[month]; i > 0; i--) {
            /** @desc Determine class name for current days of month and add days */
            aDays.unshift({
                day: i,
                month: month,
                year: year,
                prevOrNext: false
            });
        }

        if (iLastDay !== 0) {
            for (let i = 1; i <= 7 - iLastDay; i++) {
                /** @desc Determine class name for following days and add days */
                aNextDays.push({
                    day: i,
                    month: month + 1,
                    year: year,
                    prevOrNext: true
                });
            }
        }

        return [...aPrevDays, ...aDays, ...aNextDays];
    }

    return (
        <StyledCalendar>
            <div>
                {/*<header>*/}
                {/*    <div className="sliderLeft-calendar-hdl">*/}
                {/*        <Button text="April 2023" dropdown={true} />*/}
                {/*    </div>*/}
                {/*    <div className="sliderLeft-calendar-hdr">*/}
                {/*        <Button iconSrc="faCaretLeft" />*/}
                {/*        <Button iconSrc="faCaretRight" />*/}
                {/*    </div>*/}
                {/*</header>*/}
                {/*<main>*/}
                {/*    <div className="sliderLeft-calendar-week">*/}
                {/*        {getDaysOfWeek(true).map((weekDay) => (*/}
                {/*            <span>{weekDay}</span>*/}
                {/*        ))}*/}
                {/*    </div>*/}
                {/*    <div className="sliderLeft-calendar-days">*/}
                {/*        {getDaysOfMonth().map(({ day, month, year, prevOrNext}) => (*/}
                {/*            <div className="sliderLeft-calendar-day">*/}
                {/*                <span className={prevOrNext ? "sliderLeft-calendar-day-prevOrNext" : ""}>{day}</span>*/}
                {/*                <div className="sliderLeft-calendar-day-events">*/}
                {/*                    {day === 27 && <FaIcon src="faCircle" styling="solid" />}*/}
                {/*                    {day === 4 && <FaIcon src="faCircle" styling="solid" />}*/}
                {/*                    {day === 4 && <FaIcon src="faCircle" styling="solid" />}*/}
                {/*                    {day === 7 && <FaIcon src="faCircle" styling="solid" />}*/}
                {/*                    {day === 13 && <FaIcon src="faCircle" styling="solid" />}*/}
                {/*                    {day === 14 && <FaIcon src="faCircle" styling="solid" />}*/}
                {/*                    {day === 14 && <FaIcon src="faCircle" styling="solid" />}*/}
                {/*                    {day === 19 && <FaIcon src="faCircle" styling="solid" />}*/}
                {/*                    {day === 19 && <FaIcon src="faCircle" styling="solid" />}*/}
                {/*                    {day === 19 && <FaIcon src="faCircle" styling="solid" />}*/}
                {/*                    {day === 24 && <FaIcon src="faCircle" styling="solid" />}*/}
                {/*                    {day === 25 && <FaIcon src="faCircle" styling="solid" />}*/}
                {/*                    {day === 25 && <FaIcon src="faCircle" styling="solid" />}*/}
                {/*                    {day === 26 && <FaIcon src="faCircle" styling="solid" />}*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        ))}*/}
                {/*    </div>*/}
                {/*    <div className="sliderLeft-calendar-invitations">*/}
                {/*        <h4>Invitations</h4>*/}
                {/*    </div>*/}
                {/*    <div className="sliderLeft-calendar-upevents">*/}
                {/*        <h4>Upcoming Events</h4>*/}
                {/*    </div>*/}
                {/*</main>*/}
            </div>

        </StyledCalendar>
    )
}