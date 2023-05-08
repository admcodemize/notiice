import React, { useReducer } from "react";
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";

import { StyledSignUp } from "../../assets/styles/components/base/SignUp.styles";
import Logo from "../../assets/images/img.png";
import { ModelProviders, ModelIndustries, ModelInput } from "../../assets/models/components/base/SignUp";
import { TSignUpInputPhases, TSignUpMessages, TSignUpForm, TDispatchSignUpFormPatternMatches } from "../../assets/types/utils/reducer/SignUp";

import { Button } from "../core/Button";
import { FaIcon } from "../core/FontAwesomeIcon";
import { Input } from "../core/Input";

import { generatePassword } from "../../utils/helpers/User";
import { signUpReducer, signUpReducerInitState } from "../../utils/reducer/SignUp";
import { coreRegexExp } from "../../utils/helpers/RegexExp";

export const SignUp = (): JSX.Element => {
    /** @desc Load reducer state which handles the signup data like patternMatches, phases or messages */
    const [ state, dispatch ] = useReducer(signUpReducer, signUpReducerInitState);

    /** @desc Returns the translation function for reading from the locales files */
    const { t } = useTranslation();

    const _onProviderClick = (providerKey: string): void => dispatch({ type: "next" });
    const _onGeneratePasswordClick = (): void => {
        const generatedPassword = generatePassword();
        console.log(generatedPassword);
    }

    const _onBackClick = (): void => dispatch({ type: "back" });
    const _onNextClick = (): void => dispatch({ type: "next" });

    const _onSignUpClick = (): void => {};

    const _dispatchSignUpForm = (payload: TSignUpForm): void => dispatch({ type: "form", payload });
    const _dispatchSignUpFormPatternMatches = (payload: TDispatchSignUpFormPatternMatches): void => dispatch({ type: "formPattern", payload });

    const _onInputChange = async (evt: React.ChangeEvent<HTMLInputElement>, id: string): Promise<void> => {
        _dispatchSignUpForm({
            ...state.form,
            [id]: evt?.target?.value
        });

        /** @desc Check if regex pattern is matching */
        _patternMatches(evt, id);
    };

    const _patternMatches = (evt: React.ChangeEvent<HTMLInputElement>, id: string): void => {
        // if (id !== SignUpProps().MAIL && id !== SignUpProps().USERNAME) {
            _dispatchSignUpFormPatternMatches({
                id, data: {
                    ...state.formPatternMatches,
                    [id]: new RegExp(coreRegexExp(id)).test(evt.target.value)
                }
            }); return;
        // }
        //
        // _checkInputValidity(id, evt.target.value, isValidMail, state.phases.phase1, id === SignUpProps().MAIL);
        // _checkInputValidity(id, evt.target.value, isValidUsername, state.phases.phase2, id === SignUpProps().USERNAME);
    };

    const _isPatternMatching = (): boolean => {
        return true;
        // return state.phases.phase1 ? state.formPatternMatches.name && state.formPatternMatches.mail
        //     : state.phases.phase2 ? state.formPatternMatches.username && state.formPatternMatches.password
        //         : state.phases.phase3 ? true
        //             : state.phases.phase4 ? state.formPatternMatches.code : false;
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
                <div className="signup-phaseFour-img-container" onClick={(evt) => {
                    debugger
                    //evt.target.children[evt.target.children.length - 1].click();
                }} onChange={(evt) => {
                    //console.log(evt.target.value);
                }}>
                    <FaIcon src="faImagePolaroid" styling="thin" />
                    <span>Upload a Photo</span>
                    <p>*.JPG, *.PNG up to 5MB</p>
                    <input type="file" />
                </div>
                <span className="signup-phaseFour-img-title">Cover Image</span>
                <div className="signup-phaseFour-img-container">
                    <FaIcon src="faImagePolaroidUser" styling="thin" />
                    <span>Upload a Photo</span>
                    <p>*.JPG, *.PNG up to 5MB</p>
                    <input type="file" />
                </div>
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
                    {(!state.phases[0].isActive && !state.phases[4].isActive) && <Button text="Next" iconSrc="faCaretRight" styling="tag" onClick={_onNextClick} />}
                    {(state.phases[4].isActive) && <Button text="Sign Up" styling="tag" onClick={_onSignUpClick} />}
                </footer>
            </div>
        </StyledSignUp>
    )
}