import { StyledSidebar } from "../../assets/styles/components/base/Sidebar.styles";

import { Logo } from "../core/Logo";
import { FaIcon } from "../core/FontAwesomeIcon";

import { TFontAwesomeIconStyle } from "../../assets/types/components/core/FontAwesomeIcon";

export const Sidebar = (): JSX.Element => {
    const _addMenuItem = (iconSrc: string, hoverInfo: string, styling: TFontAwesomeIconStyle = "thin", style: {} = {}): JSX.Element => (
        <div className="sidebar-menu-svg">
            <FaIcon src={iconSrc} styling={styling} style={style} />
            <div className="sidebar-menu-hover-info">
                <span>{hoverInfo}</span>
            </div>
        </div>
    );

    return (
        <StyledSidebar>
            <header>
                <Logo />
                <menu>
                    {_addMenuItem("faGrid2", "Dashboard")}
                    {_addMenuItem("faCalendars", "Calender")}
                    {_addMenuItem("faBusinessTime", "Work Schedule")}
                    {_addMenuItem("faMicrochip", "Workflow")}
                    {_addMenuItem("faTrowelBricks", "Integrations")}
                    {_addMenuItem("faPenField", "Variables")}
                </menu>
            </header>
            <footer>
                <menu>
                    {_addMenuItem("faMoon", "Theme")}
                    {_addMenuItem("faRightFromBracket", "Sign Out", "thin", { color: "#bf6464" })}
                </menu>
            </footer>
        </StyledSidebar>
    )
}