export type TEnvironment = {
    jsonWebToken: TEnvironmentJsonWebToken,
    database: string,
    cors: TEnvironmentCors,
    sendMail: TSendMail,
    stripeKey: TStripeKey
}

export type TEnvironmentJsonWebToken = {
    accessKey: string,
    refreshKey: string
    aud: string
}

export type TEnvironmentCors = {
    origin: () => void,
    credentials: boolean,
    methods: string[],
    optionSuccessStatus: number
}

export type TSendMail = {
    password: string
}

export type TStripeKey = {
    published: string,
    secret: string
}