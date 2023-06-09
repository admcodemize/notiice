import { TFontAwesomeIconStyle } from "./FontAwesomeIcon";

export interface IEventTypeProps {
    id: string,
    iconSrc: string,
    iconBgColor?: string,
    title: string,
    eventType: Number,
    eventTypeText: string,
    tags?: TEventTypeTags[],
    location: Number,
    locationText: string,
    time: Number,
    href: string,
    hrefText: string,
    isActive: boolean
}

export interface IStyledEventTypeProps {
    iconBgColor?: string
    isSettingsVisible: boolean
}

export type TEventTypeTags = {
    text: string,
    isPayable: boolean
}

export type TEventTypeMenuItems = {
    key: string,
    iconSrc: string,
    text: string,
    onlyProvideMode: boolean
}

export type TEventTypeMenuKeys = {
    general: string,
    notes: string,
    payment: string,
    questions: string,
    workflow: string,
    confirmation: string
}

export type TEventTypeContentPartsProps = {
    iconSrc: string,
    iconStyling?: TFontAwesomeIconStyle,
    text: string,
    href?: string
}