import { TFontAwesomeIconStyle } from "../../components/core/FontAwesomeIcon";

export interface IListItemProps {
    activeItem?: string,
    key: string,
    iconSrc?: string,
    iconStyling?: TFontAwesomeIconStyle
    text: string,
    className?: string
    onClick: (key: string, isOpen?: boolean, data?: Object) => void
}

export interface IListItemPropsWithState {
    activeItem?: string,
    key: string,
    iconSrc: string,
    iconStyling?: TFontAwesomeIconStyle
    text: string,
    className?: string,
    checkState?: boolean
    onClick: (key: string, isOpen?: boolean, data?: Object) => void
}

export interface IListItemWithNoteProps {
    activeItem?: string,
    key: string,
    iconSrc: string,
    iconStyling?: TFontAwesomeIconStyle
    text: string,
    note: string,
    className?: string
    onClick: (key: string, isOpen?: boolean, data?: Object) => void
}