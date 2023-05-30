import jwtDecode from "jwt-decode";

import { useAuthContext } from "./useAuthContext";

import { IRouteJWT } from "../../assets/types/components/routes/PrivateBasedRoute";

export const useAuthDecoder = () => {
    /** @desc Destructuring auth context -> ../context.Auth.tsx */
    const { auth } = useAuthContext();

    debugger

    return (): IRouteJWT|undefined => auth?.accessToken
        ? jwtDecode<IRouteJWT>(auth.accessToken)
        : undefined;
};