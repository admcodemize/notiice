import { Dispatch } from "react";
import { IBaseReducerState, TActionType } from "../reducer/Base";

export interface IBaseContextProps {
    state: IBaseReducerState,
    dispatch: Dispatch<TActionType>
}

