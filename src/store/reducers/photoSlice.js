import { createSlice } from '@reduxjs/toolkit';

const photo = createSlice({
  name: 'photos',
  initialState: [],
  reducers: {
    addPhoto: (state, action) => {
      state.push(action.payload);
    },
    // removePhoto: (state, action) => state = state.filter((photo) => photo.id != action.payload),
    updatePhoto: (state, action) => {
      const newPhoto = action.payload;
      const photoIdx = state.findIndex((photo) => photo.id === newPhoto.id);

      if (photoIdx >= 0) {
        state[photoIdx] = newPhoto;
      }
    },
  },
});

const { reducer, actions } = photo;
export const { addPhoto, removePhoto, updatePhoto } = actions;
export default reducer;
