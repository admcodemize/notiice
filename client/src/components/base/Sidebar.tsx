import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { StyledSidebar } from "../../assets/styles/components/base/Sidebar.styles";

import { Logo } from "../core/Logo";
import { FaIcon } from "../core/FontAwesomeIcon";

import { RouteProps } from "../../assets/constants/Properties";
import { TFontAwesomeIconStyle } from "../../assets/types/components/core/FontAwesomeIcon";

export const Sidebar = (): JSX.Element => {
    const [ activeItem, setActiveItem ] = useState<string>(RouteProps().SCHEDULEPAGES);

    /** @desc In a suspense-enabled app, the navigate function is aware of when your app is suspending. */
    const navigate = useNavigate();

    const _onMenuItemClick = (path: string): void => {
        setActiveItem(path);
        navigate(path);
    };

    const _addMenuItem = (key: string, iconSrc: string, hoverInfo: string, styling: TFontAwesomeIconStyle = "thin", style: {} = {}): JSX.Element => (
        <div className={`sidebar-menu-svg ${activeItem === key && "sidebar-menu-svg-active"}`} onClick={(): void => _onMenuItemClick(key)}>
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
                    {_addMenuItem(RouteProps().DASHBOARD, "faGrid2", "Dashboard")}
                    {_addMenuItem(RouteProps().SCHEDULEPAGES, "faLayerGroup", "Schedule Pages")}
                    {_addMenuItem(RouteProps().WORKFLOW, "faMicrochip", "Workflow")}
                    {_addMenuItem(RouteProps().INTEGRATIONS, "faTrowelBricks", "Integrations")}
                    {_addMenuItem(RouteProps().VARIABLE, "faPenField", "Variables")}
                </menu>
            </header>
            <footer>
                <menu>
                    {_addMenuItem("theme", "faMoon", "Theme")}
                    {_addMenuItem("signOut", "faRightFromBracket", "Sign Out", "thin", { color: "#bf6464" })}
                </menu>
            </footer>
        </StyledSidebar>
    )
}