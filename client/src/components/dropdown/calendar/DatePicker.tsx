import { StyledDatePicker } from "../../../assets/styles/components/dropdown/calendar/DatePicker.styles";

import { useCalendarContext } from "../../../utils/hooks/useCalendarContext";

export const DatePicker = (): JSX.Element => {
    /** @desc Destructuring calendar context which handles the overall current week */
    const { state, dispatch } = useCalendarContext();

    return (
        <StyledDatePicker>
            {state.week}
        </StyledDatePicker>
    )
}