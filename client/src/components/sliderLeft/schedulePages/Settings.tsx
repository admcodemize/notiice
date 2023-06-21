import { useTranslation } from "react-i18next";

import { StyledSettings } from "../../../assets/styles/components/sliderLeft/schedulePages/Settings.styles";

import { ModelSettingsSubActions } from "../../../assets/models/components/content/schedulePage/Settings";

import { addListItem } from "../../../utils/helpers/UnorderedList";
import { useBaseContext } from "../../../utils/hooks/useContext";

export const Settings = (): JSX.Element => {
    /** @desc Returns the translation function for reading from the locales files */
    const { t } = useTranslation();

    /** @desc Destructuring base context which handles various overlapping settings -> ../context/Base.tsx **/
    const { state, dispatch } = useBaseContext();

    return (
        <StyledSettings>
            <ul className="vertical-list">
                {ModelSettingsSubActions.map(({ key, iconSrc, text}) => addListItem({
                    activeItem: state.content.activeSettingMenu,
                    key, iconSrc, text: t(text),
                    onClick: (path) => dispatch({ type: "content", payload: {
                        ...state.content,
                        activeSettingMenu: path
                    }})
                }))}
            </ul>
        </StyledSettings>
    )
}