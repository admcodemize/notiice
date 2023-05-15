import { Router } from "express";

import { create, read, update, remove } from '../controllers/File';

import { isSignedIn } from "../middleware/Auth";

const fileRouter = Router();

fileRouter.route("/")
    .post(create)

fileRouter.route("/:filename")
    .get(isSignedIn, read)
    .patch(isSignedIn, update)
    .delete(isSignedIn, remove);

fileRouter.route("/download/:filename")
    .get();

export default  fileRouter;