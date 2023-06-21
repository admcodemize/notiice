import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

import { Loader } from "../core/Loader";

import { useRefreshToken } from "../../utils/hooks/useRefreshToken";
import { useAuthContext } from "../../utils/hooks/useContext";
import { useMessage } from "../../utils/hooks/useMessage";

export const PersistRoute = (): JSX.Element => {
    const [ isLoading, setIsLoading ] = useState(true);

    /** @desc Returns refresh token for authentication */
    const refreshToken = useRefreshToken();

    /** @desc Get function for displaying alert dialog */
    const { setMessageDialog } = useMessage();

    /** @desc Destructuring auth context -> ../context/Auth.tsx */
    const { auth, persist } = useAuthContext();

    useEffect(() => {
        const checkRefreshToken = async () => {
            try {
                await refreshToken();
            } catch (err: any) {
                setMessageDialog({
                    title: err.name,
                    info: err.message
                });
            } finally {
                /** @desc Prevent from endless loading, because finally is called allways! */
                setIsLoading(false);
            }
        };

        /** @desc Only check for refresh token when auth context is not available */
        !auth?.accessToken ? checkRefreshToken() : setIsLoading(false);
    }, []);

    /** @desc Outlet represents all the child components/routes inside the persist route -> Home.tsx */
    return (
        <>
            <Outlet />
            {/*{!persist*/}
            {/*    ? <Outlet />*/}
            {/*    : isLoading*/}
            {/*        ? <Loader />*/}
            {/*        : <Outlet />}*/}
        </>
    )
}