export interface ISchedulePageReducerState {
    space: ISchedulePageSpace,
    activeItem: string
}

export interface ISchedulePageSpace {
    id: string,
    text: string,
    iconSrc: string
}

export type TActionType =
    | { type: "space", payload: ISchedulePageReducerState }
    | { type: "item", payload: ISchedulePageReducerState }