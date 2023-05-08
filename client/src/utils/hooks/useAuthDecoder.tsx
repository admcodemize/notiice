import jwtDecode from "jwt-decode";

import { useAuthContext } from './useAuthContext';

import { IRouteJWT } from "../../assets/types/components/routes/PrivateBasedRoute";

export const useAuthDecoder = () => {
    /** @desc Destructuring auth context -> ../context.Auth.tsx */
    const { auth } = useAuthContext();

    /** @desc Decode JWT access token inside auth context */
    const authDecoded = (): IRouteJWT|undefined => auth?.accessToken
        ? jwtDecode<IRouteJWT>(auth.accessToken)
        : undefined

    return authDecoded;
};