import { Strategy as GoogleStrategy } from "passport-google-oauth20"
import { userModel } from "../models";

// export const googleStrategy = (): GoogleStrategy => new GoogleStrategy( {
//     clientID: "",
//     clientSecret: "",
//     callbackURL: "http://localhost:5173/*",
//     passReqToCallback: true
// }, (req, accessToken, refreshToken, profile, done) => {
//     console.log(req, accessToken, refreshToken, profile);
// });