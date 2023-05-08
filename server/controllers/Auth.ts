import { Request, Response, NextFunction } from 'express';
import passport from "passport";
import jwt from 'jsonwebtoken';

import { getJsonWebToken, getStripeKey } from '../config/Environment';

import { stripe } from '../config/Stripe'

import { IUserSchema } from '../types/models/Users';

export const signUp = (req: Request, res: Response, next: NextFunction) => {
    // try {
    //     connectionModels.school.verifications.findOne({
    //         mail: req.body.mail.toLowerCase(),
    //         mailCode: req.body.code
    //     })
    //         .then(async (verification: IVerificationSchema) => {
    //             if (!verification) return res.status(404).json({
    //                 message: "Ungültiger Verifikations-Code"
    //             });
    //
    //             /** @desc Create a stripe customer to handle subscription */
    //             const customer: any = await _createStripeCustomer(`${req.body.key} - ${req.body.name}`, req.body.mail.toLowerCase());
    //             if (!customer.id) res.status(404).json({
    //                 message: "Erstellung Benutzer für die Abonnementen-Registrierung aufgrund technischen Problemen abgebrochen. Bitte kontaktieren Sie den Support."
    //             }); else _createSchool(req, res, next, customer);
    //         }).catch(next);
    // } catch { res.status(500) }
};

export const signIn = (req: Request, res: Response, next: NextFunction) => {
    // passport.authenticate("local", { session: false }, (err, user, message) => {
    //     if (err) return next(err);
    //     if (user && !message) {
    //         try {
    //             connectionModels.school.schools.findOne({ key: req.body.key }).populate({
    //                 path: "users",
    //                 match: { _id: user._id }
    //             })
    //                 .then((school: ISchoolsSchema) => {
    //                     if (school && school?.users && Object.keys(school.users).length > 0) {
    //                         const accessToken: string = jwt.sign(_accessToken(school, user), getJsonWebToken().accessKey);
    //                         const refreshToken: string = jwt.sign(_refreshToken(user), getJsonWebToken().refreshKey);
    //
    //                         /** @desc Set token id as a browser cookie */
    //                         res.cookie("refreshToken", refreshToken, {
    //                             httpOnly: true, // Accessible only by web server
    //                             secure: true, // https://
    //                             sameSite: false, // Cross-site cookie
    //                             maxAge: 1 * 24 * 60  * 60 * 1000 // Expiring cookie (1 days)
    //                         });
    //
    //                         user.refreshToken = refreshToken;
    //                         user.lastSignIn = Date.now();
    //                         connectionModels.school.users.findOneAndUpdate({ _id: user._id }, user)
    //                             .then(() => res.status(200).json({ accessToken }))
    //                             .catch(next);
    //                     } else res.status(400).json({
    //                         id: "username",
    //                         message: `Benutzer konnte innerhalb der Organisation/Schule "${school.key} - ${school.name}" nicht gefunden werden.`
    //                     });
    //                 }).catch(() => res.status(400).json({
    //                     id: "key",
    //                     message: "Identifikations-Schlüssel konnte in der Datenbank nicht ermittelt werden"
    //             }));
    //         } catch { res.status(500) }
    //     } else res.status(400).json({
    //         id: message.message,
    //         message: message.message === "password" ? "Fehlerhafte Benutzer-Authentifizierung." : "Benutzer konnte in der Datenbank nicht ermittelt werden."
    //     });
    // })(req, res, next);
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
    // if (!req.cookies?.refreshToken) return res.status(401).json({
    //     message: "Fehlerhafte Benutzer-Authentifizierung"
    // });
    //
    // jwt.verify(req.cookies.refreshToken, getJsonWebToken().refreshKey, (err: any, decoded: any) => {
    //     if (err) return res.status(403).json({
    //         message: "Zugriff verboten"
    //     });
    //
    //     try {
    //         connectionModels.school.users.findById(decoded.sub).select("-password -refreshToken")
    //             .then((user: IUserSchema) => {
    //                 // connectionModels.school.schools.find({
    //                 //     users: { $in: [decoded.sub]}
    //                 // })
    //                 //     .then((school: ISchoolsSchema[]) => {
    //                 //         if (school && user) {
    //                 //             const accessToken = jwt.sign(_accessToken(school[0], user), getJsonWebToken().accessKey);
    //                 //
    //                 //             /** @desc Successfully refreshed access token */
    //                 //             res.status(200).json({ accessToken });
    //                 //         } else res.status(401).json({
    //                 //             message: "Fehlerhafte Benutzer-Authentifizierung"
    //                 //         });
    //                 //     }).catch(next)
    //             }).catch(next);
    //     } catch { res.status(500) }
    // });
}

const _createStripeCustomer = async (name: string, mail: string) => stripe.customers.create({
    name,
    email: mail
}, { apiKey: getStripeKey().secret });

const _accessToken = (user: IUserSchema) => ({
    iss: "meetngo-access",
    aud: getJsonWebToken().aud,
    sub: {
        userId: user._id,
        username: user.username,
        stripeCustomerId: "",
        roles: user?.roles || []
    },
    iat: Date.now(),
    exp: Math.floor(Date.now() / 1000) + 60 // Expiring in 60 seconds
});

const _refreshToken = (user: { _id: string }) => ({
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