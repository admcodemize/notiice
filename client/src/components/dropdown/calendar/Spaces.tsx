import { useLayoutEffect } from "react";
import { useTranslation } from "react-i18next";
import { StyledSpaces } from "../../../assets/styles/components/dropdown/calendar/Spaces.styles";

import { IDropdownProps } from "../../../assets/types/components/dropdown/Global";
import { ISchedulePageSpace } from "../../../assets/types/utils/reducer/SchedulePage";

import { useAuthDecoder } from "../../../utils/hooks/useAuthDecoder";
import { useSchedulePageContext } from "../../../utils/hooks/useContext";
import { addGroup, addListItemWithShortcut } from "../../../utils/helpers/UnorderedList";
import { schedulePageReducerInitState } from "../../../utils/reducer/SchedulePage";

export const Spaces = ({ callback }: IDropdownProps): JSX.Element => {
    let primaryKeyUser: string = "primaryUser";

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
                ...schedulePageReducerInitState.space,
                id: primaryKeyUser,
                text: `${authDecoded()?.sub?.firstname} ${authDecoded()?.sub?.lastname}`
            }}
        });
    }, []);

    const _onListItemClick = (key: string, isOpen: boolean, data?: any): void => {
        dispatch({ type: "space", payload: { ...state, space: _getSpaceState(key, data) }});
        callback && callback(key, isOpen, _getSpaceState(key, data));
    };

    const _getSpaceState = (key: string, data: any): ISchedulePageSpace => ({ ...state.space,
        id: key,
        text: data?.text || schedulePageReducerInitState.space.text,
        iconSrc: data?.iconSrc || schedulePageReducerInitState.space.iconSrc
    });

    return (
        <StyledSpaces>
            {addGroup(t("global.primary"), [
                addListItemWithShortcut(primaryKeyUser, schedulePageReducerInitState.space.iconSrc, `${authDecoded()?.sub?.firstname} ${authDecoded()?.sub?.lastname}`, _onListItemClick)
            ])}
            {addGroup(t("global.teams"), [
                addListItemWithShortcut("space-a01d3kdfh", "faPlanetRinged", "React Project Youtube", _onListItemClick),
                addListItemWithShortcut("space-4djfd7c89", "faPlanetRinged", "Codemize GmbH", _onListItemClick)
            ])}
        </StyledSpaces>
    )
}