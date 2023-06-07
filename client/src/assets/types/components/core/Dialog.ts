export interface IDialogProps {
    id: string,
    data?: any,
    callback?: (key: string, isOpen?: boolean, data?: Object) => void
}

export interface IDialogContentProps {
    id: string,
    data?: any,
    callback?: (key: string, isOpen?: boolean, data?: Object) => void
}