import { Request, Response, NextFunction } from "express";
import { userModel } from "../models";

export const create = (req: Request, res: Response, next: NextFunction) => {
    try {
        userModel.findOne({ email: req.body.email }).select("-password -roles -refreshToken")
            .then((user): void => {
                if (!user) userModel.create(req.body)
                    .then((): Response => res.status(201))
                    .catch(next);
                else {
                    // message to existing user about changing password because someone wanted to sign in with same address...
                    res.status(204).json({})
                }
            })
            .catch(next);
    } catch { res.status(500) }
};

export const read = (req: Request, res: Response, next: NextFunction) => {
    const queryId: any = req.query.queryId;
    try {
        req.body?.id
            ? userModel.findById(req.body.id).select("-password -roles -refreshToken")
            : queryId ? userModel.findOne({ [queryId]: req.query.queryValue }).select("-password -roles -refreshToken")
                .then((user): void => {
                    if (!user) res.status(404).json({ message: "user not found" });
                    else res.status(200).json({ user });
                })
                .catch(next) : res.status(500).json({ message: "missing filter criteria" })
    } catch { res.status(500) }
}

export const update = (req: Request, res: Response, next: NextFunction) => {

}

export const remove = (req: Request, res: Response, next: NextFunction) => {

}

export const exists = (req: Request, res: Response, next: NextFunction) => {
    const queryId: any = req.query.queryId;
    try {
        userModel.findOne({ [queryId]: req.query.queryValue }).select("-password -roles -refreshToken")
            .then((user): void => {
                if (!user) res.status(404).json({ message: "user not found" });
                else res.status(200).json({ message: "user found" });
            })
            .catch(next);
    } catch { res.status(500) }
}