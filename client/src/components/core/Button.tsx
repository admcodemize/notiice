import { StyledButton } from "../../assets/styles/components/core/Button.styles";

import { IButtonProps } from "../../assets/types/components/core/Button";

import { FaIcon } from "./FontAwesomeIcon";

export const Button = ({ iconSrc, iconStyling = "thin", text, type = "default", badge }: IButtonProps): JSX.Element => {
    return (
        <StyledButton type={type}>
            {iconSrc && <FaIcon src={iconSrc} styling={iconStyling} />}
            {text && <span>{text}</span>}
            {badge && <FaIcon src="faCircle" styling="solid" className="button-badge"/>}
        </StyledButton>
    )
}