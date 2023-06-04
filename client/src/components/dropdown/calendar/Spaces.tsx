import { useLayoutEffect } from "react";
import { useTranslation } from "react-i18next";
import { StyledSpaces } from "../../../assets/styles/components/dropdown/calendar/Spaces.styles";

import { IDropdownProps } from "../../../assets/types/components/dropdown/Global";

import { useAuthDecoder } from "../../../utils/hooks/useAuthDecoder";
import { useSchedulePageContext } from "../../../utils/hooks/useSchedulePageContext";
import { addGroup, addListItemWithShortcut } from "../../../utils/helpers/UnorderedList";

export const Spaces = ({ callback }: IDropdownProps): JSX.Element => {
    let primarySpaceKey: string = "primaryUser"; // -> Used to be the same as in function "getShortcutByKey (Shortcut.tsx)"
    let primarySpaceIconSrc: string = "faLockKeyhole";

    /** @desc Returns the translation function for reading from the locales files */
    const { t } = useTranslation();

    /** @desc Decode JWT access token */
    const authDecoded = useAuthDecoder();

    /** @desc Load overall schedule page information */
    const { state, dispatch } = useSchedulePageContext();

    useLayoutEffect(() => {
        !state.space.id && dispatch({
            type: "space",
            payload: { ...state, space: {
                id: primarySpaceKey,
                text: `${authDecoded()?.sub?.firstname} ${authDecoded()?.sub?.lastname}`,
                iconSrc: primarySpaceIconSrc
            }}
        });
    }, []);

    return (
        <StyledSpaces>
            {addGroup(t("global.primary"), [
                addListItemWithShortcut(primarySpaceKey, primarySpaceIconSrc, `${authDecoded()?.sub?.firstname} ${authDecoded()?.sub?.lastname}`, callback)
            ])}
            {addGroup(t("global.teams"), [
                addListItemWithShortcut("space-a01d3kdfh", "faPlanetRinged", "React Project Youtube", callback),
                addListItemWithShortcut("space-4djfd7c89", "faPlanetRinged", "Codemize GmbH", callback)
            ])}
        </StyledSpaces>
    )
}