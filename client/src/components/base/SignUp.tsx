import React, { useReducer } from "react";
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";

import { StyledSignUp } from "../../assets/styles/components/base/SignUp.styles";
import { SignUpProps } from "../../assets/constants/Properties";
import { isAlreadyUsed, postImages } from "../../assets/api/components/base/SignUp";
import Logo from "../../assets/images/img.png";
import { ModelProviders, ModelIndustries, ModelInput } from "../../assets/models/components/base/SignUp";
import { TSignUpInputPhases, TSignUpMessages, TSignUpForm, TDispatchSignUpFormPatternMatches, TDispatchSignUpMessages } from "../../assets/types/utils/reducer/SignUp";

import { Button } from "../core/Button";
import { FaIcon } from "../core/FontAwesomeIcon";
import { Input } from "../core/Input";

import { generatePassword } from "../../utils/helpers/User";
import { signUpReducer, signUpReducerInitState } from "../../utils/reducer/SignUp";
import { coreRegexExp } from "../../utils/helpers/RegexExp";
import { base64Converter } from "../../utils/helpers/Files";

export const SignUp = (): JSX.Element => {
    /** @desc Load reducer state which handles the signup data like patternMatches, phases or messages */
    const [ state, dispatch ] = useReducer(signUpReducer, signUpReducerInitState);

    /** @desc Returns the translation function for reading from the locales files */
    const { t } = useTranslation();

    const _onProviderClick = (providerKey: string): void => dispatch({ type: "next" });
    const _onGeneratePasswordClick = (): void => {
        const generatedPassword = generatePassword();
        _dispatchSignUpForm({
            ...state.form,
            password: generatedPassword,
            passwordConfirm: generatedPassword
        });

        /** @desc Check if regex pattern is matching */
        _patternMatches("password", generatedPassword);
        _patternMatches("passwordConfirm", generatedPassword);
    }

    const _onBackClick = (): void => dispatch({ type: "back" });
    const _onNextClick = (): void => dispatch({ type: "next" });

    const _onSignUpClick = (): void => {};

    const _dispatchSignUpForm = (payload: TSignUpForm): void => dispatch({ type: "form", payload });
    const _dispatchSignUpFormPatternMatches = (payload: TDispatchSignUpFormPatternMatches): void => dispatch({ type: "formPattern", payload });
    const _dispatchMessage = (payload: TDispatchSignUpMessages): void => dispatch({ type: "messages", payload: payload });

    const _onInputChange = async (evt: React.ChangeEvent<HTMLInputElement>, id: string): Promise<void> => {
        _dispatchSignUpForm({
            ...state.form,
            [id]: evt?.target?.value
        });

        /** @desc Check if regex pattern is matching */
        _patternMatches(id, evt?.target?.value);
    };

    const _onInputValidityPromise = (id: string, patternMatches: boolean, message: string = String()): void => {
        state.messages.hasOwnProperty(id) && _dispatchMessage({
            id, data: {
                ...state.messages,
                [id]: message
            }
        });

        _dispatchSignUpFormPatternMatches({
            id, data: {
                ...state.formPatternMatches,
                [id]: patternMatches
            }
        });
    };

    const _onProfileImageSubmit = async (evt): Promise<void> => {
        evt.preventDefault();
        const a = await postImages("image", "/file", evt.target.value);
    };

    const _onProfileImageClick = (evt): void => {
        const inputUpload = evt.target.firstChild;
        if (inputUpload instanceof HTMLInputElement) {
            /** @desc Open file browser */
            inputUpload.click();
        }
    };

    const _onProfileImageChange = async (id: string, evt): Promise<void> => {
        _dispatchSignUpForm({
            ...state.form,
            [id]: await base64Converter(evt.target.files[0])
        });
    };

    const _patternMatches = (id: string, value: any): void => {
        if (id !== SignUpProps().EMAIL) {
            _dispatchSignUpFormPatternMatches({
                id, data: {
                    ...state.formPatternMatches,
                    [id]: new RegExp(coreRegexExp(id)).test(value)
                }
            });
        } else _checkInputValidity(id, value, isAlreadyUsed);
    };

    const _checkInputValidity = (id: string, value: any, check: (id: string, value: any) => Promise<any>): void => {
        if (state.phases[1] && new RegExp(coreRegexExp(id)).test(value)) {
            check(id, value)
                .then(({ id, res }) => {
                    if (res.status === 200) _onInputValidityPromise(id, false, "Email already used");
                    else _onInputValidityPromise(id, true);
                })
                .catch((err) => {
                    if (err.internalError) {
                        console.log(err.code, err.tFunc ? t(err.message) : err.message)
                    } else _onInputValidityPromise(err.id, true);
                });
        } else _onInputValidityPromise(id, false);
    };

    const _isPatternMatching = (): boolean => {
        return true;
        // return state.phases[1].isActive ? state.formPatternMatches.email && state.formPatternMatches.firstname && state.formPatternMatches.lastname
        //     : state.phases[2].isActive  ? state.formPatternMatches.password && state.formPatternMatches.passwordConfirm
        //         && (state.form.password === state.form.passwordConfirm) : true
    };

    const _addInput = ({ id, label, info, required, iconSrc, placeholder, type, ...props }: TSignUpInputPhases, value: any): JSX.Element => (
        <Input
            id={id}
            label={t(label)}
            info={info && t(info)}
            required={required}
            iconSrc={iconSrc}
            placeholder={placeholder}
            type={type}
            value={value}
            height="40px"
            message={(state.messages as TSignUpMessages)[id] || String()}
            messageType={(state.messages as TSignUpMessages)[id] ? "error" : "default"}
            onChange={_onInputChange}
            {...props}/>
    );

    const _addPhaseStep = (key: number, iconSrc: string, phase: boolean, title: string): JSX.Element => (
        <div className="signup-phases-step">
            <Button iconSrc={iconSrc} iconStyling={phase ? "regular" : "thin"} styling={phase ? "tag" : "default"} />
            <div className={`signup-phases-step-info ${phase ? "signup-phases-step-show" : String()}`}>
                <p>{`Step ${phase && key}/5`}</p>
                <span>{title}</span>
            </div>
        </div>
    );

    const _addPhaseHeader = (title: string, text: string): JSX.Element => (
        <div className="flex-header-block-column">
            <h2>{title}</h2>
            <span>{text}</span>
        </div>
    );

    const _addPhaseOne = (): JSX.Element => (
        <div className={`signup-phaseOne ${state.phases[0].isActive ? "signup-phase-active" : String()}`}>
            {_addPhaseHeader("Provider", "Organizing meetings has never been easier. Sign up takes only 2 minutes! Choose your entry-level provider.")}
            {ModelProviders().map(({ key, text, iconSrc, styling, iconStyling}): JSX.Element => (
                <Button text={text} iconSrc={iconSrc} styling={styling} iconStyling={iconStyling} onClick={() => _onProviderClick(key)}/>
            ))}
            <div className="signup-phaseOne-additional-info">
                <span>Already have an account? <Link to="/signin">Sign In</Link></span>
                <span>By signing up to create an account I accept Company's <Link to="/terms">Terms of Use and Privacy Policy</Link></span>
            </div>
        </div>
    );

    const _addPhaseTwo = (): JSX.Element => (
        <div className={`signup-phaseTwo ${state.phases[1].isActive ? "signup-phase-active" : String()}`}>
            {_addPhaseHeader("About You", "Choose your preferred provider which will be your primary user for app authentication.")}
            {ModelInput.phaseTwo1.map((input) => _addInput(input, state.form[input.id]))}
            <div className="signup-phaseTwo-name">
                {ModelInput.phaseTwo2.map((input) => _addInput(input, state.form[input.id]))}
            </div>
        </div>
    );

    const _addPhaseThree = (): JSX.Element => (
        <div className={`signup-phaseThree ${state.phases[2].isActive ? "signup-phase-active" : String()}`}>
            {_addPhaseHeader("Password", "Choose your preferred provider which will be your primary user for app authentication.")}
            <Button text="Generate secure password" iconSrc="faShieldKeyhole" iconStyling="solid"  styling="light" showBorder={false} onClick={_onGeneratePasswordClick}/>
            {ModelInput.phaseThree.map((input) => _addInput(input, state.form[input.id]))}
        </div>
    );

    const _addPhaseFour = (): JSX.Element => (
        <div className={`signup-phaseFour ${state.phases[3].isActive ? "signup-phase-active" : String()}`}>
            {_addPhaseHeader("Profile Photos", "Choose your preferred provider which will be your primary user for app authentication.")}
            <div className="flex-header-block-column">
                <span className="signup-phaseFour-img-title">Profile Image</span>
                {_addImageContainer("profileImage")}
                <span className="signup-phaseFour-img-title">Company Image</span>
                {_addImageContainer("companyImage")}
            </div>
        </div>
    );

    const _addPhaseFive = (): JSX.Element => (
        <div className={`signup-phaseFive ${state.phases[4].isActive ? "signup-phase-active" : String()}`}>
            {_addPhaseHeader("Industry", "Choose your current industry and get access to specific templates")}
            <ul className="horizontal-list">
                {ModelIndustries().map(({ key, iconSrc, text }): JSX.Element => <li key={key}>
                    <FaIcon src={iconSrc} styling="thin"/>
                    <span>{text}</span>
                </li>)}
            </ul>
        </div>
    );

    const _addImageContainer = (id: string) => (
        <form action="#" method="POST" encType="multipart/form-data" className="signup-phaseFour-img-container" onSubmit={_onProfileImageSubmit} onClick={_onProfileImageClick}>
            <div>
                <input className="file-input" type="file" name="file" accept=".jpeg, .png, .jpg" onChange={(evt) => _onProfileImageChange(id, evt)} hidden />
                <FaIcon src="faImagePolaroid" styling="thin" />
                <span>Upload a Photo</span>
                <p>*.JPG, *.PNG up to 5MB</p>
            </div>
            <img src={state.form[id]} height="80px" width="80px" hidden={!state.form[id]} alt="id"/>
        </form>
    );

    return (
        <StyledSignUp>
            <div className="signup-phases">
                <img className="signup-phases-steps" src={Logo} />
                <div>
                    <header className="signup-phases-steps">
                        {state.phases.map(({ key, iconSrc, isActive, title}) =>
                            _addPhaseStep(key, iconSrc, isActive, title))}
                    </header>
                    {_addPhaseOne()}
                    {_addPhaseTwo()}
                    {_addPhaseThree()}
                    {_addPhaseFour()}
                    {_addPhaseFive()}
                </div>
                <footer className="signup-phases-steps">
                    {(!state.phases[0].isActive) && <Button text="Back" iconSrc="faCaretLeft" onClick={_onBackClick} />}
                    {(state.phases[3].isActive) && <Button text="Skip" iconSrc="faForward" />}
                    {(!state.phases[0].isActive && !state.phases[4].isActive) && <Button text="Next" iconSrc="faCaretRight" styling="tag" onClick={_onNextClick} disabled={!_isPatternMatching()} />}
                    {(state.phases[4].isActive) && <Button text="Sign Up" styling="tag" onClick={_onSignUpClick} disabled={!_isPatternMatching()}/>}
                </footer>
            </div>
        </StyledSignUp>
    )
}