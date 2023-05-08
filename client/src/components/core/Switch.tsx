import { StyledSwitch } from "../../assets/styles/components/core/Switch.styles";

export const Switch = (): JSX.Element => {
    return (
        <StyledSwitch>
            <input id="switch" type="checkbox" />
            <label htmlFor="switch">
                <span></span>
            </label>
        </StyledSwitch>
    )
}