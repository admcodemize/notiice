import { IModelIndustries, IModelProviders } from "../../../types/base/SignUp";
import { TSignUpForm, TSignUpFormPatternMatches, TSignUpMessages, TSignUpInput, TSignUpInputPhases, TSignUpPhase } from "../../../types/utils/reducer/SignUp";

export const ModelForm = <TSignUpForm>{
    email: String(),
    company: String(),
    firstname: String(),
    lastname: String(),
    password: String(),
    passwordConfirm: String(),
    profileImage: String(),
    companyImage: String(),
    industry: String(),
    isActive: false
};

export const ModelPhases = [<TSignUpPhase>{
    key: 1,
    iconSrc: "faEnvelope",
    isActive: true,
    title: "Provider"
}, {
    key: 2,
    iconSrc: "faAddressCard",
    isActive: false,
    title: "About You"
}, {
    key: 3,
    iconSrc: "faKey",
    isActive: false,
    title: "Password"
}, {
    key: 4,
    iconSrc: "faCameraRetro",
    isActive: false,
    title: "Profile Photos"
}, {
    key: 5,
    iconSrc: "faBriefcase",
    isActive: false,
    title: "Industry"
}];

export const ModelFormPatternMatches = <TSignUpFormPatternMatches>{
    email: false,
    firstname: false,
    lastname: false,
    password: false,
    isActive: false
}

export const ModelMessages = <TSignUpMessages>{
    email: String()
}

export const ModelInput = <TSignUpInput>{
    phaseTwo1: [<TSignUpInputPhases>{
        id: "company",
        label: "signUp.company",
        required: false,
        iconSrc: "faBuildings",
        type: "text",
        placeholder: "Codemize GmbH"
    }, {
        id: "email",
        label: "signUp.email",
        required: true,
        iconSrc: "faEnvelope",
        type: "text",
        placeholder: "marc.stoeckli@codemize.ch"
    }],
    phaseTwo2: [<TSignUpInputPhases>{
        id: "firstname",
        label: "signUp.firstname",
        required: true,
        type: "text",
        placeholder: "Marc"
    }, {
        id: "lastname",
        label: "signUp.lastname",
        required: true,
        type: "text",
        placeholder: "Stöckli"
    }],
    phaseThree: [<TSignUpInputPhases>{
        id: "password",
        label: "signUp.password",
        required: true,
        iconSrc: "faKey",
        type: "password",
        placeholder: "Gh3*asdf?"
    }, {
        id: "passwordConfirm",
        label: "signUp.passwordConfirm",
        required: true,
        iconSrc: "faKey",
        type: "password",
        placeholder: "Gh3*asdf?"
    }]
}

export const ModelProviders = (): IModelProviders[] => [{
    key: "google",
    iconSrc: "faGoogle",
    iconStyling: "brands",
    styling: "default",
    text: "Sign up with Google"
}, {
    key: "apple",
    iconSrc: "faApple",
    iconStyling: "brands",
    styling: "default",
    text: "Sign up with Apple"
}, {
    key: "microsoft",
    iconSrc: "faMicrosoft",
    iconStyling: "brands",
    styling: "default",
    text: "Sign up with Microsoft"
}, {
    key: "mail",
    iconSrc: "faPaperPlane",
    iconStyling: "solid",
    styling: "tag",
    text: "Sign up with Email"
}];

export const ModelIndustries = (): IModelIndustries[] => [{
    key: "utilities",
    iconSrc: "faUtilityPole",
    text: "Utilities"
}, {
    key: "energy",
    iconSrc: "faWindTurbine",
    text: "Energy"
}, {
    key: "education",
    iconSrc: "faGraduationCap",
    text: "Education"
}, {
    key: "hairstylist",
    iconSrc: "faScissors",
    text: "Hairstylist"
}, {
    key: "treatment",
    iconSrc: "faHeartPulse",
    text: "Treatment"
}, {
    key: "sale",
    iconSrc: "faCashRegister",
    text: "Sale"
}, {
    key: "tourism",
    iconSrc: "faPlaneProp",
    text: "Tourism"
}, {
    key: "others",
    iconSrc: "faEllipsis",
    text: "Others"
}];