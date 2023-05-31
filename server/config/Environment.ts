import dotenv from "dotenv";
import { allowedOriginsDev, allowedOriginsProd } from "./Cors";

import { TEnvironment, TEnvironmentCors, TEnvironmentJsonWebToken } from "../types/config/Environment";

dotenv.config();

export const getJsonWebToken = (): TEnvironmentJsonWebToken => process.env.NODE_ENV ? prod.jsonWebToken : dev.jsonWebToken;

export const getDatabase = (): string => process.env.NODE_ENV ? prod.database : dev.database;

export const getPort = ():string|number => process.env.PORT || 8010;

export const getCors = (): TEnvironmentCors => process.env.NODE_ENV ? prod.cors : dev.cors;

export const getSendMail = () => process.env.NODE_ENV ? prod.sendMail : dev.sendMail;

export const getStripeKey = () => process.env.NODE_ENV ? prod.stripeKey : dev.stripeKey;

const prod = <TEnvironment>{
    jsonWebToken: <TEnvironmentJsonWebToken>{
        accessKey: process.env.JWT_PROD_ACCESS_KEY,
        refreshKey: process.env.JWT_PROD_REFRESH_KEY,
        aud: "http://localhost:5173"
    },
    database: "",
    cors: <TEnvironmentCors>{
        origin: (origin: string, callback: (err: any|null, allowedBoolean: boolean) => void): void => {
            /** @desc "!== -1" means only the origins in the array have access /"!origin" is used for access the third-party like for example postman */
            if (allowedOriginsProd.indexOf(origin) !== -1 || !origin) callback(null, true);
            else callback(new Error("Not allowed by cors policies"), false);
        },
        credentials: true,
        optionSuccessStatus: 200
    },
    sendMail: {
        password: process.env.SENDMAIL_PROD_PASSWORD
    },
    stripeKey: {
        published: process.env.STRIPE_PROD_PUBLISHED_KEY,
        secret: process.env.STRIPE_PROD_SECRET_KEY
    }
}

const dev = <TEnvironment>{
    jsonWebToken: <TEnvironmentJsonWebToken>{
        accessKey: process.env.JWT_DEV_ACCESS_KEY,
        refreshKey: process.env.JWT_DEV_REFRESH_KEY,
        aud: "http://localhost:5173"
    },
    database:  process.env.MONGODB_DEV_URI,
    cors: <TEnvironmentCors>{
        origin: (origin: string, callback: (err: any|null, allowedBoolean: boolean) => void): void => {
            /** @desc "!== -1" means only the origins in the array have access /"!origin" is used for access the third party like for example postman */
            if (allowedOriginsDev.indexOf(origin) !== -1 || !origin) callback(null, true);
            else callback(new Error("Not allowed by cors policies"), false);
        },
        credentials: true,
        optionSuccessStatus: 200
    },
    sendMail: {
        password: process.env.SENDMAIL_DEV_PASSWORD
    },
    stripeKey: {
        published: process.env.STRIPE_DEV_PUBLISHED_KEY,
        secret: process.env.STRIPE_DEV_SECRET_KEY
    }
}