import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const todosApi = createApi({
  reducerPath: 'todosApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com',
  }),
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => '/todos?_limit=10',
      //   transformResponse: (response) => response.slice(0, 10),
    }),
  }),
});

export const { useGetTodosQuery } = todosApi;
