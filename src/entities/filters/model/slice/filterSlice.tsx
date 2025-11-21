import { createSlice } from '@reduxjs/toolkit';

interface FilterState {
  titleLength: string;
}

const initialState: FilterState = {
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

export const selectTitleLengthFilter = (state: { filter: FilterState }) =>
  state.filter.titleLength;

export default filterSlice.reducer;
