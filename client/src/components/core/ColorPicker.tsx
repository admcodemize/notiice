import { StyledColorPicker } from "../../assets/styles/components/core/ColorPicker.styles";

import { ModelColorPickerDefault } from "../../assets/models/components/core/ColorPicker";
import { IColorPickerProps, TColorPickerDefault } from "../../assets/types/components/core/ColorPicker";

export const ColorPicker = ({ callback }: IColorPickerProps): JSX.Element => {
    const _addColor = ({ hexColor }: TColorPickerDefault): JSX.Element => (
        <div style={{ backgroundColor: hexColor }} className="color-tile" onClick={() => {
            callback(hexColor);
        }} />
    );

    return (
        <StyledColorPicker>
            {ModelColorPickerDefault.map((hexColor) => _addColor(hexColor))}
            <div className="colorPicker-hashtag">#</div>
            <input className="colorPicker-hexValue"/>
            <div style={{ clear: "both" }} />
        </StyledColorPicker>
    );
}