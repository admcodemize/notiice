import mongoose, { ConnectOptions } from 'mongoose';

import { getDatabase } from './Environment';

import { logEvents } from "../middleware/Logger";

mongoose.Promise = global.Promise;

const options: ConnectOptions = {
    autoIndex: false, // Don't build indexes
    maxPoolSize: 10, // Maintain up to 10 socket connections
    serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4 // Use IPv4, skip trying IPv6
};

export const databaseConnect = (): void => {
    mongoose.set("strictQuery", false);
    mongoose.connect(getDatabase(), options)
        .catch(async (err) => await logEvents(`${err.errno}: ${err.code}\t${err.syscall}\t${err.hostname}`, "mongoErrorLog.log"));
}