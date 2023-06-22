import { useRef } from "react";
import { StyledColorPicker } from "../../assets/styles/components/core/ColorPicker.styles";

import { ModelColorPickerDefault } from "../../assets/models/components/core/ColorPicker";
import { IColorPickerProps, TColorPickerDefault } from "../../assets/types/components/core/ColorPicker";

import { Button } from "./Button";

export const ColorPicker = ({ callback }: IColorPickerProps): JSX.Element => {
    const refObjInput = useRef<HTMLInputElement>(null);

    const _onHexInputClick = (): void => callback(`#${refObjInput?.current?.value}` || String());

    const _addColor = ({ hexColor }: TColorPickerDefault): JSX.Element => (
        <div style={{ backgroundColor: hexColor }} className="color-tile" onClick={() => {
            callback(hexColor);
        }} />
    );

    return (
        <StyledColorPicker>
            {ModelColorPickerDefault.map((hexColor) => _addColor(hexColor))}
            <div>
                <div className="colorPicker-hashtag">#</div>
                <input ref={refObjInput} className="colorPicker-hexValue" />
            </div>
            <Button iconSrc="faCheck" styling="default" iconStyling="solid" onClick={_onHexInputClick}/>
            <div style={{ clear: "both" }} />
        </StyledColorPicker>
    );
}