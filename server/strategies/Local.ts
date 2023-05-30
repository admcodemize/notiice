import { Strategy } from "passport-local";
import { userModel } from "../models";
import { IUserSchema } from '../types/models/Users';

export const localStrategy = (): Strategy => new Strategy({ usernameField: "email" }, async (email, password, done) => {
    userModel.findOne({ email }, (err: Error, user: IUserSchema) => {
        /** @desc Calling callback "passport.authenticate" in controller Auth.ts */
        if (err) done(err, false, { message: err?.message || "Interner Server Error" });
        if (user) {
            /** @ts-ignore */
            user.comparePassword(password, (err: Error, isMatch: boolean) => {
                if (err) return done(err, false);
                if (isMatch) done(null, user);
                else done(null, false)
            });
        } else done(null, false);
    });
});