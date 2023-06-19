import { useState } from "react";
import { useTranslation } from "react-i18next";

import { StyledSettings } from "../../../assets/styles/components/sliderLeft/schedulePages/Settings.styles";

import { ModelSettingsSubActions, ModelSettingsSubActionsKeys } from "../../../assets/models/components/content/schedulePage/Settings";

import { addListItem } from "../../../utils/helpers/UnorderedList";

export const Settings = (): JSX.Element => {
    const [ activeItem, setActiveItem ] = useState<string>(ModelSettingsSubActionsKeys.space);

    /** @desc Returns the translation function for reading from the locales files */
    const { t } = useTranslation();

    return (
        <StyledSettings>
            <ul className="vertical-list">
                {ModelSettingsSubActions.map(({ key, iconSrc, text}) => addListItem({
                    activeItem, key, iconSrc, text: t(text),
                    onClick: (path) => setActiveItem(path)
                }))}
            </ul>
        </StyledSettings>
    )
}