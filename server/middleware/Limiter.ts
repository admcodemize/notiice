import { Request, Response, NextFunction } from 'express';
import RateLimit from 'express-rate-limit';

import { logEvents } from './Logger';

export const signInLimiter = RateLimit({
    windowMs: 60 * 1000, // 1 Minute
    max: 5, // Limit each IP to 5 signin requests per window per minute
    message: {
        message: "To many signin attempts. Please try again in 1 minute",
        handler: async (req: Request, res: Response, next: NextFunction, options: any) => {
            await logEvents(`To many requests: ${options.message.message}\t${req.method}\t${req.url}\t${req.headers.origin}`, "reqErrorLog.log");
            res.status(options.statusCode).send(options.message);
        }
    },
    standardHeaders: true, // Return rate limit info in the "RateLimit-*" headers
    legacyHeaders: false // Disable the "RateLimit-*" headers
});

export const sendMailLimiter = RateLimit({
    windowMs: 60 * 1000, // 1 Minute
    max: 3, // Limit each IP to 3 mail sent requests per window per minute
    message: {
        message: "To many mail attempts. Please try again in 1 minute",
        handler: async (req: Request, res: Response, next: NextFunction, options: any) => {
            await logEvents(`To many mail sent: ${options.message.message}\t${req.method}\t${req.url}\t${req.headers.origin}`, "reqErrorLog.log");
            res.status(options.statusCode).send(options.message);
        }
    },
    standardHeaders: true, // Return rate limit info in the "RateLimit-*" headers
    legacyHeaders: false // Disable the "RateLimit-*" headers
});