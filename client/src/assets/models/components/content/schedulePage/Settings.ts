import { TSettingsSubActions, TSettingsSubActionsKeys } from "../../../../types/components/content/schedulePage/Settings";

export const ModelSettingsSubActions = [<TSettingsSubActions>{
    key: "profile",
    iconSrc: "faAddressCard",
    text: "Profile"
}, {
    key: "branding",
    iconSrc: "faSwatchbook",
    text: "Branding"
}]

export const ModelSettingsSubActionsKeys: TSettingsSubActionsKeys = {
    profile: "profile",
    branding: "branding"
}