export interface IDialogProps {
    id: string,
    callback?: (key: string, isOpen?: boolean, data?: Object) => void
}

export interface IDialogContentProps {
    id: string,
    callback?: (key: string, isOpen?: boolean, data?: Object) => void
}