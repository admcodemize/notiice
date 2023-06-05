import { StyledHeader } from "../../assets/styles/components/base/Header.styles";

import { Search } from "../core/Search";
import { Button } from "../core/Button";

export const Header = (): JSX.Element => {
    return (
        <StyledHeader>
            <Search />
            <div></div>
            <div>
                <Button id="inbox" iconSrc="faMegaphone" text="Inbox" badge={true} dropdown={true} dropdownFloat="right"/>
            </div>
        </StyledHeader>
    )
}