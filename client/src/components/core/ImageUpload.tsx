import React from "react";
import { useTranslation } from "react-i18next";

import { StyledImageUpload } from "../../assets/styles/components/core/ImageUpload.styles";
import { IImageUploadProps } from "../../assets/types/components/core/ImageUpload";

import { FaIcon } from "./FontAwesomeIcon";

import { base64Converter, checkFileSizeMb, sizeConverter } from "../../utils/helpers/Files";
import { useMessage } from "../../utils/hooks/useMessage";

export const ImageUpload = ({ callback, containerHeight, containerWidth }: IImageUploadProps): JSX.Element => {
    /** @desc Returns the translation function for reading from the locales files */
    const { t } = useTranslation();

    /** @desc Get function for displaying alert dialog */
    const { setMessageDialog } = useMessage();

    const _onProfileImageClick = (evt: React.MouseEvent<HTMLFormElement>): void => {
        /** @ts-ignore */
        const inputUpload = evt.target.firstChild;
        if (inputUpload instanceof HTMLInputElement) {
            /** @desc Open file browser */
            inputUpload.click();
        }
    };

    const _onProfileImageChange = async (evt: React.ChangeEvent<HTMLInputElement>): Promise<void> => {
        if (evt?.target?.files) {
            if (checkFileSizeMb(evt.target.files[0].size || 0)) {
                callback(evt?.target?.files && await base64Converter(evt.target.files[0]));
            } else setMessageDialog({
                title: "413",
                info: `Uploaded profile picture "${evt.target.files[0].name}" with a size of "${sizeConverter(evt.target.files[0].size)}" to large`
            });
        }
    };

    return (
        <StyledImageUpload
            containerWidth={containerWidth || "100%"}
            containerHeight={containerHeight || "100%"}>
            <form action="#" method="POST" encType="multipart/form-data" onClick={_onProfileImageClick}>
                <div>
                    <input className="file-input" type="file" name="file" accept=".jpeg, .png, .jpg" onChange={(evt) => _onProfileImageChange(evt)} hidden />
                    <FaIcon src="faImagePolaroid" styling="thin" />
                    <span>{t("core.imageUpload")}</span>
                    <p>{t("core.imageTypes")}</p>
                </div>
                {/*<img src={state.form[id]} height="80px" width="80px" hidden={!state.form[id]} alt={id}/>*/}
            </form>
        </StyledImageUpload>
    )
}