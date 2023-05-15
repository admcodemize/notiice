import { useAxiosPublic } from "../../../../utils/hooks/useAxiosPublic";

export const isValidInput = (id: string, routerPath: string, params: {}) => {
    /** @desc Destruct public axios call functions without bearer token */
    const { publicGet } = useAxiosPublic();
    return new Promise((resolve, reject): Promise<any> => publicGet({
        routerPath: routerPath,
        params: params
    })
        .then((res: any) => resolve({ id, res }))
        .catch((err) => reject({ id, ...err })));
}

export const isAlreadyUsed = (id: string, email: string): Promise<any> => isValidInput(id, "/user", {
    queryId: id,
    queryValue: email
});

export const postImages = (id: string, routerPath: string, file: string): Promise<any> => {
    /** @desc Destruct public axios call functions without bearer token */
    const { publicPost } = useAxiosPublic();
    return new Promise((resolve, reject): Promise<any> => publicPost({
        routerPath: routerPath,
        data: { file }
    })
        .then((res: any) => resolve({ id, res }))
        .catch((err) => reject({ id, ...err })))
}