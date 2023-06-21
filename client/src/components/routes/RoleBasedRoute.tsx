import React from "react";
import { useLocation, Navigate, Outlet } from 'react-router-dom';

import { IRoleBasedRouteProps } from "../../assets/types/components/routes/RoleBasedRoute";

import { useAuthDecoder } from '../../utils/hooks/useAuthDecoder';

export const RoleBasedRoute = ({ allowedRoles }: IRoleBasedRouteProps): JSX.Element => {
    /** @desc Returns current location */
    const location = useLocation();

    /** @desc Decode JWT access token */
    const authDecoded = useAuthDecoder();

    /** @desc <Outlet> represents each private component which is defined nested in private route */
    return (
        <Outlet />
        // /** @ts-ignore */
        // authDecoded()?.sub?.roles?.find((role: number) => allowedRoles?.includes(role))
        //     ? <Outlet />
        //     : <Navigate to="/unauthorized" state={{ from: location }} replace />
    )
};