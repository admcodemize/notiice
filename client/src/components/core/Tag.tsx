import { StyledTag } from "../../assets/styles/components/core/Tag.styles";

import { ITagProps } from "../../assets/types/components/core/Tag";

import { FaIcon } from "./FontAwesomeIcon";

export const Tag = ({ text, iconSrc, styling = "duotone", className }: ITagProps): JSX.Element => {
    return (
        <StyledTag className={className}>
            {iconSrc && <FaIcon src={iconSrc} styling={styling} />}
            <span>{text}</span>
        </StyledTag>
    )
}