import { IModelIndustries } from "../../../types/components/base/SignUp";
import { TSignUpForm, TSignUpFormPatternMatches, TSignUpInput, TSignUpInputPhases, TSignUpPhase } from "../../../types/utils/reducer/SignUp";
import { TUserForm } from "../../../types/components/base/User";

export const ModelForm = <TSignUpForm>{
    email: String(),
    company: String(),
    firstname: String(),
    lastname: String(),
    password: String(),
    passwordConfirm: String(),
    avatar: String(),
    companyImage: String(),
    industry: String()
};

export const ModelUserForm = <TUserForm>{
    email: String(),
    company: String(),
    firstname: String(),
    lastname: String(),
    password: String(),
    industry: String()
};

export const ModelPhases = [<TSignUpPhase>{
    key: 1,
    iconSrc: "faEnvelope",
    isActive: true,
    title: "providers.provider"
}, {
    key: 2,
    iconSrc: "faAddressCard",
    isActive: false,
    title: "signUp.phaseTwo.about"
}, {
    key: 3,
    iconSrc: "faKey",
    isActive: false,
    title: "global.password"
}, {
    key: 4,
    iconSrc: "faCameraRetro",
    isActive: false,
    title: "signUp.phaseFour.photos"
}, {
    key: 5,
    iconSrc: "faBriefcase",
    isActive: false,
    title: "signUp.phaseFive.industry"
}];

export const ModelFormPatternMatches = <TSignUpFormPatternMatches>{
    email: false,
    firstname: false,
    lastname: false,
    password: false,
    isActive: false
}

export const ModelInput = <TSignUpInput>{
    phaseTwo1: [<TSignUpInputPhases>{
        id: "company",
        label: "signUp.phaseTwo.company",
        required: false,
        iconSrc: "faBuildings",
        type: "text",
        placeholder: "Codemize GmbH"
    }, {
        id: "email",
        label: "global.email",
        required: true,
        iconSrc: "faEnvelope",
        type: "text",
        placeholder: "marc.stoeckli@codemize.ch"
    }],
    phaseTwo2: [<TSignUpInputPhases>{
        id: "firstname",
        label: "signUp.phaseTwo.firstname",
        required: true,
        type: "text",
        placeholder: "Marc"
    }, {
        id: "lastname",
        label: "signUp.phaseTwo.lastname",
        required: true,
        type: "text",
        placeholder: "Stöckli"
    }],
    phaseThree: [<TSignUpInputPhases>{
        id: "password",
        label: "global.password",
        required: true,
        iconSrc: "faKey",
        type: "password",
        placeholder: "Gh3*asdf?"
    }, {
        id: "passwordConfirm",
        label: "signUp.phaseThree.passwordConfirm",
        required: true,
        iconSrc: "faKey",
        type: "password",
        placeholder: "Gh3*asdf?"
    }]
}

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
}];