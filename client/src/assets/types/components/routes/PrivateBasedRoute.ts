export interface IRouteJWT {
    aud: string,
    exp: number,
    iat: number,
    iss: string,
    sub: {
        userId: string,
        email: string,
        firstname: string,
        lastname: string,
        stripeCustomerId: string,
        roles: number[]
    }
}