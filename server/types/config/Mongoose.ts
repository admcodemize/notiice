import { Model } from 'mongoose';

export interface IMongooseConnections {
    users: null|Model<any>
}