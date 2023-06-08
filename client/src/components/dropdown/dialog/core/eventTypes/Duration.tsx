import { useTranslation } from "react-i18next";

import { StyledDuration } from "../../../../../assets/styles/components/dropdown/dialog/core/eventTypes/Duration.styles";

import { IDropdownProps } from "../../../../../assets/types/components/dropdown/Global";

import { addGroup, addListItem } from "../../../../../utils/helpers/UnorderedList";

export const Durations = ({ callback = () => {} }: IDropdownProps): JSX.Element => {
    /** @desc Returns the translation function for reading from the locales files */
    const { t } = useTranslation();

    return (
        <StyledDuration>
            {addGroup(t("global.durations"), [
                addListItem({ key: "15min", text: "15 Minutes", onClick: callback }),
                addListItem({ key: "30min", text: "30 Minutes", onClick: callback }),
                addListItem({ key: "45min", text: "45 Minutes", onClick: callback }),
                addListItem({ key: "60min", text: "60 Minutes", onClick: callback }),
                addListItem({ key: "custom", text: "Custom", onClick: callback }),
            ])}
        </StyledDuration>
    )
}