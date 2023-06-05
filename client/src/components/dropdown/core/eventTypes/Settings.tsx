import { useTranslation } from "react-i18next";

import { StyledSettings } from "../../../../assets/styles/components/dropdown/schedulePages/eventTypes/Settings.styles";

import { IDropdownProps } from "../../../../assets/types/components/dropdown/Global";

import { addListItem } from "../../../../utils/helpers/UnorderedList";

export const Settings = ({ callback }: IDropdownProps): JSX.Element => {
    /** @desc Returns the translation function for reading from the locales files */
    const { t } = useTranslation();

    return (
        <StyledSettings>
            <ul className="vertical-list">
                {addListItem("", "eventType", "faToolbox", t("global.eventType"), callback)}
                {addListItem("", "template", "faSheetPlastic", t("global.template"), callback)}
            </ul>
        </StyledSettings>
    )
}