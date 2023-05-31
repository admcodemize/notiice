import { TSignInForm, TSignInFormPatternMatches, TSignInInput, TSignInMessages, TSignInInputPhases, TSignInPhase } from "../../../types/utils/reducer/SignIn";

export const ModelForm = <TSignInForm>{
    email: String(),
    password: String(),
    expireDate: null
};

export const ModelMessages = <TSignInMessages>{
    password: String()
}

export const ModelPhases = [<TSignInPhase>{
    key: 1,
    iconSrc: "faEnvelope",
    isActive: true,
    title: "providers.provider"
}, {
    key: 2,
    iconSrc: "faAddressCard",
    isActive: false,
    title: "signIn.phaseTwo.account"
}];

export const ModelFormPatternMatches = <TSignInFormPatternMatches>{
    email: false,
    password: false
}

export const ModelInput = <TSignInInput>{
    phaseTwo: [<TSignInInputPhases>{
        id: "email",
        label: "global.email",
        required: true,
        iconSrc: "faEnvelope",
        type: "text",
        placeholder: "marc.stoeckli@codemize.ch"
    }, {
        id: "password",
        label: "global.password",
        required: true,
        iconSrc: "faKey",
        type: "password",
        placeholder: "Gh3*asdf?"
    }]
}