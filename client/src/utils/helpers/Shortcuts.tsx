export const getShortcutByKey = (key: string) => ({
    eventType: "⌘ + E",
    template: "⇧ ⌘ + T",
    event: "⇧ ⌘ + E",
    survey: "⇧ ⌘ + S",
    team: "⌘ + T",
    workSchedule: "⌘ + W",
    primaryUser: "⇧ ⌘ + P",
    search: "⇧ + S"
})[key]