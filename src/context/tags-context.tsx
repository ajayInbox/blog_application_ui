import { createContext, useContext, useState, ReactNode} from "react"
import { ArticleTag } from "../types/article-type"

type TagContextProviderProps = {
    children: ReactNode
}