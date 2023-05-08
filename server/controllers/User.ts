import { Request, Response, NextFunction } from 'express';

import { IUserSchema } from "../types/models/Users";

export const create = (req: Request, res: Response, next: NextFunction) => {

}

export const read = (req: Request, res: Response, next: NextFunction) => {
    // try {
    //     const queryId: any = req.query.queryId;
    //     req.body?.id
    //         ? connectionModels.school.users.findById(req.body.id).select("-password -roles -refreshToken")
    //         : connectionModels.school.users.findOne({ [queryId]: req.query.queryValue }).select("-password -roles -refreshToken")
    //         .then((user: IUserSchema) => {
    //             if (user) {
    //                 /** @desc Find school by user id */
    //                 connectionModels.school.schools.find({
    //                     users: { $in: [user._id]}
    //                 })
    //                     .then((school: ISchoolsSchema[]) => {
    //                         if (school.length > 0) res.status(200).json({
    //                             schoolKey: school[0].key,
    //                             schoolName: school[0].name,
    //                             user
    //                         }); else res.status(400).json({ message: `Benutzer konnte in keiner Organisation/Schule "${school[0].key} - ${school[0].name}" gefunden werden.`});
    //                     }).catch(next)
    //             } else res.status(400).json({ message: "Benutzer konnte in der Datenbank nicht ermittelt werden." })
    //         }).catch(next);
    // } catch { res.status(500) }
}

export const update = (req: Request, res: Response, next: NextFunction) => {

}

export const remove = (req: Request, res: Response, next: NextFunction) => {

}