import { StyledScrollClickIcon } from "../../assets/styles/components/core/ScrollClickIcon.styles";

import { IScrollClickIconProps } from "../../assets/types/components/core/ScrollClickIcon";

import { FaIcon } from "./FontAwesomeIcon";

export const ScrollClickIcon = ({ iconSrc, iconStyling = "solid", className, scrollTo = "right", isVisible, onClick = () => {} }: IScrollClickIconProps): JSX.Element => {
    return (
        <StyledScrollClickIcon className={className} isVisible={isVisible || false}>
            {isVisible && <FaIcon src={iconSrc} styling={iconStyling} className={scrollTo === "right" ? "scrollClickIcon-to-left" : "scrollClickIcon-to-right"} onClick={onClick}/>}
        </StyledScrollClickIcon>
    )
}