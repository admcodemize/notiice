export interface IRouteJWT {
    aud: string,
    exp: number,
    iat: number,
    iss: string,
    sub: {
        userId: string,
        username: string,
        roles: number[]
    }
}