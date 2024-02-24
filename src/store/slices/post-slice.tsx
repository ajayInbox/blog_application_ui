import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    articles:[]
}


export const articleSlice = createSlice({
    name: "articles",
    initialState,
    reducers: {
        addArticle: (state, action) =>{
            const newArticle = {
                
            }
        }
    }
})