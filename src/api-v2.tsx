import axios from "axios";
import { ArticleType, ArticleResultType } from "./types";

export function getAllArticles(): Promise<ArticleResultType[]>{
    return axios.get("http://localhost:8080/api/v1/posts")
    .then((res) => res.data)
}

export function addArticle(body: ArticleType){
    return axios.post("http://localhost:8080/api/v1/post", body)
    .then((res) => res.data)
}

export function getArticleById(id: number){
    return axios.get(`http://localhost:8080/api/v1/post/${id}`)
    .then((res) => res.data)
}