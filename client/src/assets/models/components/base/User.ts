import { IModelProviders } from "../../../types/components/base/User";

export const ModelProviders = (): IModelProviders[] => [{
    key: "google",
    iconSrc: "faGoogle",
    iconStyling: "brands",
    styling: "default",
    text: "providers.google"
}, {
    key: "apple",
    iconSrc: "faApple",
    iconStyling: "brands",
    styling: "default",
    text: "providers.apple"
}, {
    key: "microsoft",
    iconSrc: "faMicrosoft",
    iconStyling: "brands",
    styling: "default",
    text: "providers.microsoft"
}, {
    key: "email",
    iconSrc: "faPaperPlane",
    iconStyling: "solid",
    styling: "tag",
    text: "providers.mail"
}];