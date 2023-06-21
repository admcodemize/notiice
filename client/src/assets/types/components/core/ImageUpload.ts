export interface IImageUploadProps {
    containerWidth?: string,
    containerHeight?: string,
    callback: (file: string|ArrayBuffer|null) => void
}

export interface IStyledImageUploadProps {
    containerWidth: string,
    containerHeight: string,
}