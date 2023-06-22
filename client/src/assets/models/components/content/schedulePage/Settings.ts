import { TSettingsSubActions, TSettingsSubActionsKeys } from "../../../../types/components/content/schedulePage/Settings";

export const ModelSettingsSubActions = [<TSettingsSubActions>{
    key: "space",
    iconSrc: "faRocket",
    text: "content.schedulePages.settings.space"
}, {
    key: "branding",
    iconSrc: "faSwatchbook",
    text: "content.schedulePages.settings.branding"
}, {
    key: "palette",
    iconSrc: "faPalette",
    text: "content.schedulePages.settings.palette"
}]

export const ModelSettingsSubActionsKeys: TSettingsSubActionsKeys = {
    space: "space",
    branding: "branding",
    palette: "palette"
}