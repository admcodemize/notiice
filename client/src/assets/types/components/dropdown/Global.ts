export interface IDropdownProps {
    id: string,
    callback?: (key: string, isOpen?: boolean, data?: Object) => void
}