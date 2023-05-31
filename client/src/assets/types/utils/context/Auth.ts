import { Dispatch, SetStateAction } from "react";

export interface IAuthContextProps {
    auth?: any|null,
    setAuth?: Dispatch<SetStateAction<{}>>,
    persist?: boolean,
    setPersist?: (state: boolean) => void
}