import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { articleApi } from '../api'


export const store = configureStore({
  reducer: {
    [articleApi.reducerPath]: articleApi.reducer
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(articleApi.middleware),
})

setupListeners(store.dispatch)