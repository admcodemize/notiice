import React from "react";
import { IButtonProps } from "./Button";

export interface IButtonGroupProps {
    initialKey: string,
    buttons: IButtonProps[],
    onClick?: (evt: React.MouseEvent<HTMLButtonElement>, key: string) => void
}