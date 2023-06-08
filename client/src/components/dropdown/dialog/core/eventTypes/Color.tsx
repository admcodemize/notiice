import { useTranslation } from "react-i18next";

import { StyledColor } from "../../../../../assets/styles/components/dropdown/dialog/core/eventTypes/Color.styles"

import { IDropdownProps } from "../../../../../assets/types/components/dropdown/Global";

import { ColorPicker } from "../../../../core/ColorPicker";

export const Color = ({ callback = () => {} }: IDropdownProps): JSX.Element => {
    /** @desc Returns the translation function for reading from the locales files */
    const { t } = useTranslation();

    return (
        <StyledColor>
            <ColorPicker />
        </StyledColor>
    )
}