import { TCallback, TSpaceMenuItems } from "../../../types/components/content/SchedulePages";

export const ModelSpaceMenuItems = [<TSpaceMenuItems>{
    key: "types",
    iconSrc: "faToolbox",
    text: "content.schedulePages.menuItems.types",
    showSliderLeft: false
}, {
    key: "events",
    iconSrc: "faCalendarLines",
    text: "content.schedulePages.menuItems.events",
    showSliderLeft: true
}, {
    key: "calendar",
    iconSrc: "faCalendar",
    text: "content.schedulePages.menuItems.calendar",
    showSliderLeft: true
}, {
    key: "schedule",
    iconSrc: "faBusinessTime",
    text: "content.schedulePages.menuItems.schedule",
    showSliderLeft: false
}, {
    key: "settings",
    iconSrc: "faCog",
    text: "content.schedulePages.menuItems.settings",
    showSliderLeft: false
}];

export const ModelCallbacks: TCallback = {
    schedulePageSpaceProvide: false,
    eventTypeProvide: false
}