import { createContext, useContext, useState, ReactNode} from "react"
import { ArticleTagV2 } from "../types/article-type"

type TagContextProviderProps = {
    children: ReactNode
}

const initialTag:ArticleTagV2 = {
    tagId: 0,
    tagLabel: "",
}

type TagResultContextType = {
    tagContent: ArticleTagV2,
    setTagContent: React.Dispatch<React.SetStateAction<ArticleTagV2>>,
    userId: number,
    setUserId: React.Dispatch<React.SetStateAction<number>>,
}

const TagResultContext = createContext< TagResultContextType | null>(null)

export default function TagResultContextProvider({children}: TagContextProviderProps){

    const[tagContent, setTagContent] = useState<ArticleTagV2>(initialTag)
    const[userId, setUserId] = useState<number>(0)

    return(
        <TagResultContext.Provider value={{tagContent, setTagContent, userId, setUserId}}>
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