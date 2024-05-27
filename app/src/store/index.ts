import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import quetionReduser from './slices/QuetionSlice'
import newsReduser from './slices/NewsSlice'

const store = configureStore({
  reducer: {
    auth: authReducer,
    quetions: quetionReduser,
    news: newsReduser
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;



