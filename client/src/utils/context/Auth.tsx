import React, { createContext, useState  } from "react"

import { IAuthContextProps } from "../../assets/types/utils/context/Auth";

export const initGlobalContext = {};

export const AuthContext = createContext<IAuthContextProps>(initGlobalContext);

export const AuthProvider = ({ children }: any): JSX.Element => {
    const [ auth, setAuth ] = useState(initGlobalContext);

    /** @ts-ignore */
    const [ persist, setPersist ] = useState<boolean>(JSON.parse(localStorage.getItem("persist")) || false);

    return (
        <AuthContext.Provider value={{ auth, setAuth, persist, setPersist }}>
            {children}
        </AuthContext.Provider>
    )
};