import { TEventTypeMenuItems, TEventTypeMenuKeys } from "../../../types/components/core/EventType";

export const ModelEventTypeMenuItems = [<TEventTypeMenuItems>{
    key: "general",
    iconSrc: "faSquareInfo",
    text: "General",
    onlyProvideMode: false
}, {
    key: "notes",
    iconSrc: "faNotes",
    text: "Notes",
    onlyProvideMode: false
}, {
    key: "workSchedule",
    iconSrc: "faBusinessTime",
    text: "Work Schedule",
    onlyProvideMode: true
}, {
    key: "payment",
    iconSrc: "faCreditCard",
    text: "Payment",
    onlyProvideMode: false
}, {
    key: "questions",
    iconSrc: "faMessagesQuestion",
    text: "Questions",
    onlyProvideMode: true
}, {
    key: "workflow",
    iconSrc: "faMicrochip",
    text: "Workflow",
    onlyProvideMode: true
}, {
    key: "confirmation",
    iconSrc: "faMemo",
    text: "Confirmation Page",
    onlyProvideMode: true
}];

export const ModelEventTypeMenuKeys: TEventTypeMenuKeys = {
    general: "general",
    notes: "notes",
    payment: "payment",
    questions: "questions",
    workflow: "workflow",
    confirmation: "confirmation"
}