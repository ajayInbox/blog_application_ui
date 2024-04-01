import { ArticleResultTypeV2 } from "./article-type"

export type UserType = {
    userId: number,
    handleName: string,
    email: string,
    password: string,
    isEnabled: boolean,
    joinedAt: string,
    aboutYou: string,
    roles: RoleType[],
    articles: ArticleResultTypeV2[]
}

export type RoleType = {
    roleId: number,
    roleName: string
}