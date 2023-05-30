import { ISignInReducerState, TActionType } from "../../assets/types/utils/reducer/SignIn";
import { ModelPhases, ModelMessages, ModelForm, ModelFormPatternMatches } from "../../assets/models/components/base/SignIn";

export const signInReducerInitState: ISignInReducerState = {
    phases: ModelPhases,
    form: ModelForm,
    formPatternMatches: ModelFormPatternMatches,
    messages: ModelMessages
}

let activeKey: number = 0;
export function signInReducer(state: ISignInReducerState, action: TActionType) {
    switch (action.type) {
        case "next": {
            return {
                ...state,
                phases: state.phases.map((phase) => {
                    activeKey = phase.isActive ? phase.key + 1 : activeKey;
                    return phase.key === activeKey
                        ? { ...phase, isActive: true }
                        : { ...phase, isActive: false }
                })
            }
        }
        case "back": {
            return {
                ...state,
                phases: state.phases.map((phase) => {
                    activeKey = phase.isActive ? phase.key - 1 : activeKey;
                    return phase.key === activeKey
                        ? { ...phase, isActive: true }
                        : { ...phase, isActive: false }
                })
            }
        }
        case "messages": return {
            ...state,
            messages: state.messages.hasOwnProperty(action.payload.id) ? ({
                ...state.messages,
                [action.payload.id]: action.payload.data[action.payload.id]
            }) : ({ ...state.messages })
        }
        case "form": return {
            ...state,
            form: { ...state.form, ...action.payload }
        }
        case "formPattern": return {
            ...state,
            formPatternMatches: ({
                ...state.formPatternMatches,
                [action.payload.id]: action.payload.data[action.payload.id]
            })
        }
        default: return state;
    }
}