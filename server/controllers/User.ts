import { Request, Response, NextFunction } from 'express';
import { userModel } from "../models";

export const create = (req: Request, res: Response, next: NextFunction) => {

}

export const read = (req: Request, res: Response, next: NextFunction) => {
    try {
        const queryId: any = req.query.queryId;
        req.body?.id
            ? userModel.findById(req.body.id).select("-password -roles -refreshToken")
            : userModel.findOne({ [queryId]: req.query.queryValue }).select("-password -roles -refreshToken")
            .then((user): void => {
                console.log(user);
            });
    } catch { res.status(500) }
}

export const update = (req: Request, res: Response, next: NextFunction) => {

}

export const remove = (req: Request, res: Response, next: NextFunction) => {

}