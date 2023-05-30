import { IMessageIconByType } from "../../assets/types/components/core/Message";

export const getIconByType = (): IMessageIconByType => ({
    information: "faMessageCaptions",
    success: "faCheckDouble",
    warning: "faSirenOn",
    error: "faBug"
});