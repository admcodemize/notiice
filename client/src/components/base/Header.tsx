import { useTranslation } from "react-i18next";
import { StyledHeader } from "../../assets/styles/components/base/Header.styles";

import { Search } from "../core/Search";
import { Button } from "../core/Button";

export const Header = (): JSX.Element => {
    /** @desc Returns the translation function for reading from the locales files */
    const { t } = useTranslation();

    return (
        <StyledHeader>
            <Search />
            <div></div>
            <div>
                <Button id="headerInbox" iconSrc="faMegaphone" text={t("global.inbox")} badge={true} dropdown={true} dropdownFloat="right"/>
            </div>
        </StyledHeader>
    )
}