import mongoose, {Connection, Error, ConnectOptions, mongo} from 'mongoose';

import { IMongooseConnections } from "../types/config/Mongoose";

import { userSchema } from '../models';

import { getDatabase } from './Environment';

import { logEvents } from "../middleware/Logger";

import { IUserSchema } from "../types/models/Users";

mongoose.Promise = global.Promise;

const options: ConnectOptions = {
    autoIndex: false, // Don't build indexes
    maxPoolSize: 10, // Maintain up to 10 socket connections
    serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4 // Use IPv4, skip trying IPv6
};

export const databaseConnections = <IMongooseConnections>{
    users: null
}

export const databaseConnect = async (): Promise<void> => {
    mongoose.connect(getDatabase(), options)
        .then(() => {
            databaseConnections.users = mongoose.model<IUserSchema>("users", userSchema);
        }, async (err) => await logEvents(`${err.errno}: ${err.code}\t${err.syscall}\t${err.hostname}`, "mongoErrorLog.log"))
}