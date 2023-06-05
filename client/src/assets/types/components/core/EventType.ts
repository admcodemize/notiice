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
    dateTime: Date,
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