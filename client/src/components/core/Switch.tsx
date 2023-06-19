import { useState, useEffect } from "react";

import { StyledSwitch } from "../../assets/styles/components/core/Switch.styles";
import { ISwitchProps } from "../../assets/types/components/core/Switch";

export const Switch = (props: ISwitchProps): JSX.Element => {
    const [ checked, setChecked ] = useState<boolean>(props.checked);

    useEffect(() => {
        if (props.checked !== checked) {
            setChecked(props.checked);
        }
    }, [props.checked]);

    return (
        <StyledSwitch>
            <input id={props.htmlFor} type="checkbox" checked={checked} onChange={(evt) => {
                props.setChecked(props.htmlFor, evt.target.checked);
            }}/>
            <label htmlFor={props.htmlFor}>
                <span />
            </label>
        </StyledSwitch>
    )
}