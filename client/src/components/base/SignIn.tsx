import React, { useReducer } from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate, useLocation } from "react-router-dom";

import { StyledAuth } from "../../assets/styles/components/base/Auth.styles";
import Logo from "../../assets/images/img.png";
import { ModelInput } from "../../assets/models/components/base/SignIn";
import { ModelProviders } from "../../assets/models/components/base/User";
import { TSignInInputPhases, TSignInMessages, TDispatchSignInMessages, TSignInForm, TDispatchSignInFormPatternMatches, TSignInPhase } from "../../assets/types/utils/reducer/SignIn";

import { Button } from "../core/Button";
import { Input } from "../core/Input";

import { signin } from "../../utils/api/components/base/Auth";
import { signInReducer, signInReducerInitState } from "../../utils/reducer/SignIn";
import { coreRegexExp } from "../../utils/helpers/RegexExp";
import { useLoader } from "../../utils/hooks/useLoader";
import { useMessage } from "../../utils/hooks/useMessage";
import { useAuthContext } from "../../utils/hooks/useAuthContext";

export const SignIn = (): JSX.Element => {
    /** @desc Load reducer state which handles the signup data like patternMatches, phases or messages */
    const [ state, dispatch ] = useReducer(signInReducer, signInReducerInitState);

    /** @desc In a suspense-enabled app, the navigate function is aware of when your app is suspending. */
    const navigate = useNavigate();

    /** @desc Returns the translation function for reading from the locales files */
    const { t } = useTranslation();

    /** @desc Returns current location */
    const location = useLocation();
    const fromPath = location.state?.from?.pathname || '/pages/types';

    /** @desc Destructuring auth context -> ../context.Auth.tsx */
    const { setAuth, setPersist } = useAuthContext();

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

    const _onBackClick = (): void => dispatch({ type: "back" });
    const _onNextClick = (): void => dispatch({ type: "next" });

    const _onSignInClick = (evt: React.MouseEvent<HTMLButtonElement>): void => {
        /** @desc Cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur. */
        evt.preventDefault();
        setLoader();

        const _updMessage = (id: string, message: string = String()): void => _dispatchMessage({
            id, data: {
                ...state.messages,
                [id]: message
            }
        });

        /** @desc Reset error messages */
        _updMessage("username");
        _updMessage("password");

        signin(state.form)
            .then((res) => {
                setAuth && setAuth({ accessToken: res.data.accessToken });
                navigate(fromPath, { replace: true });
                setLoader();
            })
            .catch((err) => {
                setLoader();
                if (err.internalError) setMessageDialog({
                    title: err.code,
                    info: err.tFunc ? t(err.message) : err.message
                }); else _updMessage("password", err.tFunc ? t(err.message) : err.message);
            });
    };

    const _dispatchSignInForm = (payload: TSignInForm): void => dispatch({ type: "form", payload });
    const _dispatchSignInFormPatternMatches = (payload: TDispatchSignInFormPatternMatches): void => dispatch({ type: "formPattern", payload });
    const _dispatchMessage = (payload: TDispatchSignInMessages): void => dispatch({ type: "messages", payload: payload });

    const _onInputChange = async (evt: React.ChangeEvent<HTMLInputElement>, id: string): Promise<void> => {
        _dispatchSignInForm({
            ...state.form,
            [id]: evt?.target?.value
        });

        /** @desc Check if regex pattern is matching */
        _patternMatches(id, evt?.target?.value);
    };

    const _patternMatches = (id: string, value: any): void => {
        _dispatchSignInFormPatternMatches({
            id, data: {
                ...state.formPatternMatches,
                [id]: new RegExp(coreRegexExp(id)).test(value)
            }
        });
    };

    const _isPatternMatching = (): boolean => state.phases[1].isActive ? state.formPatternMatches.email && state.formPatternMatches.password : true;

    const _addInput = ({ id, label, info, required, iconSrc, placeholder, type, ...props }: TSignInInputPhases, value: any): JSX.Element => (
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
            message={(state.messages as TSignInMessages)[id] || String()}
            messageType={(state.messages as TSignInMessages)[id] ? "error" : "default"}
            onChange={_onInputChange}
            {...props}/>
    );

    const _addPhaseStep = (key: number, iconSrc: string, phase: boolean, title: string): JSX.Element => (
        <div key={key} className="auth-phases-step">
            <Button iconSrc={iconSrc} iconStyling={phase ? "regular" : "thin"} styling={phase ? "tag" : "default"} />
            <div className={`auth-phases-step-info ${phase ? "auth-phases-step-show" : String()}`}>
                <p>{`Step ${phase && key}/2`}</p>
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
        <div className={`signin-phaseOne ${state.phases[0].isActive ? "auth-phase-active" : String()}`}>
            {_addPhaseHeader("providers.provider", t("signIn.phaseOne.description"))}
            {ModelProviders().map(({ key, text, iconSrc, styling, iconStyling}): JSX.Element => (
                <Button key={key} text={t(text)} iconSrc={iconSrc} styling={styling} iconStyling={iconStyling} onClick={() => _onProviderClick(key)}/>
            ))}
            <div className="auth-additional-info">
                <span>{t("signIn.phaseOne.account")} <Link to="/signup">{t("global.signUp")}</Link></span>
            </div>
        </div>
    );

    const _addPhaseTwo = (): JSX.Element => (
        <div className={`signin-phaseTwo ${state.phases[1].isActive ? "auth-phase-active" : String()}`}>
            {_addPhaseHeader(t("signIn.phaseTwo.account"), t("signIn.phaseTwo.description"))}
            {ModelInput.phaseTwo.map((input) => _addInput(input, state.form[input.id]))}
            <div className="auth-additional-info">
                <span>{t("signIn.phaseTwo.forgotPassword")} <Link to="/resetPassword">{t("global.resetPassword")}</Link></span>
            </div>
        </div>
    );

    return (
        <StyledAuth>
            <div className="auth-phases">
                <img className="auth-phases-steps" src={Logo} alt="logo" />
                <div style={{ width: "100%" }}>
                    <div className="signin-header-container">
                        <header className="auth-phases-steps">
                            {state.phases.map(({ key, iconSrc, isActive, title}: TSignInPhase) =>
                                _addPhaseStep(key, iconSrc, isActive, title))}
                        </header>
                        <header className="signin-phaseOne-expire">
                            <Button id="expire" text={state.form.expireDate === null ? t("global.sessionExpire") : state.form.expireDate.toLocaleString()} iconSrc="faStopwatch" dropdown={true} dropdownCallback={(key, data) => {
                                setPersist && setPersist(data.expireDate instanceof Date);
                                _dispatchSignInForm({
                                    ...state.form,
                                    expireDate: data.expireDate
                                });
                            }}/>
                        </header>
                    </div>
                    {_addPhaseOne()}
                    {_addPhaseTwo()}
                </div>
                <footer className="auth-phases-steps">
                    {(!state.phases[0].isActive) && <Button text={t("global.back")} iconSrc="faCaretLeft" onClick={_onBackClick} />}
                    {(!state.phases[0].isActive && !state.phases[1].isActive) && <Button text={t("global.next")} iconStyling="solid" iconSrc="faCaretRight" styling="tag" onClick={_onNextClick} disabled={!_isPatternMatching()} />}
                    {(state.phases[1].isActive) && <Button text={t("global.signIn")} iconSrc="faRightToBracket" iconStyling="solid" styling="tag" onClick={_onSignInClick} disabled={!_isPatternMatching()}/>}
                </footer>
            </div>
        </StyledAuth>
    )
}