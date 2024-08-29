import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type {
  ICreatePostPayload,
  ICreatePostResponse,
  IDeletePostResponse,
  IGetAllPostsResponse,
  IGetPostbyIdResponse,
  IUpdatePostPayload,
  IUpdatePostResponse,
} from "./types";
import { baseUrl } from "../../utils/constants";

export const postAPI = createApi({
  reducerPath: "postAPI",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    getPostbyId: builder.query<IGetPostbyIdResponse, string>({
      query: (post_id) => `/post?post_id=${post_id}`,
    }),
    getAllPosts: builder.query<IGetAllPostsResponse, null>({
      query: () => `/post`,
    }),
    createPost: builder.mutation<ICreatePostResponse, ICreatePostPayload>({
      query: (post_data) => ({
        url: "/post",
        method: "POST",
        body: post_data,
      }),
    }),
    updatePost: builder.mutation<IUpdatePostResponse, IUpdatePostPayload>({
      query: (updated_data) => ({
        url: "/post",
        method: "PUT",
        body: updated_data,
      }),
    }),
    deletePost: builder.mutation<IDeletePostResponse, string>({
      query: (post_id) => ({
        url: `/post?post_id=${post_id}`,
        method: "DELETE",
      }),
    }),
  }),
});
export const {
  useGetAllPostsQuery,
  useGetPostbyIdQuery,
  useCreatePostMutation,
  useDeletePostMutation,
  useUpdatePostMutation,
  useLazyGetAllPostsQuery,
  useLazyGetPostbyIdQuery,
} = postAPI;
