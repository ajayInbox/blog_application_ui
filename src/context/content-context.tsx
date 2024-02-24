import { createContext, useContext, useState, ReactNode} from "react"
import { ArticleType } from "../types"

type ContentContextProviderProps = {
    children: ReactNode
}

const initialWholeContent: ArticleType = {
    articleBannerUrl: "",
    articleTitle: "",
    articleContent: "",
    articleTags: ""
}


type ContentContextType = {
    wholeContent: ArticleType,
    setWholeContent: React.Dispatch<React.SetStateAction<ArticleType>>,
}
 
const ContentContext = createContext<ContentContextType | null>(null)

export default function ContentContextProvider({children}: ContentContextProviderProps){

    const[wholeContent, setWholeContent] = useState<ArticleType>(initialWholeContent)

    return(
        <ContentContext.Provider value={{wholeContent, setWholeContent }}>
            {children}
        </ContentContext.Provider>
    )

}

export function useContentContext(){
    const context = useContext(ContentContext)
    if(context===null){
        throw new Error("useActiveSectionContext should be used within ActiveSectionContextProvider")
  }
  return context
}