import React from "react";
import { useTranslation } from "react-i18next";

import { StyledSettings } from "../../../assets/styles/components/content/schedulePages/Settings.styles";
import { ModelSettingsSubActionsKeys } from "../../../assets/models/components/content/schedulePage/Settings";

import { useBaseContext } from "../../../utils/hooks/useContext";
import {Input} from "../../core/Input";
import {RichTextEditor} from "../../core/RichTextEditor";
import {FaIcon} from "../../core/FontAwesomeIcon";

export const Settings = (): JSX.Element => {
    /** @desc Returns the translation function for reading from the locales files */
    const { t } = useTranslation();

    /** @desc Destructuring base context which handles various overlapping settings -> ../context/Base.tsx **/
    const { state, dispatch } = useBaseContext();

    const _addContentSpace = (): JSX.Element => (
        <>
            <div className="flex-header-block-row">
                <FaIcon src="faArrowUpRightFromSquare" styling="thin"/>
                <div className="flex-header-block-column settings-info-block">
                    <h5>Public URL</h5>
                    <p>Displaying the schedule page of current space</p>
                    <p>Changing your public URL will result in all your copied links breaking and needing to be updated.</p>
                </div>
                <Input id="test" label="/localhost/pages/" labelInside={true}/>
            </div>
            <div className="flex-header-block-row">
                <FaIcon src="faSignature" styling="thin"/>
                <div className="flex-header-block-column settings-info-block">
                    <h5>Name</h5>
                    <p>This is your name as it appears on your schedule page and in email notifications.</p>
                </div>
                <Input id="test" />
            </div>
            <div className="flex-header-block-row">
                <FaIcon src="faMessageCaptions" styling="thin"/>
                <div className="flex-header-block-column settings-info-block">
                    <h5>Welcome message</h5>
                    <p>Welcome message on the scheduling page. Display in the upper left corner</p>
                </div>
                <RichTextEditor value="Welcome to my scheduling page. Please follow the instructions to add an event to my calendar."/>
            </div>
            <div className="flex-header-block-row">
                <FaIcon src="faWallet" styling="thin"/>
                <div className="flex-header-block-column settings-info-block">
                    <h5>Billing</h5>
                    <p>Welcome message on the scheduling page. Display in the upper left corner</p>
                </div>
            </div>
        </>
    );

    const _addContentBranding = (): JSX.Element => (
        <div>branding</div>
    );

    const _addContentPalette= (): JSX.Element => (
        <div>palette 123</div>
    );

    return (
        <StyledSettings>
            <div className="schedulePages-settings-content">
                {state.content.activeSettingMenu === ModelSettingsSubActionsKeys.space && _addContentSpace()}
                {state.content.activeSettingMenu === ModelSettingsSubActionsKeys.branding && _addContentBranding()}
                {state.content.activeSettingMenu === ModelSettingsSubActionsKeys.palette && _addContentPalette()}
            </div>
        </StyledSettings>
    )
}