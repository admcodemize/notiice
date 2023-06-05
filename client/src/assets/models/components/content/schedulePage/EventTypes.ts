import { IEventTypeProps } from "../../../../types/components/core/EventType";

export const ModelEventTypesMock = [<IEventTypeProps>{
    id: "id-...",
    iconSrc: "faCalendarLines",
    iconBgColor: "#2c3e50",
    title: "Event Type 1",
    eventType: 0,
    eventTypeText: "One-on-One",
    tags: [{
        text: "English",
        isPayable: false
    }, {
        text: "$25",
        isPayable: true
    }],
    location: 0,
    locationText: "Teams-Besprechung",
    dateTime: new Date(),
    href: "/mstoeckli/eventtype1",
    hrefText: "/mstoeckli/eventtype1",
    isActive: true
}];