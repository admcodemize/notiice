export interface IUserSchema {
    _id?: string,
    email: string,
    password: string,
    firstname: string,
    lastname: string,
    profilePicture: string,
    coverPicture: string,
    roles: string,
    isActive: boolean,
    refreshToken: string
}