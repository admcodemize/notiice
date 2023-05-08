export interface IUserSchema {
    _id?: string,
    username: string,
    password: string,
    roles: string,
    isActive: boolean,
    refreshToken: string
}