import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Post } from '../../../entities/posts/model/type/PostType';

export const postsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com',
  }),
  endpoints: (builder) => ({
    getPosts: builder.query<Post[], void>({
      query: () => '/posts?_limit=10',
      //   transformResponse: (response) => response.slice(0, 10),
    }),
    // getPostById: builder.query<Post[], number>({
    //   query: (id) => `/posts/${id}`,
    //   providesTags: (result, error, id) => [{ type: 'Posts', id }],
    // }),
  }),
});

export const { useGetPostsQuery } = postsApi;

console.log(postsApi);
