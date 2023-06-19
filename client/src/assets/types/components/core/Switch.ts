export interface ISwitchProps {
    htmlFor: string,
    checked: boolean,
    setChecked: (htmlFor: string, checked: boolean) => void
}