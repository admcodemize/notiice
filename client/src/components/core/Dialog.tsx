import React from "react";

import { StyledDialog } from "../../assets/styles/components/core/Dialog.styles";
import { IDialogProps } from "../../assets/types/components/core/Dialog";

import { getDialogElemByButtonId } from "../../utils/helpers/Dialog";
import { useKeyPress } from "../../utils/hooks/useKeyPress";

export const Dialog = ({ callback = () => {}, ...props }: IDialogProps): JSX.Element => {
    useKeyPress(() => callback(props.id, false), ["Escape"]);

    return (
        <StyledDialog>
            <div className="dialog-container">
                {getDialogElemByButtonId({...props})}
            </div>
        </StyledDialog>
    );
}