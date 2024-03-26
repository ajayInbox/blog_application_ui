export type UserType = {
    userId: number,
    handleName: string,
    email: string,
    password: string,
    isEnabled: boolean,
    joinedAt: string,
    roles: RoleType[],
    articles: []
}

export type RoleType = {
    roleId: number,
    roleName: string
}