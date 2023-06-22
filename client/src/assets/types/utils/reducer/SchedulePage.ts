export interface ISchedulePageReducerState {
    space: ISchedulePageSpace,
    activeItem: string
}

export interface ISchedulePageSpace {
    id: string,
    name: string,
    iconSrc: string,
    logoSrc: string,
    logoColor: string,
    logoBgColor: string,
    logoBorderColor: string,
    publicUrl: string,
    pageWelcomeMessage: string,
    base64Avatar: string,
    base64CompanyLogo: string,
    pageBackgroundColor: string,
    pageHeadingTextColor: string,
    pageWelcomeMessageColor: string,
    pageDateSelectionColor: string,
    pageTimeSelectionColor: string
}

export type TActionType =
    | { type: "space", payload: ISchedulePageReducerState }
    | { type: "item", payload: ISchedulePageReducerState }