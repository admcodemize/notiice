import { StyledDatePicker } from "../../assets/styles/components/core/DatePicker.styles";

import { IDatePickerProps } from "../../assets/types/components/core/DatePicker";

import { Button } from "./Button";

export const DatePicker = ({ id, ...props }: IDatePickerProps): JSX.Element => {
    return (
        <StyledDatePicker>
            <Button id={id} iconSrc="faCalendarRange" text={`${props.startDate?.toLocaleDateString()} - ${props.endDate?.toLocaleDateString()}`} dropdown={true} />
        </StyledDatePicker>
    )
}