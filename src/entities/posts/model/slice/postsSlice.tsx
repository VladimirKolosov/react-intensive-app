import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
// import { postsApi } from '../../api/postsApi';

const postsAdapter = createEntityAdapter();

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

// console.log(postsAdapter);
// console.log(postsSlice);

export const { addPost } = postsSlice.actions;

export const selectPosts = postsAdapter.getSelectors((state) => state.posts);

export default postsSlice.reducer;
