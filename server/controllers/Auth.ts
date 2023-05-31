import { Request, Response, NextFunction } from "express";
import passport from "passport";
import jwt from "jsonwebtoken";
import { userModel } from "../models";

import { getJsonWebToken, getStripeKey } from "../config/Environment";

import { stripe } from "../config/Stripe"

import { IUserSchema } from "../types/models/Users";

export const signUp = async (req: Request, res: Response, next: NextFunction) => {
    /** @desc Create a stripe customer to handle subscription */
    const customer: any = await _createStripeCustomer(`${req.body.firstname} ${req.body.lastname}`, req.body.email.toLowerCase());
    if (!customer.id) res.status(404).json({
        message: "create stripe user due to technical errors not possible."
    }); else res.status(200).json({ message: "signup completed "});
};

export const signIn = (req: Request, res: Response, next: NextFunction) => {
    passport.authenticate("local", { session: false }, (err: any, user: IUserSchema, options: any) => {
        if (err) return next(err);
        if (user && !options) {
            const accessToken: string = jwt.sign(_accessToken(user), getJsonWebToken().accessKey);
            const refreshToken: string = jwt.sign(_refreshToken(user), getJsonWebToken().refreshKey);

            /** @desc Set token id as a browser cookie */
            res.cookie("refreshToken", refreshToken, {
                httpOnly: true, // Accessible only by web server
                secure: true, // https://
                sameSite: false, // Cross-site cookie
                maxAge: 24 * 60  * 60 * 1000 // Expiring cookie (1 days)
            });

            user.refreshToken = refreshToken;
            user.lastSignIn = Date.now();
            userModel.findOneAndUpdate({ _id: user._id }, user)
                .then(() => res.status(200).json({ accessToken }))
                .catch(next);
        } else res.status(400).json({ message: options?.message || "Incorrect authentication" });
    })(req, res, next);
}

/** @desc Clear cookie if exists */
export const signOut = (req: Request, res: Response, next: NextFunction) => {
    // if (!req.cookies?.refreshToken) return res.status(204).json({
    //     message: "Fehlerhafte Benutzer-Authentifizierung"
    // });
    //
    // try {
    //     connectionModels.school.users.findOne({ refreshToken: req.cookies.refreshToken })
    //         .then((user: IUserSchema) => {
    //             user.refreshToken = String();
    //             connectionModels.school.users.findOneAndUpdate({ _id: user._id }, user)
    //                 .then(() => {
    //                     _clearCookie(res);
    //                     res.status(204).json({
    //                         message: "Erfolgreiche Löschung Cookie"
    //                     });
    //                 })
    //                 .catch(next)
    //         })
    //         .catch(() => {
    //             _clearCookie(res);
    //             res.status(204).json({
    //                 message: "Erfolgreiche Löschung Cooke"
    //             });
    //         });
    // } catch { res.status(500) }
}

/** @desc Used when access token has expired */
export const refresh = (req: Request, res: Response, next: NextFunction) => {
    if (!req.cookies?.refreshToken) return res.status(401).json({
        message: "Incorrect user authentication"
    });

    jwt.verify(req.cookies.refreshToken, getJsonWebToken().refreshKey, (err: any, decoded: any) => {
        if (err) return res.status(403).json({
            message: "Access forbidden"
        });

        try {
            userModel.findById(decoded.sub).select("-password -refreshToken")
                .then((user: IUserSchema|any): void => {
                    const accessToken = jwt.sign(_accessToken(user), getJsonWebToken().accessKey);

                    /** @desc Successfully refreshed access token */
                    res.status(200).json({ accessToken });
                }).catch(next);
        } catch { res.status(500) }
    });
}

const _createStripeCustomer = async (name: string, email: string) => stripe.customers.create({
    name,
    email: email
}, { apiKey: getStripeKey().secret });

const _accessToken = (user: IUserSchema) => ({
    iss: "meetngo-access",
    aud: getJsonWebToken().aud,
    sub: {
        userId: user._id,
        email: user.email,
        firstname: user.firstname,
        lastname: user.lastname,
        stripeCustomerId: "",
        roles: user?.roles || []
    },
    iat: Date.now(),
    exp: Math.floor(Date.now() / 1000) + 60 * 60 // Expiring in 60 seconds
});

const _refreshToken = (user: IUserSchema) => ({
    iss: "meetngo-refresh",
    aud: getJsonWebToken().aud,
    sub: user._id,
    iat: Date.now(),
    exp: Math.floor(Date.now() / 1000) + 60 * 60 // Expiring (1 day)
});

const _clearCookie = (res: Response): void => {
    res.clearCookie("refreshToken", {
        httpOnly: true, // Accessible only by web server
        secure: true, // https://
        sameSite: false, // Cross-site cookie
    });
};