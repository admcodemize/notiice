import { StyledDatePicker } from "../../assets/styles/components/core/DatePicker.styles";

import { Button } from "./Button";

export const DatePicker = (): JSX.Element => {
    return (
        <StyledDatePicker>
            <Button iconSrc="faCalendarRange" text="01.04. - 30.04.2023" dropdown={true} />
        </StyledDatePicker>
    )
}