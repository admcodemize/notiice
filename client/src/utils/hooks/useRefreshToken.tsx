import { useAuthContext } from './useAuthContext';

export const useRefreshToken = () => {
    /** @desc Destructuring auth context -> ../context.Auth.tsx */
    const { setAuth } = useAuthContext();

    //const { publicGet } = useAxiosPublic();

    const refreshToken = async () => {
        try {
            //const res = await publicGet({
            //    routerPath: "/auth/refresh"
            //});
            //setAuth && setAuth(() => ({ accessToken: res.data.accessToken }));
            setAuth && setAuth(() => ({ accessToken: "asdf" }));
            //return res.data.accessToken;
            return "asdf";
        } catch (err) {
            /** @todo: Output message */
            console.log(err);
        }
    }; return refreshToken;
};