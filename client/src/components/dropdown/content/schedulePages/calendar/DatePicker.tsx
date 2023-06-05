import { StyledDatePicker } from "../../../../../assets/styles/components/dropdown/schedulePages/calendar/DatePicker.styles";

import { IDropdownProps } from "../../../../../assets/types/components/dropdown/Global";

import { useCalendarContext } from "../../../../../utils/hooks/useCalendarContext";

export const DatePicker = ({ callback }: IDropdownProps): JSX.Element => {
    /** @desc Destructuring calendar context which handles the overall current week */
    const { state, dispatch } = useCalendarContext();

    return (
        <StyledDatePicker>
            {state.week}
        </StyledDatePicker>
    )
}