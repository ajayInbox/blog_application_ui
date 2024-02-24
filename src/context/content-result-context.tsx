import { createContext, useContext, useState, ReactNode} from "react"
import { ArticleResultType } from "../types"

type ContentResultContextProviderProps = {
    children: ReactNode
}

const initialWholeContentDB: ArticleResultType = {
    articleId:0,
    articleBannerUrl: "",
    articleTitle: "",
    articleContent: "",
    articleTags: ""
}

type ContentResultContextType = {
    wholeContentDB: ArticleResultType,
    setWholeContentDB: React.Dispatch<React.SetStateAction<ArticleResultType>>,
}
 
const ContentResultContext = createContext<ContentResultContextType | null>(null)

export default function ContentResultContextProvider({children}: ContentResultContextProviderProps){

    const[wholeContentDB, setWholeContentDB] = useState<ArticleResultType>(initialWholeContentDB)

    return(
        <ContentResultContext.Provider value={{wholeContentDB, setWholeContentDB }}>
            {children}
        </ContentResultContext.Provider>
    )

}

export function useContentResultContext(){
    const context = useContext(ContentResultContext)
    if(context===null){
        throw new Error("useActiveSectionContext should be used within ActiveSectionContextProvider")
  }
  return context
}