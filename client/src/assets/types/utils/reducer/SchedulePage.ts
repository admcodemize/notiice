export interface ISchedulePageReducerState {
    space: ISchedulePageSpace,
    activeItem: string
}

export interface ISchedulePageSpace {
    id: string,
    name: string,
    iconSrc: string,
    logoSrc: string,
    logoBgColor: string,
    publicUrl: string,
    welcomeMessage: string
}

export type TActionType =
    | { type: "space", payload: ISchedulePageReducerState }
    | { type: "item", payload: ISchedulePageReducerState }