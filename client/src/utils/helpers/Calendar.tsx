import { ICalendarDaysOfMonth } from "../../assets/types/components/sliderLeft/Calendar";

export const isLeapYear = (year: number): boolean => (year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0) || (year % 100 === 0 && year % 400 === 0);

export const getDaysLeapMonth = (year: number): number => isLeapYear(year) ? 29 : 28;

export const getMonths = (): number[] => ([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);

export const getFirstDayOfWeek = (date: Date, iso8601: boolean = true): Date => {
    date = new Date(+date);
    if (iso8601) date.setDate(date.getDate() - (date.getDay() || 7) + 1);
    else date.setDate(date.getDate() - date.getDay());
    return date;
}

export const getLastDayOfWeek = (date: Date, iso8601: boolean = true): Date => {
    const firstDay: Date = getFirstDayOfWeek(date);
    const newDate: Date = new Date()
    return new Date(newDate.setDate(firstDay.getDate() + 6));
}

export const getDayCountOfMonth = (year: number): number[] => ([31, getDaysLeapMonth(year), 31, 30, 31, 30, 31, 31, 30, 31, 30]);

export const getCurrentHourOfDay = (date: Date): number[] => {
    const hours = [];
    const now = date.getHours();
    for (let i = now; i < 24; i++) {
        /** @desc Return remaining hours from current hour */
        hours.push(i < 9 ? parseInt(`${0}${i}00`) : parseInt(`${i}00`));
    } return hours;
}

export const getHoursOfDay = (): string[] => {
    const hours = [];
    for (let i = 0; i < 24; i++) {
        /** @desc Return remaining hours from current hour */
        hours.push(i < 9 ? `${i}:00` : `${i}:00`);
    } return hours;
}

export const getWeekNumber = (date: Date|any): number => {
    const firstDayOfYear: Date|any = new Date(date.getFullYear(),0,1);
    const numberOfDays: number = Math.floor((date - firstDayOfYear) / (24 * 60 * 60 * 1000));
    return Math.ceil(( date.getDay() + 1 + numberOfDays) / 7);
};

export const getDaysOfWeek = (iso8601: boolean = true): Array<string> => iso8601
    ? ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    : ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

export const getDateOfWeekByIdx = (date: Date, idx: number): Date => {
    const newDate = new Date(date);
    return new Date(newDate.setDate(newDate.getDate() + idx));
};

export const getDatesBetween = (startDate: Date, endDate: Date): Date[]|[] => {
    /** @desc Checking the importing parameters for correct typing */
    if (startDate !instanceof Date && endDate !instanceof Date) {
        const aDatesBetween = [startDate];
        const dDate = new Date(startDate.getTime());

        /** @desc Exclude start date */
        dDate.setDate(dDate.getDate() + 1);

        /** @desc Exclude end date */
        while (dDate < endDate) {
            aDatesBetween.push(new Date(dDate));
            dDate.setDate(dDate.getDate() + 1);
        } aDatesBetween.push(endDate)
        return aDatesBetween;
    } else return [];
}

export const compareDates = (date1: Date, date2: Date): boolean => date1.toDateString().valueOf() === date2.toDateString().valueOf();

// export const getDaysOfMonth = (year: number = new Date().getFullYear(), month: number = new Date().getMonth(), startDate:Date|null = null, endDate:Date|null = null, datesBetween:Date[]|[] = []): ICalendarDaysOfMonth[] => {
//     /** @desc 0 = Sunday; 1 = Monday; ... 6 = Saturday */
//     const aPrevDays = [];
//     const aDays = [];
//     const aNextDays = [];
//
//     const iFirstDay: number = getFirstDay(month, year);
//     const iLastDay: number = getLastDay(month, year);
//     const iDaysOfMonth: number = getDayCountOfMonth(year)[month - 1] + 1;
//
//     for (let i = iFirstDay === 0 ? iDaysOfMonth - 6 : (iDaysOfMonth - iFirstDay) + 1; i <= getDayCountOfMonth(year)[month - 1]; i++) {
//         /** @desc Determine class name for previous days and add days */
//         aPrevDays.push({
//             day: i,
//             month: month - 1,
//             year: year,
//             prevOrNext: true
//         });
//     }
//
//     for (let i = getDayCountOfMonth(year)[month]; i > 0; i--) {
//         /** @desc Determine class name for current days of month and add days */
//         aDays.unshift({
//             day: i,
//             month: month,
//             year: year,
//             prevOrNext: false
//         });
//     }
//
//     if (iLastDay !== 0) {
//         for (let i = 1; i <= 7 - iLastDay; i++) {
//             /** @desc Determine class name for following days and add days */
//             aNextDays.push({
//                 day: i,
//                 month: month + 1,
//                 year: year,
//                 prevOrNext: true
//             });
//         }
//     }
//
//     return [...aPrevDays, ...aDays, ...aNextDays];
// }