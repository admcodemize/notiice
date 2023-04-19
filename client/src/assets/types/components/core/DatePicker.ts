export interface IDatePickerProps {
    id?: string,
    month?: number,
    year?: number,
    startDate?: Date|null,
    endDate?: Date|null,
    iso8601?: boolean
}