import { NextFunction } from 'express';
import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcryptjs';

export const userSchema: Schema = new mongoose.Schema({
    username: {
        type: mongoose.Schema.Types.String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: mongoose.Schema.Types.String,
        required: true
    },
    roles: [{
        type: mongoose.Schema.Types.Number,
        default: 4010
    }],
    isActive: {
        type: mongoose.Schema.Types.Boolean,
        default: true
    },
    refreshToken: {
        type: mongoose.Schema.Types.String,
    },
    lastSignIn: {
        type: mongoose.Schema.Types.Date
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
}