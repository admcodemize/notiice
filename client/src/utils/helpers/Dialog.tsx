import { IDialogContentProps } from "../../assets/types/components/core/Dialog";

import { Edit as EventTypeEdit } from "../../components/dialog/core/eventTypes/Edit";

export const getDialogElemByButtonId = (props: IDialogContentProps): JSX.Element|undefined => ({
    eventTypeEdit: <EventTypeEdit {...props}/>,
})[props.id];