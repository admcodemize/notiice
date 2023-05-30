import { AxiosResponse } from "axios";

import { useAxiosPublic } from "../../../hooks/useAxiosPublic";
import { TSignInForm } from "../../../../assets/types/utils/reducer/SignIn";

export const signin = (data: TSignInForm): Promise<AxiosResponse> => {
    /** @desc Destruct public axios call functions without bearer token */
    const { publicPost } = useAxiosPublic();

    return publicPost({
        routerPath: "/auth/signin",
        data: data
    });
}