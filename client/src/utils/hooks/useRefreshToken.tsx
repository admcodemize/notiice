import { useAuthContext } from "./useAuthContext";
import { useAxiosPublic } from "./useAxiosPublic";

export const useRefreshToken = () => {
    /** @desc Destructuring auth context -> ../context.Auth.tsx */
    const { setAuth } = useAuthContext();

    const { publicGet } = useAxiosPublic();
    return async () => {
        try {
            const res = await publicGet({
                routerPath: "/auth/refresh"
            });
            setAuth && setAuth(() => ({accessToken: res.data.accessToken}));
            return res.data.accessToken;
        } catch (err) {
            /** @todo: Output message */
            console.log(err);
        }
    };
};