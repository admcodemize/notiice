import React, {useState} from "react";
import {useTranslation} from "react-i18next";

import { StyledSettings } from "../../../assets/styles/components/content/schedulePages/Settings.styles";

import {Input} from "../../core/Input";


export const Settings = (): JSX.Element => {
    /** @desc Returns the translation function for reading from the locales files */
    const { t } = useTranslation();

    const _addProfile = (): JSX.Element => (
        <div>
            profile
        </div>
    );

    const _addBranding = (): JSX.Element => (
        <div className="schedulePages-settings-content">
            <div className="flex-header-block-column">
                <div>
                    <h2>URL</h2>
                    <span>Have an in-depth look at all the metrics within your workspace.</span>
                </div>
            </div>
            <Input id="schedulePageSettingsBrandingURL" label="Public URL" required={true} message="Changing your URL will result in all your copied links breaking and needing to be updated." />
        </div>
    );

    return (
        <StyledSettings>
            <header className="flex-header-submenu-actions">
            </header>
            <div className="schedulePages-settings-content">
                <div className="flex-header-block-column">
                    <div>
                        <h2>URL</h2>
                        <span>Have an in-depth look at all the metrics within your workspace.</span>
                    </div>
                </div>
                {/*<Input id="schedulePageSettingsBrandingURL" label="Public URL" required={true} message="Changing your URL will result in all your copied links breaking and needing to be updated." />*/}
            </div>
        </StyledSettings>
    )
}