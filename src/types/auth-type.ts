export type RegisterReq = {
    handleName: string,
    email: string,
    password: string
}

export type AuthenticationReq = {
    email: string,
    password: string
}