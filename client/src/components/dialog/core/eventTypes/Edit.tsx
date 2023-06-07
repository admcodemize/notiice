import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import { StyledEdit } from "../../../../assets/styles/components/dialog/core/eventTypes/Edit.styles";
import { IDialogContentProps } from "../../../../assets/types/components/core/Dialog";
import { ModelDialogEventTypeEdiMenuItems } from "../../../../assets/models/components/dialog/core/eventTypes/Edit";

import { Button } from "../../../core/Button";

import { addListItem } from "../../../../utils/helpers/UnorderedList";

export const Edit = ({ callback = () => {} }: IDialogContentProps): JSX.Element => {
    const [ activeItem, setActiveItem ] = useState<string>("general");

    /** @desc Returns the translation function for reading from the locales files */
    const { t } = useTranslation();

    return (
        <StyledEdit>
            <header>
                <ul className="horizontal-list">
                    {ModelDialogEventTypeEdiMenuItems.map(({ key, iconSrc, text}) => addListItem({
                        activeItem, key, iconSrc, text: t(text),
                        onClick: (path) => setActiveItem(path)
                    }))}
                </ul>
            </header>
            <div>

            </div>
            <footer>
                <div className="flex-justify-between-left">
                    <Button text="Share" iconSrc="faShareAll" styling="light" />
                    <Button text="Live Preview" iconSrc="faArrowUpRightFromSquare" styling="light" />
                </div>
                <div className="flex-justify-between-right">
                    <Button text="Close" iconSrc="faXmark" iconStyling="solid" styling="light" />
                    <Button text="Save" iconSrc="faSave" iconStyling="solid" styling="create" />
                </div>
            </footer>
        </StyledEdit>
    )
}