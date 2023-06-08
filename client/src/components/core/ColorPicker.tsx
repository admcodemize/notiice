import { StyledColorPicker } from "../../assets/styles/components/core/ColorPicker.styles";

import { ModelColorPickerDefault } from "../../assets/models/components/core/ColorPicker";
import { TColorPickerDefault } from "../../assets/types/components/core/ColorPicker";

export const ColorPicker = (): JSX.Element => {
    const _addColorDefault = ({ hexColor }: TColorPickerDefault): JSX.Element => (
        <div style={{ backgroundColor: hexColor }} className="color-tile">
        </div>
    );

    return (
        <StyledColorPicker>
            {ModelColorPickerDefault.map((hexColor) => _addColorDefault(hexColor))}
            <div className="colorPicker-hashtag">
                #
            </div>
            <input className="colorPicker-hexValue"/>
            <div style={{ clear: "both" }} />
        </StyledColorPicker>
    );
}