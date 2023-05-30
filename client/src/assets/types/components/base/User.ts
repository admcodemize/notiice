import { TButtonStyling } from "../core/Button";
import { TFontAwesomeIconStyle } from "../core/FontAwesomeIcon";

export type TUserForm = {
    [key: string]: any,
    email: string,
    company: string,
    firstname: string,
    lastname: string,
    password: string,
    industry: string
}

export interface IModelProviders {
    key: string,
    iconSrc: string,
    text: string,
    styling: TButtonStyling,
    iconStyling: TFontAwesomeIconStyle
}