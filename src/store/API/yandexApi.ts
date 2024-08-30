import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CLIENT_SECRET, YANDEX_CLIENT_ID } from "../../utils/constants";

export const yandexApi = createApi({
  reducerPath: 'yandexApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://oauth.yandex.ru/' }),
  endpoints: (builder) => ({
    getToken: builder.mutation<any, { code: string }>({
      query: ({ code }) => ({
        url: 'token',
        method: 'POST',
        body: new URLSearchParams({
          grant_type: 'authorization_code',
          client_id: YANDEX_CLIENT_ID,
          client_secret: CLIENT_SECRET,
          code,
        }).toString(),
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }),
    }),
  }),
});

export const { useGetTokenMutation } = yandexApi;
