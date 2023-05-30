import React, { createContext, useReducer  } from "react"
import { messageReducerInitialState, messageReducer } from "../reducer/Message";

import { IMessageContextProps, IMessageReducerState } from "../../assets/types/components/core/Message";

export const initMessageContext = messageReducerInitialState;

export const MessageContext = createContext<IMessageContextProps>({
    state: initMessageContext,
    dispatch: () => null,
    setMessageDialog: () => null,
    setMessageToast: () => null
});

export const MessageProvider = ({ children }: any): JSX.Element => {
    /** @desc Load reducer state which handles the display of an alert object */
    const [ state, dispatch ] = useReducer(messageReducer, initMessageContext);

    /** @desc Used in pages and components for displaying alert dialog */
    const setMessageDialog = (payload: IMessageReducerState ): void => dispatch({
        type: "dialog",
        payload
    });

    const setMessageToast = (payload: IMessageReducerState): void => dispatch({
        type: "toast",
        payload
    })

    return (
        <MessageContext.Provider value={{ state, dispatch, setMessageDialog, setMessageToast }}>
            {children}
        </MessageContext.Provider>
    )
};