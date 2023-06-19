export interface IStyledSchedulePage {
    logoBgColor: string
}

export type TSpaceMenuItems = {
    key: string,
    iconSrc: string,
    text: string,
    showSliderLeft: boolean
}

export type TCallback = {
    [key: string]: boolean|undefined,
    schedulePageSpaceProvide?: boolean,
    eventTypeProvide?: boolean
}