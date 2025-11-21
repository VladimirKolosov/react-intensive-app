import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import type { Post } from '../type/PostType';
// import { postsApi } from '../../api/postsApi';

const postsAdapter = createEntityAdapter<Post>();

export const postsSlice = createSlice({
  name: 'posts',
  initialState: postsAdapter.getInitialState(),
  reducers: {
    addPost: postsAdapter.addOne,
  },
  //   extraReducers: (builder) => {
  //     builder.addMatcher(
  //       postsApi.endpoints.getPosts.matchFulfilled,
  //       (state, action) => {
  //         postsAdapter.setAll(state, action.payload);
  //       }
  //     );
  //   },
});

export const { addPost } = postsSlice.actions;

export const selectPosts = postsAdapter.getSelectors((state) => state.posts);

export default postsSlice.reducer;
