import express, { Express, Request, Response } from "express";
import createLocaleMiddleware from "express-locale";

import cors from "cors";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import compression from "compression";
import helmet from "helmet";
import mongoose from "mongoose";

import { databaseConnect } from "./config/Mongoose";
import { getPort, getCors } from "./config/Environment";

import { logRequests } from "./middleware/Logger";
import { errHandler } from "./middleware/Error";

import { initialize, strategies } from "./services/Passport";

import authRouter from "./routes/AuthRoute";
import userRouter from "./routes/UserRoute";
import fileRouter from "./routes/FileRoute";

dotenv.config();

const api: Express = express();

/** @desc Determine local identifier of the incoming request */
api.use(createLocaleMiddleware({
    "priority": ["accept-language", "default"],
    "default": "en-EN"
}));

/** @desc Implement request logger as a middleware */
api.use(logRequests);

/** @desc Parse Cookie header and populate req.cookies with an object keyed by the cookie names. */
api.use(cookieParser());

/** @desc Set appropriate HTTP headers that help protect from well-known web vulnerabilities */
api.use(helmet());

/** @desc Code compression */
api.use(compression());

/** @desc Framework for creating the routing of the application */
api.use(express.json());
api.use(express.urlencoded({ extended: true }));

/** @desc Enables to send post requests */
api.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
api.use(bodyParser.json({ limit: "30mb" }));

/** @desc Cross-Origin resources sharing is a system, consisting of transmitting http headers */
api.use(cors(getCors()));

/** @desc Initialize passport authentication strategies */
api.use(initialize());
strategies();

api.get("/api", (req: Request, res: Response) => res.send("API is running"));
api.use("/api/auth", authRouter);
api.use("/api/user", userRouter);
api.use("/api/file", fileRouter);

/** @desc Overwrite default express  error handling */
api.use(errHandler);

databaseConnect();
mongoose.connection.on("error", () => console.log("Error! Have a look at 'mongoErrorLog.log'"));
mongoose.connection.once("open", () => {
    api.listen(getPort(), () => console.log(`Server is running at port ${getPort()}`))
});
