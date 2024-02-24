import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const articleApi = createApi({
  reducerPath: 'articleApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/api/v1/' }),
  endpoints: (builder) => ({

    getAllArticles: builder.query({
      query: () => "posts",
    }),

    addArticle: builder.mutation({
      query: (body) =>({
        url: `post/`,
        method: 'POST',
        body
      })
    }),
  }),
})

export const { useGetAllArticlesQuery } = articleApi