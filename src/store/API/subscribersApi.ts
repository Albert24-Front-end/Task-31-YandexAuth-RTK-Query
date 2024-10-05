import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { IGetSubscribersResponse, ISubscriber } from "./types";
import { jsonPlaceholderUrl } from "../../utils/constants";

export const subscribersApi = createApi({
  reducerPath: "subscribersApi",
  baseQuery: fetchBaseQuery({ baseUrl: jsonPlaceholderUrl }),
  endpoints: (builder) => ({
    getSubscribers: builder.query<IGetSubscribersResponse, null>({
      query: () => "/users",
    }),
    getSubscriberById: builder.query<ISubscriber, null>({
      query: (subscriber_id) => `/users/${subscriber_id}`,
    }),
  }),
});

export const {
  useGetSubscribersQuery,
  useGetSubscriberByIdQuery,
  useLazyGetSubscriberByIdQuery,
  useLazyGetSubscribersQuery,
} = subscribersApi;
