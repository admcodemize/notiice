import { TSettingsSubActions, TSettingsSubActionsKeys } from "../../../../types/components/content/schedulePage/Settings";

export const ModelSettingsSubActions = [<TSettingsSubActions>{
    key: "space",
    iconSrc: "faRocket",
    text: "Space"
}, {
    key: "branding",
    iconSrc: "faSwatchbook",
    text: "Branding"
}, {
    key: "palette",
    iconSrc: "faPalette",
    text: "Presentation"
}]

export const ModelSettingsSubActionsKeys: TSettingsSubActionsKeys = {
    space: "space",
    branding: "branding",
    palette: "palette"
}