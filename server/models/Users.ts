import { NextFunction } from 'express';
import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcryptjs';

import { IUserSchema } from "../types/models/Users";

export const userSchema: Schema = new mongoose.Schema<IUserSchema>({
    email: {
        type: mongoose.Schema.Types.String,
        unique: true,
        lowercase: true
    },
    password: {
        type: mongoose.Schema.Types.String,
        required: true
    },
    firstname: {
        type: mongoose.Schema.Types.String,
        required: true
    },
    lastname: {
        type: mongoose.Schema.Types.String,
        required: true
    },
    profilePicture: {
        type: mongoose.Schema.Types.String
    },
    coverPicture: {
        type: mongoose.Schema.Types.String,
    },
    roles: [{
        type: mongoose.Schema.Types.Number,
        default: 1000
    }],
    isActive: {
        type: mongoose.Schema.Types.Boolean,
        default: true
    },
    refreshToken: {
        type: mongoose.Schema.Types.String,
    }
});

/** @ts-ignore */
userSchema.pre("save", function(next: NextFunction) {
    if (!this.isModified("password")) return next();
    bcrypt.hash(this.password, 10)
        .then((hashedPassword) => {
            this.password = hashedPassword;
            next();
        }, (err) => next(err));
});

userSchema.methods.comparePassword = function(password: string, next: NextFunction|any) {
    /** @desc Compare passwords while signing in */
    bcrypt.compare(password, this.password, (err, isMatch: boolean) => {
        if (err) next(err);
        else next(null, isMatch);
    });
};

export const userModel = mongoose.model<IUserSchema>("Users", userSchema);