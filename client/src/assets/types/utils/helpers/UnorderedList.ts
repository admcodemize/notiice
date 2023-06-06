export interface IListItemProps {
    activeItem?: string,
    key: string,
    iconSrc: string,
    text: string,
    className?: string
    onClick: (key: string, isOpen?: boolean, data?: Object) => void
}