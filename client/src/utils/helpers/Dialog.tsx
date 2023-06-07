import { IDialogContentProps } from "../../assets/types/components/core/Dialog";

import { Provide as EventTypeProvide } from "../../components/dialog/core/eventTypes/Provide";

export const getDialogElemByButtonId = (props: IDialogContentProps): JSX.Element|undefined => ({
    eventTypeProvide: <EventTypeProvide {...props}/>,
})[props.id];