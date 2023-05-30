import { Types } from "mongoose";

export interface IUserSchema {
    _id?: Types.ObjectId,
    email: string,
    password: string,
    firstname: string,
    lastname: string,
    industry: string,
    profilePicture: Types.ObjectId,
    coverPicture: Types.ObjectId,
    roles: string,
    refreshToken: string,
    lastSignIn: number
}