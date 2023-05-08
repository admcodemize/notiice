import { Request, Response, NextFunction } from 'express';
import { format } from 'date-fns';
import { v4 as uuid } from 'uuid';
import fs from 'fs';
import fsPromies from 'fs/promises';
import path from 'path';

export const logRequests = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    await logEvents(`${req.method}\t${req.url}\t${req.headers.origin}`, `reqLog.log`);
    next();
};

export const logEvents = async (message: string, logFileName: string): Promise<void> => {
    const dateTime = `${format(new Date(), "yyyyMMdd\tHH:mm:ss")}`;
    const logItem = `${dateTime}\t${uuid()}\t${message}\n`;

    try {
        /** @desc Check if log folder exists */
        if (!fs.existsSync(path.join(__dirname, "..", "logs"))) {
            await fsPromies.mkdir(path.join(__dirname, "..", "logs"));
        } await fsPromies.appendFile(path.join(__dirname, "..", "logs", logFileName), logItem);
    } catch (err) {

    };
}