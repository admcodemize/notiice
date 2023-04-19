import { StyledSearchClick } from "../../../assets/styles/components/dropdown/calendar/SearchClick.styles";

import { FaIcon } from "../../core/FontAwesomeIcon";

export const SearchClick = (): JSX.Element => {
    return (
        <StyledSearchClick>
            <header>
                <FaIcon src="faLightbulbOn" styling="solid" />
                <span>Search Tips</span>
            </header>
            <main>
                <div>
                    <span>Open this faster with keyboard command</span>
                    <mask className="keyboard-shortcut-dark">⌘</mask>
                    <span>+</span>
                    <mask className="keyboard-shortcut-dark">K</mask>
                </div>
                <div className="searchClick-border" />
                <div>
                    <span>Use quick commands like</span>
                    <mask className="keyboard-shortcut-dark">new:</mask>
                    <span>to create new events or</span>
                    <mask className="keyboard-shortcut-dark">priority:</mask>
                    <span>which searches events by specified priority.</span>
                </div>
                <div className="searchClick-border" />
                <div>
                    <span>Navigate through the listed entries with the keyboard arrow keys</span>
                    <mask className="keyboard-shortcut-dark"><FaIcon src="faCaretUp" styling="solid"/></mask>
                    <mask className="keyboard-shortcut-dark"><FaIcon src="faCaretDown" styling="solid"/></mask>
                    <span>and select the entry with</span>
                    <mask className="keyboard-shortcut-dark"><FaIcon src="faTurnDownLeft" styling="solid"/></mask>
                </div>
            </main>
        </StyledSearchClick>
    )
}