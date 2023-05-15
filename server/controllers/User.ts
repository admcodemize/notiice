import { Request, Response, NextFunction } from 'express';
import { userModel } from "../models";

export const create = (req: Request, res: Response, next: NextFunction) => {

}

export const read = (req: Request, res: Response, next: NextFunction) => {
    try {
        const queryId: any = req.query.queryId;
        req.body?.id
            ? userModel.findById(req.body.id).select("-password -roles -refreshToken")
            : queryId ? userModel.findOne({ [queryId]: req.query.queryValue }).select("-password -roles -refreshToken")
            .then((user): void => {
                console.log(user);
                if (!user) res.status(404).json({ message: "user not found" });
                else res.status(200).json({ user });
            }) : res.status(500).json({ message: "missing filter criteria" })
    } catch { res.status(500) }
}

export const update = (req: Request, res: Response, next: NextFunction) => {

}

export const remove = (req: Request, res: Response, next: NextFunction) => {

}