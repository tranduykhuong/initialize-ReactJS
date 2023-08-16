import { configureStore } from '@reduxjs/toolkit';
import photoReducer from './reducers/photoSlice';

const rootReducer = {
  photos: photoReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
