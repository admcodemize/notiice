import { StyledColor } from "../../../../assets/styles/components/dropdown/dialog/core/eventTypes/Color.styles"

import { IDropdownProps } from "../../../../assets/types/components/dropdown/Global";

import { ColorPicker } from "../../../core/ColorPicker";

export const Color = ({ id, callback = () => {} }: IDropdownProps): JSX.Element => {
    const _onCallback = (hexColor: string): void => {
        callback(id, false, {
            hexColor
        });
    };

    return (
        <StyledColor>
            <ColorPicker callback={_onCallback}/>
        </StyledColor>
    )
}