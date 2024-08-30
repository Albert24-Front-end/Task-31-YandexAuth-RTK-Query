import { configureStore } from '@reduxjs/toolkit'
import { authAPI } from './API/authAPI'
import { postAPI } from './API/postApi'
import { yandexApi } from "./API/yandexApi";

export const store = configureStore({
  reducer: {
    [authAPI.reducerPath]: authAPI.reducer,
    [postAPI.reducerPath]: postAPI.reducer,
    [yandexApi.reducerPath]: yandexApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([authAPI.middleware, postAPI.middleware, yandexApi.middleware]),
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch