import axios from "axios";
import { ArticleResultType, ArticleTag, ArticleType } from "./types/article-type"
import { AuthenticationReq, RegisterReq } from "./types/auth-type"

export function getAllArticles(): Promise<ArticleResultType[]>{
    return axios.get("http://localhost:8080/api/v1/posts-with-user")
    .then((res) => res.data)
}

export function addArticle(body: ArticleType){
    const api = axios.create({
        baseURL: "http://localhost:8080/api/v1",
    })
    api.interceptors.request.use(
        (config) => {
            const token = localStorage.getItem("token");
            if(token){
                config.headers.Authorization = `Bearer ${token}`
            }
            return config;
        }
    )
    return api.post("/post", body)
    .then((res) => console.log(res.data))
    .catch(err => console.log(err))

    // return axios.post("http://localhost:8080/api/v1/post", body, {
    //     headers: {
    //         "Authorization" : `Bearer ${token}`,
    //         "Accept": "application/json",
    //         "Content-Type": "application/json"
    //     }
    // })
    // .then((res) => console.log(res.data))
    // .catch(err => console.log(err))
}

export function getArticleById(id: number):Promise<ArticleResultType>{
    return axios.get(`http://localhost:8080/api/v1/post/${id}`)
    .then((res) => res.data)
}

export function registerApi(body: RegisterReq){
    return axios.post("http://localhost:8080/api/v1/auth/register", body)
    .then(res => res.data)
}

export function authApi(body:AuthenticationReq) {
    return axios.post("http://localhost:8080/api/v1/auth/authenticate", body)
    .then(res => res.data)
}

export function getArticleForLatest(id:number){
    return axios.get(`http://localhost:8080/api/v1/post/for-latest?articleId=${id}`)
    .then(res => res.data)
}

export function getAllTrandingTags(): Promise<ArticleTag[]>{
    return axios.get("http://localhost:8080/api/v1/tags/all")
    .then(res => res.data)
}