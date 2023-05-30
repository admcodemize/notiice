export interface ISignInReducerState {
    phases: TSignInPhases,
    form: TSignInForm,
    formPatternMatches: TSignInFormPatternMatches,
    messages: TSignInMessages
}

export type TSignInPhases = TSignInPhase[];

export type TSignInPhase = {
    key: number,
    iconSrc: string,
    isActive: boolean,
    title: string
}

export type TSignInForm = {
    [key: string]: any,
    email: string,
    password: string
}

export type TSignInFormPatternMatches = {
    [key: string]: any,
    email: boolean,
    password: boolean
}

export type TDispatchSignInFormPatternMatches = {
    id: string,
    data: TSignInFormPatternMatches
}

export type TSignInMessages = {
    [key: string]: string,
    password: string
}

export type TDispatchSignInMessages = {
    id: string,
    data: TSignInMessages
}

export type TSignInInput = {
    phaseTwo: TSignInInputPhases[]
}

export type TSignInInputPhases = {
    id: string,
    label: string,
    info?: string,
    required: boolean,
    iconSrc: string,
    type: string,
    placeholder: string,
    minLength?: number,
    maxLength?: number,
    disabled?: boolean
}

export type TActionType =
    | { type: "next" }
    | { type: "back" }
    | { type: "messages", payload: TDispatchSignInMessages }
    | { type: "form", payload: TSignInForm }
    | { type: "formPattern", payload: TDispatchSignInFormPatternMatches }