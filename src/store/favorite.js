import { createSlice } from '@reduxjs/toolkit';

const initialState = []; 

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      const exists = state.some(favorite => favorite.id === action.payload.id);
      if (!exists) {
        state.push(action.payload); 
      }
    },
    removeFavorite: (state, action) => {
      return state.filter(favorite => favorite.id !== action.payload.id);
    },
  },
});

export const favoriteActions = favoriteSlice.actions;

export default favoriteSlice.reducer;
