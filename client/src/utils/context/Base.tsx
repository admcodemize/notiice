import React, { createContext, useReducer } from "react"

import { IBaseContextProps } from "../../assets/types/utils/context/Base";

import { baseReducerInitState, baseReducer } from "../reducer/Base";

export const BaseContext = createContext<IBaseContextProps>({
    state: baseReducerInitState,
    dispatch: () => null
});

export const BaseProvider = ({ children }: any): JSX.Element => {
    const [ state, dispatch ] = useReducer(baseReducer, baseReducerInitState);
    return (
        <BaseContext.Provider value={{ state, dispatch }}>
            {children}
        </BaseContext.Provider>
    )
};