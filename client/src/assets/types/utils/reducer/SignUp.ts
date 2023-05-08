export interface ISignUpReducerState {
    phases: TSignUpPhases,
    form: TSignUpForm,
    formPatternMatches: TSignUpFormPatternMatches,
    messages: TSignUpMessages
}

export type TSignUpPhases = TSignUpPhase[];

export type TSignUpPhase = {
    key: number,
    iconSrc: string,
    isActive: boolean,
    title: string
}

export type TSignUpForm = {
    [key: string]: any,
    email: string,
    company: string,
    firstname: string,
    lastname: string,
    password: string,
    profileImage: string,
    coverImage: string
    industry: string
    isActive: boolean
}

export type TSignUpFormPatternMatches = {
    email: boolean,
    firstname: boolean,
    lastname: boolean,
    password: boolean,
    isActive: boolean
}

export type TDispatchSignUpFormPatternMatches = {
    id: string,
    data: TSignUpFormPatternMatches
}

export type TSignUpMessages = {
    [key: string]: string,
    email: string
}

export type TSignUpInput = {
    phaseTwo1: TSignUpInputPhases[],
    phaseTwo2: TSignUpInputPhases[],
    phaseThree: TSignUpInputPhases[]
}

export type TSignUpInputPhases = {
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
    | { type: "form", payload: TSignUpForm }
    | { type: "formPattern", payload: TDispatchSignUpFormPatternMatches }