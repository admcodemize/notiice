import passport from "passport";

import { localStrategy } from "../strategies/Local";
// import { googleStrategy } from "../strategies/Google";

export const initialize = () => passport.initialize();

export const strategies = () => {
    passport.use(localStrategy());
    // passport.use(googleStrategy());
}