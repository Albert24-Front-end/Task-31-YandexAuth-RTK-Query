import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { IGetUserResponse, ILoginUserPayload, ILoginUserResponse, IRegisterUserResponse, IRegisterUserPayload } from './types'
import { baseUrl } from '../../utils/constants'

// Define a service using a base URL and expected endpoints
export const authAPI = createApi({
  reducerPath: 'authAPI',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    getUser: builder.query<IGetUserResponse, string>({  // название endpoint (окончания адреса сайта), в <> - типы получаемых и передаваемых данных
      query: (user_id) => `/user?user_id=${user_id}`, // ключ query, куда передаем ссылку (точнее endpoint фрагмент)
    }),

    loginUser: builder.mutation<ILoginUserResponse, ILoginUserPayload> ({ // payload - то, что отправляем в бэкэнд вместе с запросом или то, что сервер присылает нам в ответ на наш запрос
        query: (loginData) => ({
            url: "/login",
            method: "POST",
            body: loginData,
        }),
    }),

    RegisterUser: builder.mutation<IRegisterUserResponse, IRegisterUserPayload> ({ 
        query: (regData) => ({
            url: "/registration",
            method: "POST",
            body: regData,
        }),
    })
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
// если запрос GET - указываем метод query, если остальные - mutation
export const { useGetUserQuery, useLoginUserMutation, useRegisterUserMutation } = authAPI