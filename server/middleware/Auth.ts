import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

import { getJsonWebToken } from "../config/Environment";

export const isSignedIn = (req: Request, res: Response, next: NextFunction) => {
    try {
        if (req?.headers?.authorization) {
            if (!req.headers.authorization.startsWith("Bearer ")) return res.status(401).json({
                message: "Keine Berechtigung"
            });

            let accessTocken = req.headers.authorization.split(" ")[1];
            jwt.verify(accessTocken, getJsonWebToken().accessKey, (err, decoded) => {
                if (!err) {
                    if (decoded) {
                        /** @ts-ignore */
                        req.decoded = decoded;
                        next();
                    }
                } else res.status(401).json({
                    message: err.message
                });
            });
        } else res.status(401).json({
            message: "Keine Berechtigung"
        });
    } catch (err: any) {
        res.status(401).json({
            message: err.message
        });
    }
}