import { Router } from 'express';

import { create,  read, update, remove } from '../controllers/User';

import { isSignedIn } from "../middleware/Auth";

const userRouter = Router();

userRouter.route("/")
    .get(read)
    .post(isSignedIn, create)
    .patch(isSignedIn, update)
    .delete(isSignedIn, remove);

export default  userRouter;