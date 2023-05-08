import { ErrorRequestHandler, Request, Response, NextFunction } from "express";
import { logEvents } from './Logger';

export const errHandler: ErrorRequestHandler = async (err: any, req: Request, res: Response, next: NextFunction): Promise<any> => {
    await logEvents(`${err.name}: ${err.message}\t${req.method}\t${req.url}\t${req.headers.origin}`, "reqErrorLog.log");
    res.status(res.statusCode || 500).json({
        message: err.message
    });
}