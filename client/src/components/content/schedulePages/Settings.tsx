import React from "react";
import { useTranslation } from "react-i18next";

import { StyledSettings } from "../../../assets/styles/components/content/schedulePages/Settings.styles";
import { ModelSettingsSubActionsKeys } from "../../../assets/models/components/content/schedulePage/Settings";

import { Input } from "../../core/Input";
import { RichTextEditor } from "../../core/RichTextEditor";
import { FaIcon } from "../../core/FontAwesomeIcon";

import { useBaseContext, useSchedulePageContext } from "../../../utils/hooks/useContext";
import {Button} from "../../core/Button";
import {ImageUpload} from "../../core/ImageUpload";

export const Settings = (): JSX.Element => {
    /** @desc Returns the translation function for reading from the locales files */
    const { t } = useTranslation();

    /** @desc Destructuring base context which handles various overlapping settings -> ../context/Base.tsx **/
    const { state, dispatch } = useBaseContext();

    /** @desc Load overall schedule page information */
    const schedulePageProps = useSchedulePageContext();

    const _addContentSpace = (): JSX.Element => (
        <>
            <div className="flex-header-block-row">
                <FaIcon src="faArrowUpRightFromSquare" styling="thin"/>
                <div className="flex-header-block-column settings-info-block">
                    <h5>Public URL</h5>
                    <p>Displaying the schedule page of current space</p>
                    <p>Changing your public URL will result in all your copied links breaking and needing to be updated.</p>
                </div>
                <Input id="test" label={`www.${window.location.hostname}.ch/page/`} labelInside={true} value={schedulePageProps.state.space.publicUrl}/>
            </div>
            <div className="flex-header-block-row">
                <FaIcon src="faSignature" styling="thin"/>
                <div className="flex-header-block-column settings-info-block">
                    <h5>Name</h5>
                    <p>This is your name as it appears on your schedule page and in email notifications.</p>
                </div>
                <Input id="settingsSpaceName" value={schedulePageProps.state.space.name} />
            </div>
            <div className="flex-header-block-row">
                <FaIcon src="faMessageCaptions" styling="thin"/>
                <div className="flex-header-block-column settings-info-block">
                    <h5>Welcome message</h5>
                    <p>Welcome message on the scheduling page. Display in the upper left corner</p>
                </div>
                <RichTextEditor value={schedulePageProps.state.space.welcomeMessage || t("content.schedulePages.settings.initialWelcomeMessage")}/>
            </div>
            {/*<div className="flex-header-block-row">*/}
            {/*    <FaIcon src="faWavePulse" styling="thin"/>*/}
            {/*    <div className="flex-header-block-column settings-info-block">*/}
            {/*        <h5>Activity Log</h5>*/}
            {/*        <p>Welcome message on the scheduling page. Display in the upper left corner</p>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div className="flex-header-block-row">*/}
            {/*    <FaIcon src="faCalendarUsers" styling="thin"/>*/}
            {/*    <div className="flex-header-block-column settings-info-block">*/}
            {/*        <h5>Calendar Connections</h5>*/}
            {/*        <p>Welcome message on the scheduling page. Display in the upper left corner</p>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </>
    );

    const _addContentBranding = (): JSX.Element => (
        <>
            <div className="flex-header-block-row">
                <FaIcon src="faImagePolaroidUser" styling="thin"/>
                <div className="flex-header-block-column settings-info-block">
                    <h5>Avatar</h5>
                    <p>Welcome message on the scheduling page. Display in the upper left corner</p>
                </div>
                <ImageUpload callback={() => {}} containerWidth="250px" />
            </div>
            <div className="flex-header-block-row">
                <FaIcon src="faImagePolaroid" styling="thin"/>
                <div className="flex-header-block-column settings-info-block">
                    <h5>Company Logo</h5>
                    <p>Welcome message on the scheduling page. Display in the upper left corner</p>
                </div>
                <ImageUpload callback={() => {}} containerWidth="250px"/>
            </div>
        </>
    );

    const _addContentPalette= (): JSX.Element => (
        <div>palette 123</div>
    );

    return (
        <StyledSettings>
            <header className="flex-header-submenu-actions">
                <div className="flex-justify-between-left">
                    {state.content.activeSettingMenu === ModelSettingsSubActionsKeys.space && <h5>Space</h5>}
                    {state.content.activeSettingMenu === ModelSettingsSubActionsKeys.branding && <h5>Branding</h5>}
                    {state.content.activeSettingMenu === ModelSettingsSubActionsKeys.palette && <h5>Palette</h5>}
                </div>
                <div className="flex-justify-between-right">
                    <Button text={t("buttons.cancel")} />
                    <Button text={t("buttons.save")} styling="tag" />
                </div>
            </header>
            <div className="schedulePages-settings-content">
                {state.content.activeSettingMenu === ModelSettingsSubActionsKeys.space && _addContentSpace()}
                {state.content.activeSettingMenu === ModelSettingsSubActionsKeys.branding && _addContentBranding()}
                {state.content.activeSettingMenu === ModelSettingsSubActionsKeys.palette && _addContentPalette()}
            </div>
        </StyledSettings>
    )
}