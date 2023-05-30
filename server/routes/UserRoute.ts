import { Router } from "express";

import { create,  read, update, remove, exists } from "../controllers/User";

import { isSignedIn } from "../middleware/Auth";

const userRouter = Router();

userRouter.route("/")
    .get(isSignedIn, read)
    .post(create)
    .patch(isSignedIn, update)
    .delete(isSignedIn, remove);

userRouter.route("/exists")
    .get(exists)

export default  userRouter;