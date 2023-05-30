import { AxiosResponse } from "axios";

import { useAxiosPublic } from "../../../hooks/useAxiosPublic";
import { TUserForm } from "../../../../assets/types/components/base/User";

export const create = (data: TUserForm): Promise<AxiosResponse> => {
    /** @desc Destruct public axios call functions without bearer token */
    const { publicPost } = useAxiosPublic();
    return publicPost({
        routerPath: "/user",
        data: data
    });
};