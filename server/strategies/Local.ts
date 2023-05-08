import { Strategy } from "passport-local";

import { IUserSchema } from '../types/models/Users';

export const localStrategy = (): Strategy => new Strategy({}, async (username, password, done) => {
    // connectionModels.school.users.findOne({ username }, (err: Error, user: IUserSchema) => {
    //     /** @desc Calling callback "passport.authenticate" in controller Auth.ts */
    //     if (err) done(err, false, { message: err?.message || "Interner Server Error" });
    //     if (user) {
    //         /** @ts-ignore */
    //         user.comparePassword(password, (err: Error, isMatch: boolean) => {
    //             if (err) return done(err, false);
    //             if (isMatch) done(null, user);
    //             else done(null, false, { message: "password" })
    //         });
    //     } else done(null, false, { message: "username" });
    // });
});