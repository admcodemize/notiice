import { useAxiosPublic } from "../../../../utils/hooks/useAxiosPublic";

export const isValidInput = (id: string, routerPath: string, params: {}) => {
    /** @desc Destruct public axios call functions without bearer token */
    const { publicGet } = useAxiosPublic();

    return new Promise((resolve, reject) => publicGet({
        routerPath: routerPath,
        params: params
    })
        .then(() => resolve(id))
        .catch((err) => reject({ id, ...err })));
}

export const isValidEmail = (id: string, email: string): Promise<any> => isValidInput(id, "/user", {
    queryId: "email",
    queryValue: email
})