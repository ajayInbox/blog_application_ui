import { createContext, useContext, useState, ReactNode} from "react"
import { ArticleTagV2, ArticleType } from "../types/article-type"

type TagContextProviderProps = {
    children: ReactNode
}

const initialTag:ArticleTagV2 = {
    tagId: 0,
    tagLabel: "",
}

const initialWholeContent: ArticleType = {
    articleBannerUrl: "",
    articleTitle: "",
    articleContent: "",
    articleTags: ""
}

type TagResultContextType = {
    tagContent: ArticleTagV2,
    setTagContent: React.Dispatch<React.SetStateAction<ArticleTagV2>>,
    userId: number,
    setUserId: React.Dispatch<React.SetStateAction<number>>,
    wholeContent: ArticleType,
    setWholeContent: React.Dispatch<React.SetStateAction<ArticleType>>,
}

const TagResultContext = createContext< TagResultContextType | null>(null)

export default function TagResultContextProvider({children}: TagContextProviderProps){

    const[tagContent, setTagContent] = useState<ArticleTagV2>(initialTag)
    const[userId, setUserId] = useState<number>(0)
    const[wholeContent, setWholeContent] = useState<ArticleType>(initialWholeContent)

    return(
        <TagResultContext.Provider value={{tagContent, setTagContent, userId, setUserId,
            wholeContent, setWholeContent}}>
            {children}
        </TagResultContext.Provider>
    )

}

export function useTagResultContext(){

    const context = useContext(TagResultContext)
    if(context==null){
        throw new Error("tag context value is null")
    }
    return context
}