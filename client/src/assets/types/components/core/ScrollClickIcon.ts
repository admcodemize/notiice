import React from "react";
import { TFontAwesomeIconStyle } from "./FontAwesomeIcon";

export interface IScrollClickIconProps {
    iconSrc: string,
    iconStyling?: TFontAwesomeIconStyle
    className?: string,
    scrollTo?: TScrollToPosition,
    isVisible?: boolean,
    onClick?: (evt: React.MouseEvent<SVGSVGElement>) => void
}

export interface IStyledScrollClickIconProps {
    isVisible: boolean
}

export type TScrollToPosition = "right" | "left";