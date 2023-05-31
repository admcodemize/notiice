import { StyledSpaces } from "../../../assets/styles/components/dropdown/calendar/Spaces.styles";

import { IDropdownProps } from "../../../assets/types/components/dropdown/Global";

import { FaIcon } from "../../core/FontAwesomeIcon";

export const Spaces = ({ callback }: IDropdownProps): JSX.Element => {
    return (
        <StyledSpaces>
            <header>
                <FaIcon src="faSearch" styling="thin" />
            </header>
            <main>
                <div className="spaces-group">
                    <div className="spaces-group-header">
                        <span className="spaces-group-title">Integrated Calendars</span>
                        <FaIcon src="faAdd" styling="solid" onClick={(evt) => callback && callback(false)}/>
                    </div>
                    <ul>
                        <li>
                            <div className="global-li-content">
                                <FaIcon src="faMicrosoft" styling="brands" />
                                <span>Outlook</span>
                            </div>

                        </li>
                        <li>
                            <div className="global-li-content">
                                <FaIcon src="faGoogle" styling="brands" />
                                <span>Google</span>
                            </div>

                        </li>
                        <li>
                            <div className="global-li-content">
                                <FaIcon src="faApple" styling="brands" />
                                <span>iCloud</span>
                            </div>

                        </li>
                    </ul>
                </div>
                <div className="spaces-group">
                    <div className="spaces-group-header">
                        <span className="spaces-group-title">Teams</span>
                        <FaIcon src="faAdd" styling="solid" />
                    </div>
                    <ul>
                        <li>
                            <div className="global-li-content">
                                <FaIcon src="faLayerGroup" styling="thin" />
                                <span>AEW FI</span>
                            </div>

                        </li>
                        <li>
                            <div className="global-li-content">
                                <FaIcon src="faLayerGroup" styling="thin" />
                                <span>Projekt A</span>
                            </div>

                        </li>
                    </ul>
                </div>
            </main>
        </StyledSpaces>
    )
}