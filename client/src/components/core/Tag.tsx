import { StyledTag } from "../../assets/styles/components/core/Tag.styles";

import { ITagProps } from "../../assets/types/components/core/Tag";

import { FaIcon } from "./FontAwesomeIcon";

export const Tag = ({ text, iconSrc, className }: ITagProps): JSX.Element => {
    return (
        <StyledTag className={className}>
            {iconSrc && <FaIcon src={iconSrc} />}
            <span>{text}</span>
        </StyledTag>
    )
}