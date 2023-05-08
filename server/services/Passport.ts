import passport from "passport";

import { localStrategy } from "../strategies/Local";

export const initialize = () => passport.initialize();

export const strategies = () => passport.use(localStrategy());