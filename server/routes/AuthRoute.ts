import { Router } from 'express';

import { signInLimiter } from '../middleware/Limiter';

import { signUp, signIn, signOut, refresh } from '../controllers/Auth';

const authRouter = Router();

authRouter.post("/signup", signUp);
authRouter.post("/signin", signInLimiter, signIn);
authRouter.post("/signout", signOut);
authRouter.get("/refresh", refresh);

export default authRouter;