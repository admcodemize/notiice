import { useTranslation } from "react-i18next";

import { StyledSettings } from "../../../../assets/styles/components/dropdown/schedulePages/eventTypes/Settings.styles";

import { IDropdownProps } from "../../../../assets/types/components/dropdown/Global";

import { addGroup, addListItem } from "../../../../utils/helpers/UnorderedList";

export const Settings = ({ callback = () => {} }: IDropdownProps): JSX.Element => {
    /** @desc Returns the translation function for reading from the locales files */
    const { t } = useTranslation();

    return (
        <StyledSettings>
            {addGroup(t("global.quickActions"), [
                addListItem({ key: "clone", iconSrc: "faCopy", text: t("global.clone"), onClick: callback }),
                addListItem({ key: "template", iconSrc: "faSheetPlastic", text: t("global.saveAsTemplate"), onClick: callback }),
                addListItem({ key: "delete", iconSrc: "faTrashCanXmark", text: t("global.delete"), className: "colorize-trash", onClick: callback })
            ])}
        </StyledSettings>
    )
}