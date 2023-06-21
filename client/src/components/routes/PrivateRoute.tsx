import React from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";

import { useAuthDecoder } from "../../utils/hooks/useAuthDecoder";

export const PrivateRoute = (): JSX.Element => {
    /** @desc Returns current location */
    const location = useLocation();

    /** @desc Decode JWT access token */
    const authDecoded = useAuthDecoder();

    /** @desc <Outlet> represents each private component which is defined nested in private route */
    return (
        <Outlet />
        // /** @ts-ignore */
        // authDecoded()?.sub?.userId
        //     ? <Outlet />
        //     : <Navigate to="/signin" state={{ from: location }} replace />
    )
};