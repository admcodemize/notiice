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

export type TEventListItems = {
    general: string,
    notes: string,
    payment: string
}