import { createSlice } from "@reduxjs/toolkit";

export const picturesSlice = createSlice({
  name: "pictures",
  initialState: {
    pictures: null,
  },
  reducers: {
    setPictureData: (state, action) => {
      state.pictures = action.payload;
    },
    addPicture: (state, action) => {
      // sur redux classique :
      // state.pictures = [...state.pictures, action.payload];
      // sur redux toolkit
      state.pictures.push(action.payload);
    },
    editPicture: (state, action) => {
      const id = action.payload[1];
      const newPicture = action.payload[0];
      const newState = state.pictures.filter((p) => p.id !== id);
      newState.push(newPicture);
      state.pictures = newState;
    },
    deletePicture: (state, action) => {
      const newState = state.pictures.filter((p) => p.id !== action.payload);
      state.pictures = newState;
    },
  },
});

// Action Creator via toolkit
export const { setPictureData, addPicture, editPicture, deletePicture } =
  picturesSlice.actions;

export default picturesSlice.reducer;
