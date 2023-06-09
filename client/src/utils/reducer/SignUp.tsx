import { ISignUpReducerState, TActionType } from "../../assets/types/utils/reducer/SignUp";
import { ModelPhases, ModelForm, ModelUserForm, ModelFormPatternMatches } from "../../assets/models/components/base/SignUp";

export const signUpReducerInitState: ISignUpReducerState = {
    phases: ModelPhases,
    form: ModelForm,
    formPatternMatches: ModelFormPatternMatches,
    userForm: ModelUserForm
}

let activeKey: number = 0;
export function signUpReducer(state: ISignUpReducerState, action: TActionType) {
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