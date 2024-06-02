import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import reviewsReduser from './slices/reviewsSlice'
import cartReduser from './slices/cartSlice'
import settingReduser from './slices/settingSlice'
import tableReduser from './slices/tableSlice'
import cateoriesReduser from './slices/categorySlice'
import productReduser from './slices/productSlice'
import windowReduser from './slices/windowSlice'

const store = configureStore({
  reducer: {
    auth: authReducer,
    reviews: reviewsReduser,
    cart: cartReduser,
    setting: settingReduser,
    table: tableReduser,
    categories: cateoriesReduser,
    product: productReduser,
    window: windowReduser
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;



