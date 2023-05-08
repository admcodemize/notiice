import { TButtonStyling } from "../components/core/Button";
import { TFontAwesomeIconStyle } from "../components/core/FontAwesomeIcon";

export interface IModelProviders {
    key: string,
    iconSrc: string,
    text: string,
    styling: TButtonStyling,
    iconStyling: TFontAwesomeIconStyle
}

export interface IModelIndustries {
    key: string,
    iconSrc: string,
    text: string
}