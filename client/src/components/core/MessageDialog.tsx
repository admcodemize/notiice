import React, { useContext } from "react";
import { useTranslation } from "react-i18next";

import { StyledMessageDialog } from "../../assets/styles/components/core/MessageDialog.styles";

import { MessageContext } from "../../utils/context/Message";

import { Button } from "./Button";
import { FaIcon } from "./FontAwesomeIcon";

import { getIconByType } from "../../utils/helpers/Message";

export const MessageDialog = (): JSX.Element => {
    /** @desc Load reducer state which handles the display of an alert dialog */
    const { state, dispatch } = useContext(MessageContext);

    /** @desc Returns the translation function for reading from the locales files */
    const { t } = useTranslation();

    /** @desc Update state for closing dialog after clicking a default button -> Used also for custom click event!! */
    const _onClick = (): void => dispatch({
        type: "dialog"
    });

    const _addCloseIcon = (): JSX.Element => (
        <FaIcon
            src="faClose"
            className="message-dialog-close-icon"
            onClick={() => _onClick()} />
    );

    const _addDialogTypeIcon = (): JSX.Element => (
        <div className="message-dialog-type-icon">
            <FaIcon src={getIconByType()[state.type || "information"]} />
        </div>
    );

    const _addCustomButtons = (): JSX.Element[] => {
        const aCustomButtons: JSX.Element[] = [];

        /** @desc Add custom buttons to JSX-Array */
        for (const oCustomButton of state.customButtons || []) {
            aCustomButtons.push(<Button
                {...oCustomButton}
                onClick={(evt: React.MouseEvent<HTMLButtonElement>) => {
                    _onClick();
                    oCustomButton.onClick && oCustomButton.onClick(evt, (oCustomButton.id || "custom"));
                }} />)
        } return aCustomButtons;
    };

    const _addSupportButton = (): JSX.Element => (
        <Button
            text={state.buttonSupport?.text || t("buttons.support")}
            iconSrc={state.buttonSupport?.iconSrc || "faHandsHelping"}
            onClick={(evt: React.MouseEvent<HTMLButtonElement>) => {
                _onClick();
                state.buttonSupport && state.buttonSupport.onClick && state.buttonSupport.onClick(evt);
            }} />
    );

    const _addCancelButton = (): JSX.Element => (
        <Button
            styling="error"
            text={state.buttonCancel?.text || t("buttons.cancel")}
            iconSrc={state.buttonCancel?.iconSrc || "faXmark"}
            iconStyling="solid"
            onClick={(evt: React.MouseEvent<HTMLButtonElement>) => {
                _onClick();
                state.buttonCancel && state.buttonCancel.onClick && state.buttonCancel.onClick(evt);
            }} />
    );

    const _addOkButton = (): JSX.Element => (
        <Button
            styling="success"
            text={state.buttonOK?.text || t("buttons.ok")}
            iconSrc={state.buttonOK?.iconSrc || "faCheck"}
            iconStyling="solid"
            onClick={(evt: React.MouseEvent<HTMLButtonElement>) => {
                _onClick();
                state.buttonOK && state.buttonOK.onClick && state.buttonOK.onClick(evt);
            }} />
    );

    const _addButtons = (): JSX.Element => (
        <div className="message-dialog-buttons">
            <div className="message-dialog-custom-buttons">
                {_addCustomButtons()}
                {state.buttonSupport?.visible && _addSupportButton()}
            </div>
            <div className="message-dialog-default-buttons">
                {state.buttonCancel?.visible && _addCancelButton()}
                {state.buttonOK?.visible && _addOkButton()}
            </div>
        </div>
    );

    return state.showAlert ? (
        <StyledMessageDialog
            type={state.type || "information"}>
            <div className="message-dialog">
                {_addCloseIcon()}
                {!state.hideIconSrc && _addDialogTypeIcon()}
                {state.title && <h2 className="message-dialog-info">{state.title}</h2>}
                {state.info && <span className="message-dialog-info">{state.info}</span>}
                {((state.buttonOK?.visible === true || state.buttonCancel?.visible === true || state.buttonSupport?.visible === true) || (state.customButtons && state.customButtons.length > 0)) && _addButtons()}
            </div>
        </StyledMessageDialog>
    ) : <></>
}