import { forwardRef } from "react";
import { IFontAwesomeIconProps } from "../../assets/types/components/core/FontAwesomeIcon";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as FaDuotoneIcons from "@fortawesome/pro-duotone-svg-icons";
import * as FaSolidIcons from "@fortawesome/pro-solid-svg-icons";
import * as FaRegularIcons from "@fortawesome/pro-regular-svg-icons";
import * as FaThinIcons from "@fortawesome/pro-thin-svg-icons";
import * as FaBrandIcons from '@fortawesome/free-brands-svg-icons';

export const FaIcon = forwardRef(({ src, style, styling = "duotone", className, onClick = () => {} }: IFontAwesomeIconProps, ref): JSX.Element => {
    /** @ts-ignore */
    const _getFaIcons = (styling: string|any) => ({
        "duotone": FaDuotoneIcons,
        "solid": FaSolidIcons,
        "regular": FaRegularIcons,
        "thin": FaThinIcons,
        "brands": FaBrandIcons
    })[styling];

    return (
        <FontAwesomeIcon
            forwardedRef={ref}
            icon={_getFaIcons(styling)[src]}
            className={className}
            style={style}
            onClick={onClick}/>
    )
});