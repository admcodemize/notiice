import React, { createContext, useState  } from "react"

import { ILoaderContextProps } from "../../assets/types/utils/hooks/useLoader";

export const initLoaderContext = {
    loader: true,
    setLoader: () => null
};

export const LoaderContext = createContext<ILoaderContextProps>(initLoaderContext);

export const LoaderProvider = ({ children }: any): JSX.Element => {
    const [ loader, _setLoader ] = useState<boolean>(false);

    /** @desc Update loader state with reverse value */
    const setLoader = (): void => _setLoader((prevState) => !prevState);

    return (
        <LoaderContext.Provider value={{ loader, setLoader }}>
            {children}
        </LoaderContext.Provider>
    )
};