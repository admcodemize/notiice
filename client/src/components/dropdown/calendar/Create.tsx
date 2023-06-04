import { useTranslation } from "react-i18next";
import { StyledCreate } from "../../../assets/styles/components/dropdown/calendar/Create.styles";

import { IDropdownProps } from "../../../assets/types/components/dropdown/Global";

import { addListItemWithShortcut, addGroup } from "../../../utils/helpers/UnorderedList";

export const Create = ({ callback }: IDropdownProps): JSX.Element => {
    /** @desc Returns the translation function for reading from the locales files */
    const { t } = useTranslation();

    return (
        <StyledCreate>
            {addGroup(t("global.eventTypes"), [
                addListItemWithShortcut("eventType", "faToolbox", t("global.eventType"), callback),
                addListItemWithShortcut("template", "faSheetPlastic", t("global.template"), callback)
            ])}
            {addGroup(t("global.calendar"), [
                addListItemWithShortcut("event", "faCalendarLines", t("global.event"), callback),
                addListItemWithShortcut("survey", "faSquarePollHorizontal", t("global.survey"), callback)
            ])}
            {addGroup(t("global.others"), [
                addListItemWithShortcut("team", "faLayerGroup", t("global.team"), callback),
                addListItemWithShortcut("workSchedule", "faBusinessTime", t("global.workSchedule"), callback)
            ])}
        </StyledCreate>
    )
}