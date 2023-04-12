import { MouseEvent, MutableRefObject } from "react";

export interface IFontAwesomeIconProps {
    src: string,
    style?: {},
    styling?: TFontAwesomeIconStyle,
    className?: string,
    onClick?: (evt: MouseEvent<SVGSVGElement>) => void
}

export type TFontAwesomeIconStyle = "solid" | "duotone" | "brands" | "regular" | "thin";