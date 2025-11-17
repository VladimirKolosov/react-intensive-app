import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  titleLength: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setTitleLengthFilter: (state, action) => {
      return { ...state, titleLength: action.payload };
    },
    resetFilters: () => {
      return initialState;
    },
  },
});

export const { setTitleLengthFilter, resetFilters } = filterSlice.actions;

export const selectTitleLengthFilter = (state) => state.filter.titleLength;

export default filterSlice.reducer;
