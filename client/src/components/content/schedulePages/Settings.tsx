import React from "react";
import { useTranslation } from "react-i18next";

import { StyledSettings } from "../../../assets/styles/components/content/schedulePages/Settings.styles";
import { ModelSettingsSubActionsKeys } from "../../../assets/models/components/content/schedulePage/Settings";
import { ISchedulePageSpace } from "../../../assets/types/utils/reducer/SchedulePage";

import { Input } from "../../core/Input";
import { RichTextEditor } from "../../core/RichTextEditor";
import { Button } from "../../core/Button";
import { FaIcon } from "../../core/FontAwesomeIcon";

import { ImageUpload } from "../../core/ImageUpload";
import { useBaseContext, useSchedulePageContext } from "../../../utils/hooks/useContext";
import {Panel} from "../../core/Panel";

export const Settings = (): JSX.Element => {
    /** @desc Returns the translation function for reading from the locales files */
    const { t } = useTranslation();

    /** @desc Destructuring base context which handles various overlapping settings -> ../context/Base.tsx **/
    const { state, dispatch } = useBaseContext();

    /** @desc Load overall schedule page information */
    const schedulePageProps = useSchedulePageContext();

    const _dispatchSpace = (obj: any): void => schedulePageProps.dispatch({ type: "space", payload: {
            ...schedulePageProps.state,
            space: {
                ...schedulePageProps.state.space,
                ...obj
            }
        }});

    const _addContentSpace = (): JSX.Element => (
        <div className="settings-space">
            <div className="flex-header-block-row">
                <FaIcon src="faArrowUpRightFromSquare" styling="thin"/>
                <div className="flex-header-block-column settings-info-block">
                    <h5>Public URL</h5>
                    <p>Displaying the schedule page of current space</p>
                    <p>Changing your public URL will result in all your copied links breaking and needing to be updated.</p>
                </div>
                <Input id="test" label={`www.${window.location.hostname}.ch/page/`} labelInside={true} value={schedulePageProps.state.space.publicUrl}/>
            </div>
            <div className="flex-header-block-row">
                <FaIcon src="faSignature" styling="thin"/>
                <div className="flex-header-block-column settings-info-block">
                    <h5>Name</h5>
                    <p>This is your name as it appears on your schedule page and in email notifications.</p>
                </div>
                <Input id="settingsSpaceName" value={schedulePageProps.state.space.name} />
            </div>
            <div className="flex-header-block-row">
                <FaIcon src="faMessageCaptions" styling="thin"/>
                <div className="flex-header-block-column settings-info-block">
                    <h5>Welcome message</h5>
                    <p>Welcome message on the scheduling page. Display in the upper left corner</p>
                </div>
                <RichTextEditor value={schedulePageProps.state.space.pageWelcomeMessage || t("content.schedulePages.settings.initialWelcomeMessage")}/>
            </div>
        </div>
    );

    const _addContentBranding = (): JSX.Element => (
        <div className="settings-branding">
            <div className="flex-header-block-row">
                <FaIcon src="faImagePolaroidUser" styling="thin"/>
                <div className="flex-header-block-column settings-info-block">
                    <h5>Avatar</h5>
                    <p>Welcome message on the scheduling page. Display in the upper left corner</p>
                </div>
                <ImageUpload callback={() => {}} containerWidth="250px" />
            </div>
            <div className="flex-header-block-row">
                <FaIcon src="faImagePolaroid" styling="thin"/>
                <div className="flex-header-block-column settings-info-block">
                    <h5>Company Logo</h5>
                    <p>Welcome message on the scheduling page. Display in the upper left corner</p>
                </div>
                <ImageUpload callback={() => {}} containerWidth="250px"/>
            </div>
        </div>
    );

    const _addContentPalette= (): JSX.Element => (
        <div className="settings-palette">
            <Panel title="Space" info="Welcome message on the scheduling page. Display in the upper left corner" expanded={false} children={
                <>
                    <div className="flex-header-block-row">
                        <FaIcon src="faBorderOuter" styling="thin"/>
                        <div className="flex-header-block-column settings-info-block">
                            <h5>Logo Border</h5>
                            <p>Welcome message on the scheduling page. Display in the upper left corner</p>
                        </div>
                        <div className="settings-palette-colorPicker">
                            <Button id="coreColorPicker" iconSrc="faBrush" iconStyling="solid" dropdown={true} dropdownCallback={(key, data) => {
                                _dispatchSpace({ logoBorderColor: data?.hexColor || schedulePageProps.state.space.logoBorderColor });
                            }}/>
                            <div className="color-tile" style={{ backgroundColor: schedulePageProps.state.space.logoBorderColor, margin: "0"}}></div>
                            <Button id="coreInfoBlock" iconSrc="faInfo" showBorder={false} iconStyling="solid" dropdown={true} />
                        </div>
                    </div>
                    <div className="flex-header-block-row">
                        <FaIcon src="faBlockBrick" styling="thin"/>
                        <div className="flex-header-block-column settings-info-block">
                            <h5>Logo Background</h5>
                            <p>Welcome message on the scheduling page. Display in the upper left corner</p>
                        </div>
                        <div className="settings-palette-colorPicker">
                            <Button id="coreColorPicker" iconSrc="faBrush" iconStyling="solid" dropdown={true} dropdownCallback={(key, data) => {
                                _dispatchSpace({ logoBgColor: data?.hexColor || schedulePageProps.state.space.logoBgColor });
                            }}/>
                            <div className="color-tile" style={{ backgroundColor: schedulePageProps.state.space.logoBgColor, margin: "0"}}></div>
                            <Button id="coreInfoBlock" iconSrc="faInfo" showBorder={false} iconStyling="solid" dropdown={true} />
                        </div>
                    </div>
                    <div className="flex-header-block-row">
                        <FaIcon src="faIcons" styling="thin"/>
                        <div className="flex-header-block-column settings-info-block">
                            <h5>Logo Icon</h5>
                            <p>Welcome message on the scheduling page. Display in the upper left corner</p>
                        </div>
                        <div className="settings-palette-colorPicker">
                            <Button id="coreColorPicker" iconSrc="faBrush" iconStyling="solid" dropdown={true} dropdownCallback={(key, data) => {
                                _dispatchSpace({ logoColor: data?.hexColor || schedulePageProps.state.space.logoColor });
                            }}/>
                            <div className="color-tile" style={{ backgroundColor: schedulePageProps.state.space.logoColor, margin: "0"}}></div>
                            <Button id="coreInfoBlock" iconSrc="faInfo" showBorder={false} iconStyling="solid" dropdown={true} />
                        </div>
                    </div>
                </>
            } />

            <Panel title="Scheduling Page" info="Welcome message on the scheduling page. Display in the upper left corner" expanded={false} children={
                <>
                    <div className="flex-header-block-row">
                        <FaIcon src="faBlockBrick" styling="thin"/>
                        <div className="flex-header-block-column settings-info-block">
                            <h5>Background Color</h5>
                            <p>Welcome message on the scheduling page. Display in the upper left corner</p>
                        </div>
                        <div className="settings-palette-colorPicker">
                            <Button id="coreColorPicker" iconSrc="faBrush" iconStyling="solid" dropdown={true} dropdownCallback={(key, data) => {
                                _dispatchSpace({ pageBackgroundColor: data?.hexColor || schedulePageProps.state.space.pageBackgroundColor });
                            }}/>
                            <div className="color-tile" style={{ backgroundColor: schedulePageProps.state.space.pageBackgroundColor, margin: "0"}}></div>
                            <Button id="coreInfoBlock" iconSrc="faInfo" showBorder={false} iconStyling="solid" dropdown={true} />
                        </div>
                    </div>
                    <div className="flex-header-block-row">
                        <FaIcon src="faHeading" styling="thin"/>
                        <div className="flex-header-block-column settings-info-block">
                            <h5>Heading Text</h5>
                            <p>Welcome message on the scheduling page. Display in the upper left corner Display in the upper left corner Display in the upper left cornerDisplay in the upper left cornerDisplay in the upper left corner</p>
                        </div>
                        <div className="settings-palette-colorPicker">
                            <Button id="coreColorPicker" iconSrc="faBrush" iconStyling="solid" dropdown={true} />
                            <div className="color-tile" style={{ backgroundColor: schedulePageProps.state.space.pageHeadingTextColor, margin: "0"}}></div>
                            <Button iconSrc="faInfo" showBorder={false} iconStyling="solid" />
                        </div>
                    </div>
                    <div className="flex-header-block-row">
                        <FaIcon src="faMessageCaptions" styling="thin"/>
                        <div className="flex-header-block-column settings-info-block">
                            <h5>Welcome Message</h5>
                            <p>Welcome message on the scheduling page. Display in the upper left corner</p>
                        </div>
                        <div className="settings-palette-colorPicker">
                            <Button id="coreColorPicker" iconSrc="faBrush" iconStyling="solid" dropdown={true} />
                            <div className="color-tile" style={{ backgroundColor: schedulePageProps.state.space.pageWelcomeMessageColor, margin: "0"}}></div>
                            <Button iconSrc="faInfo" showBorder={false} iconStyling="solid" />
                        </div>
                    </div>
                    <div className="flex-header-block-row">
                        <FaIcon src="faCalendar" styling="thin"/>
                        <div className="flex-header-block-column settings-info-block">
                            <h5>Date Selection</h5>
                            <p>Welcome message on the scheduling page. Display in the upper left corner</p>
                        </div>
                        <div className="settings-palette-colorPicker">
                            <Button id="coreColorPicker" iconSrc="faBrush" iconStyling="solid" dropdown={true} />
                            <div className="color-tile" style={{ backgroundColor: schedulePageProps.state.space.pageDateSelectionColor, margin: "0"}}></div>
                            <Button iconSrc="faInfo" showBorder={false} iconStyling="solid" />
                        </div>
                    </div>
                    <div className="flex-header-block-row">
                        <FaIcon src="faClock" styling="thin"/>
                        <div className="flex-header-block-column settings-info-block">
                            <h5>Time Selection</h5>
                            <p>Welcome message on the scheduling page. Display in the upper left corner</p>
                        </div>
                        <div className="settings-palette-colorPicker">
                            <Button id="coreColorPicker" iconSrc="faBrush" iconStyling="solid" dropdown={true} />
                            <div className="color-tile" style={{ backgroundColor: schedulePageProps.state.space.pageTimeSelectionColor, margin: "0"}}></div>
                            <Button iconSrc="faInfo" showBorder={false} iconStyling="solid" />
                        </div>
                    </div>
                </>
            } />





        </div>
    );

    return (
        <StyledSettings>
            <header className="flex-header-submenu-actions">
                <div className="flex-justify-between-left">
                    {state.content.activeSettingMenu === ModelSettingsSubActionsKeys.space && <h5>{t("content.schedulePages.settings.space")}</h5>}
                    {state.content.activeSettingMenu === ModelSettingsSubActionsKeys.branding && <h5>{t("content.schedulePages.settings.branding")}</h5>}
                    {state.content.activeSettingMenu === ModelSettingsSubActionsKeys.palette && <h5>{t("content.schedulePages.settings.palette")}</h5>}
                </div>
                <div className="flex-justify-between-right">
                    <Button text={t("buttons.cancel")} iconSrc="faXmark"/>
                    <Button text={t("buttons.save")} styling="tag" iconSrc="faSave" iconStyling="solid" />
                </div>
            </header>
            <div className="schedulePages-settings-content">
                {state.content.activeSettingMenu === ModelSettingsSubActionsKeys.space && _addContentSpace()}
                {state.content.activeSettingMenu === ModelSettingsSubActionsKeys.branding && _addContentBranding()}
                {state.content.activeSettingMenu === ModelSettingsSubActionsKeys.palette && _addContentPalette()}
            </div>
        </StyledSettings>
    )
}