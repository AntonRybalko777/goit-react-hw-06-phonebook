import { createSlice } from '@reduxjs/toolkit';

const FiltersSlice = createSlice({
  name: 'filtersList',
  initialState: { filter: '' },
  reducers: {
    changeFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const filtersListReducer = FiltersSlice.reducer;
export const { changeFilter } = FiltersSlice.actions;
