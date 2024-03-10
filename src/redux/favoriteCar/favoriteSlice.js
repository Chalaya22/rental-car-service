import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favorites: [],
};

const favoriteSlice = createSlice({
  name: 'favorites',
  initialState: initialState,
  reducers: {
    addToFavorite: (state, action) => {
      state.favorites.push(action.payload);
    },
    removeFromFavorite: (state, action) => {
      const indexToRemove = state.favorites.findIndex(
        car => car.id === action.payload.id
      );
      if (indexToRemove !== -1) {
        state.favorites.splice(indexToRemove, 1);
      }
    },
  },
});

export const { removeFromFavorite, addToFavorite } = favoriteSlice.actions;

export const favoriteReducer = favoriteSlice.reducer;
