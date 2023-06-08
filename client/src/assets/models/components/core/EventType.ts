import { TEventTypeMenuItems, TEventTypeMenuKeys } from "../../../types/components/core/EventType";

export const ModelEventTypeMenuItems = [<TEventTypeMenuItems>{
    key: "general",
    iconSrc: "faSquareInfo",
    text: "General"
}, {
    key: "workSchedule",
    iconSrc: "faBusinessTime",
    text: "Work Schedule"
}, {
    key: "notes",
    iconSrc: "faNotes",
    text: "Notes"
}, {
    key: "payment",
    iconSrc: "faCreditCard",
    text: "Payment"
}, {
    key: "questions",
    iconSrc: "faMessagesQuestion",
    text: "Questions"
}, {
    key: "workflow",
    iconSrc: "faMicrochip",
    text: "Workflow"
}, {
    key: "confirmation",
    iconSrc: "faMemo",
    text: "Confirmation Page"
}];

export const ModelEventTypeMenuKeys: TEventTypeMenuKeys = {
    general: "general",
    notes: "notes",
    payment: "payment",
    questions: "questions",
    workflow: "workflow",
    confirmation: "confirmation"
}