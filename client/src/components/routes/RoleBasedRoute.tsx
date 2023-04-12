import { useLocation, Navigate, Outlet } from "react-router-dom";

import { IRoleBasedRouteProps } from "../../assets/types/components/routes/RoleBasedRoute";

export const RoleBasedRoute = ({ allowedRoles }: IRoleBasedRouteProps): JSX.Element => {
    /** @desc Returns current location */
    const location = useLocation();

    return (
        <Outlet />
    )
}