import { configureStore } from '@reduxjs/toolkit'
import { authAPI } from './API/authAPI'
import { postAPI } from './API/postApi'

export const store = configureStore({
  reducer: {
    [authAPI.reducerPath]: authAPI.reducer,
    [postAPI.reducerPath]: postAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([authAPI.middleware, postAPI.middleware]),
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch