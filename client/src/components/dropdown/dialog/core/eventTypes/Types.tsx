import { useTranslation } from "react-i18next";

import { StyledTypes } from "../../../../../assets/styles/components/dropdown/dialog/core/eventTypes/Types.styles";

import { IDropdownProps } from "../../../../../assets/types/components/dropdown/Global";

import { addGroup, addListItemWithNote } from "../../../../../utils/helpers/UnorderedList";

export const Types = ({ callback = () => {} }: IDropdownProps): JSX.Element => {
    /** @desc Returns the translation function for reading from the locales files */
    const { t } = useTranslation();

    return (
        <StyledTypes>
            {addGroup(t("global.eventTypes"), [
                addListItemWithNote({ key: "oneOnOne", iconSrc: "faUser", text: t("dropdown.dialog.core.eventTypes.types.oneOnOne"), note: t("dropdown.dialog.core.eventTypes.types.oneOnOneNote"), onClick: callback }),
                addListItemWithNote({ key: "group", iconSrc: "faUsers", text: t("dropdown.dialog.core.eventTypes.types.group"), note: t("dropdown.dialog.core.eventTypes.types.groupNote"), onClick: callback }),
                addListItemWithNote({ key: "roundRobin", iconSrc: "faUsersRays", text: t("dropdown.dialog.core.eventTypes.types.roundRobin"), note: t("dropdown.dialog.core.eventTypes.types.roundRobinNote"), onClick: callback })
            ])}
        </StyledTypes>
    )
}