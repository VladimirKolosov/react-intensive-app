import { configureStore } from '@reduxjs/toolkit';
import postsReducer from '../../../entities/posts/model/slice/postsSlice';
import filterReducer from '../../../entities/filters/model/slice/filterSlice';
import { postsApi } from '../../../entities/posts/api/postsApi';
import { todosApi } from '../../../entities/todos/api/todosApi';
const store = configureStore({
  reducer: {
    posts: postsReducer,
    filter: filterReducer,
    [postsApi.reducerPath]: postsApi.reducer,
    [todosApi.reducerPath]: todosApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postsApi.middleware, todosApi.middleware),
});

export default store;
