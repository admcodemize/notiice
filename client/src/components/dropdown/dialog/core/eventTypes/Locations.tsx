import { useTranslation } from "react-i18next";

import { StyledSettings } from "../../../../../assets/styles/components/dropdown/schedulePages/eventTypes/Settings.styles";

import { IDropdownProps } from "../../../../../assets/types/components/dropdown/Global";

import { addGroup, addListItemWithNote } from "../../../../../utils/helpers/UnorderedList";

export const Locations = ({ callback = () => {} }: IDropdownProps): JSX.Element => {
    /** @desc Returns the translation function for reading from the locales files */
    const { t } = useTranslation();

    return (
        <StyledSettings>
            {addGroup(t("global.locations"), [
                addListItemWithNote({ key: "personalMeeting", iconSrc: "faLocationDot", text: t("dropdown.dialog.core.eventTypes.locations.personalMeeting"), note: t("dropdown.dialog.core.eventTypes.locations.personalMeetingNote"), onClick: callback }),
                addListItemWithNote({ key: "call", iconSrc: "faMobile", text: t("dropdown.dialog.core.eventTypes.locations.call"), note: t("dropdown.dialog.core.eventTypes.locations.callNote"), onClick: callback }),
                addListItemWithNote({ key: "zoom", iconSrc: "faVideo", text: t("dropdown.dialog.core.eventTypes.locations.zoom"), note: t("dropdown.dialog.core.eventTypes.locations.webConference"), onClick: callback }),
                addListItemWithNote({ key: "teams", iconSrc: "faMicrosoft", iconStyling: "brands", text: t("dropdown.dialog.core.eventTypes.locations.teams"), note: t("dropdown.dialog.core.eventTypes.locations.webConference"), onClick: callback }),
                addListItemWithNote({ key: "meet", iconSrc: "faGoogle", iconStyling: "brands", text: t("dropdown.dialog.core.eventTypes.locations.meet"), note: t("dropdown.dialog.core.eventTypes.locations.webConference"), onClick: callback }),
            ])}
        </StyledSettings>
    )
}