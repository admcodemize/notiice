import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { StyledSidebar } from "../../assets/styles/components/base/Sidebar.styles";

import { Logo } from "../core/Logo";
import { FaIcon } from "../core/FontAwesomeIcon";

import { RouteProps } from "../../assets/constants/Properties";
import { TFontAwesomeIconStyle } from "../../assets/types/components/core/FontAwesomeIcon";

export const Sidebar = (): JSX.Element => {
    const [ activeItem, setActiveItem ] = useState<string>(RouteProps().SCHEDULEPAGES);

    /** @desc Returns the translation function for reading from the locales files */
    const { t } = useTranslation();

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
                    {_addMenuItem(RouteProps().DASHBOARD, "faGrid2", t("sidebar.dashboard"))}
                    {_addMenuItem(RouteProps().SCHEDULEPAGES, "faLayerGroup", t("sidebar.schedulePages"))}
                    {_addMenuItem(RouteProps().WORKFLOW, "faMicrochip", t("sidebar.workflow"))}
                    {_addMenuItem(RouteProps().INTEGRATIONS, "faTrowelBricks", t("sidebar.integrations"))}
                    {_addMenuItem(RouteProps().VARIABLE, "faPenField", t("sidebar.variables"))}
                </menu>
            </header>
            <footer>
                <menu>
                    {_addMenuItem("theme", "faMoon", t("sidebar.theme"))}
                    {_addMenuItem("signOut", "faRightFromBracket", t("sidebar.signOut"), "thin", { color: "#bf6464" })}
                </menu>
            </footer>
        </StyledSidebar>
    )
}