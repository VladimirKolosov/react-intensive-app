import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const postsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com',
  }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => '/posts?_limit=10',
      //   transformResponse: (response) => response.slice(0, 10),
    }),
    getPostById: builder.query({
      query: (id) => `/posts/${id}`,
      providesTags: (result, error, id) => [{ type: 'Posts', id }],
    }),
    // getPostById1: builder.query({
    //   query: (id) => `/posts/${id}`,
    //   providesTags: (result, error, id) => [{ type: 'Posts', id }],
    // }),
  }),
});

export const { useGetPostsQuery, useGetPostByIdQuery } = postsApi;

console.log(postsApi);
