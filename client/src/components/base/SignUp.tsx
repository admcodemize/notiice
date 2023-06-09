import React, { useReducer } from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";

import { StyledAuth } from "../../assets/styles/components/base/Auth.styles";
import Logo from "../../assets/images/img.png";
import { ModelIndustries, ModelInput } from "../../assets/models/components/base/SignUp";
import { ModelProviders } from "../../assets/models/components/base/User";
import { TSignUpInputPhases, TSignUpForm, TDispatchSignUpFormPatternMatches, TSignUpPhase } from "../../assets/types/utils/reducer/SignUp";

import { Button } from "../core/Button";
import { Input } from "../core/Input";
import { ImageUpload } from "../core/ImageUpload";

import { create as createUser } from "../../utils/api/components/base/User";
import { generatePassword } from "../../utils/helpers/User";
import { signUpReducer, signUpReducerInitState } from "../../utils/reducer/SignUp";
import { coreRegexExp } from "../../utils/helpers/RegexExp";
import { addListItem } from "../../utils/helpers/UnorderedList";
import { useLoader } from "../../utils/hooks/useLoader";
import { useMessage } from "../../utils/hooks/useMessage";

export const SignUp = (): JSX.Element => {
    /** @desc Load reducer state which handles the signup data like patternMatches, phases or messages */
    const [ state, dispatch ] = useReducer(signUpReducer, signUpReducerInitState);

    /** @desc In a suspense-enabled app, the navigate function is aware of when your app is suspending. */
    const navigate = useNavigate();

    /** @desc Returns the translation function for reading from the locales files */
    const { t } = useTranslation();

    /** @desc Get function for displaying page loader */
    const { setLoader } = useLoader();

    /** @desc Get function for displaying alert dialog */
    const { setMessageDialog } = useMessage();

    const _onProviderClick = (providerKey: string): void => {
        if (providerKey === "email") dispatch({ type: "next" });
        else setMessageDialog({
            title: "Support",
            info: "Provider is not supported within beta version",
        });
    };

    const _onGeneratePasswordClick = (): void => {
        const generatedPassword = generatePassword();
        navigator.clipboard.writeText(generatedPassword);
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

    const _onSignUpClick = (evt: React.MouseEvent<HTMLButtonElement>): void => {
        /** @desc Cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur. */
        evt.preventDefault();
        setLoader();
        Object.keys(state.userForm).forEach((key): void => state.userForm[key] = state.form[key]);
        createUser(state.userForm)
            .then((res) => {
                navigate("/signin");
                setLoader();
            })
            .catch((err) => {
                setLoader();
                setMessageDialog({
                    title: err.code,
                    info: err.tFunc ? t(err.message) : err.message
                });
            });
    };

    const _dispatchSignUpForm = (payload: TSignUpForm): void => dispatch({ type: "form", payload });
    const _dispatchSignUpFormPatternMatches = (payload: TDispatchSignUpFormPatternMatches): void => dispatch({ type: "formPattern", payload });

    const _onInputChange = async (evt: React.ChangeEvent<HTMLInputElement>, id: string): Promise<void> => {
        _dispatchSignUpForm({
            ...state.form,
            [id]: evt?.target?.value
        });

        /** @desc Check if regex pattern is matching */
        _patternMatches(id, evt?.target?.value);
    };

    const _onIndustryClick = (key: string): void => _dispatchSignUpForm({
        ...state.form,
        industry: key
    });

    const _patternMatches = (id: string, value: any): void => {
        _dispatchSignUpFormPatternMatches({
            id, data: {
                ...state.formPatternMatches,
                [id]: new RegExp(coreRegexExp(id)).test(value)
            }
        });
    };

    const _isPatternMatching = (): boolean => {
        return state.phases[1].isActive ? state.formPatternMatches.email && state.formPatternMatches.firstname && state.formPatternMatches.lastname
            : state.phases[2].isActive  ? state.formPatternMatches.password && state.formPatternMatches.passwordConfirm
                && (state.form.password === state.form.passwordConfirm) : true
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
            onChange={_onInputChange}
            {...props}/>
    );

    const _addPhaseStep = (key: number, iconSrc: string, phase: boolean, title: string): JSX.Element => (
        <div key={key} className="auth-phases-step">
            <Button iconSrc={iconSrc} iconStyling={phase ? "regular" : "thin"} styling={phase ? "tag" : "default"} />
            <div className={`auth-phases-step-info ${phase ? "auth-phases-step-show" : String()}`}>
                <p>{`Step ${phase && key}/5`}</p>
                <span>{t(title)}</span>
            </div>
        </div>
    );

    const _addPhaseHeader = (title: string, text: string): JSX.Element => (
        <div className="flex-header-block-column">
            <h2>{t(title)}</h2>
            <span>{text}</span>
        </div>
    );

    const _addPhaseOne = (): JSX.Element => (
        <div className={`signup-phaseOne ${state.phases[0].isActive ? "auth-phase-active" : String()}`}>
            {_addPhaseHeader("providers.provider", t("signUp.phaseOne.description"))}
            {ModelProviders().map(({ key, text, iconSrc, styling, iconStyling}): JSX.Element => (
                <Button key={key} text={t(text)} iconSrc={iconSrc} styling={styling} iconStyling={iconStyling} onClick={() => _onProviderClick(key)}/>
            ))}
            <div className="auth-additional-info">
                <span>{t("signUp.phaseOne.account")} <Link to="/signin">{t("global.signIn")}</Link></span>
                <span>{t("signUp.phaseOne.terms")} <Link to="/terms">{t("global.terms")}</Link></span>
            </div>
        </div>
    );

    const _addPhaseTwo = (): JSX.Element => (
        <div className={`signup-phaseTwo ${state.phases[1].isActive ? "auth-phase-active" : String()}`}>
            {_addPhaseHeader(t("signUp.phaseTwo.about"), t("signUp.phaseTwo.description"))}
            {ModelInput.phaseTwo1.map((input) => _addInput(input, state.form[input.id]))}
            <div className="signup-phaseTwo-name">
                {ModelInput.phaseTwo2.map((input) => _addInput(input, state.form[input.id]))}
            </div>
        </div>
    );

    const _addPhaseThree = (): JSX.Element => (
        <div className={`signup-phaseThree ${state.phases[2].isActive ? "auth-phase-active" : String()}`}>
            {_addPhaseHeader(t("global.password"), t("signUp.phaseThree.description"))}
            <Button text={t("signUp.phaseThree.generate")} iconSrc="faShieldKeyhole" iconStyling="solid"  styling="light" showBorder={false} onClick={_onGeneratePasswordClick}/>
            {ModelInput.phaseThree.map((input) => _addInput(input, state.form[input.id]))}
        </div>
    );

    const _addPhaseFour = (): JSX.Element => (
        <div className={`signup-phaseFour ${state.phases[3].isActive ? "auth-phase-active" : String()}`}>
            {_addPhaseHeader(t("signUp.phaseFour.photos"), t("signUp.phaseFour.description"))}
            <div className="flex-header-block-column">
                <span className="signup-phaseFour-img-title">{t("signUp.phaseFour.avatar")}</span>
                {_addImageContainer("avatar")}
                <span className="signup-phaseFour-img-title">{t("signUp.phaseFour.companyImage")}</span>
                {_addImageContainer("companyImage")}
            </div>
        </div>
    );

    const _addPhaseFive = (): JSX.Element => (
        <div className={`signup-phaseFive ${state.phases[4].isActive ? "auth-phase-active" : String()}`}>
            {_addPhaseHeader(t("signUp.phaseFive.industry"), t("signUp.phaseFive.description"))}
            <ul className="horizontal-list">
                {ModelIndustries().map(({ key, iconSrc, text }): JSX.Element => addListItem({
                    activeItem: state.form.industry, key, iconSrc, text,
                    onClick: _onIndustryClick
                }))}
            </ul>
        </div>
    );

    const _addImageContainer = (id: string) => (
        <ImageUpload callback={(file) => _dispatchSignUpForm({
            ...state.form,
            [id]: file
        })} />
    );

    return (
        <StyledAuth>
            <div className="auth-phases">
                <img className="auth-phases-steps" src={Logo} alt="logo" />
                <div style={{ width: "100%" }}>
                    <header className="auth-phases-steps">
                        {state.phases.map(({ key, iconSrc, isActive, title}: TSignUpPhase) =>
                            _addPhaseStep(key, iconSrc, isActive, title))}
                    </header>
                    {_addPhaseOne()}
                    {_addPhaseTwo()}
                    {_addPhaseThree()}
                    {_addPhaseFour()}
                    {_addPhaseFive()}
                </div>
                <footer className="auth-phases-steps">
                    {(!state.phases[0].isActive) && <Button text={t("global.back")} iconSrc="faCaretLeft" onClick={_onBackClick} />}
                    {(!state.phases[0].isActive && !state.phases[4].isActive) && <Button text={t("global.next")} iconStyling="solid" iconSrc="faCaretRight" styling="tag" onClick={_onNextClick} disabled={!_isPatternMatching()} />}
                    {(state.phases[4].isActive) && <Button text={t("global.signUp")} iconSrc="faRightToBracket" iconStyling="solid" styling="tag" onClick={_onSignUpClick} disabled={!_isPatternMatching()}/>}
                </footer>
            </div>
        </StyledAuth>
    )
}