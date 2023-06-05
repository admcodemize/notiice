export interface IGlobalContextProps {
    sliderLeft: boolean,
    sliderRight: boolean,
    selectedItem?: string,
    toggleSliderLeft: (show?: boolean) => void,
    toggleSliderRight: (show?: boolean) => void,
    setSelectedItem?: (key: string) => void
}