import { StyledButton } from "../../assets/styles/components/core/Button.styles";

import { IButtonProps } from "../../assets/types/components/core/Button";

import { FaIcon } from "./FontAwesomeIcon";

export const Button = ({ iconSrc, iconStyling = "thin", text, styling = "default", dropdown, badge }: IButtonProps): JSX.Element => {
    return (
        <StyledButton styling={styling}>
            {iconSrc && <FaIcon src={iconSrc} styling={iconStyling} />}
            {text && <span>{text}</span>}
            {dropdown && <FaIcon src="faCaretDown" styling="thin" />}
            {badge && <FaIcon src="faCircle" styling="solid" className="button-badge"/>}
        </StyledButton>
    )
}