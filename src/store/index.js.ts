import { configureStore } from '@reduxjs/toolkit'

import ModalReducer from "./reducers/modalSlice";
import UserReducer from "./reducers/userSlice";
import CategoryReducer from "./reducers/categorySlice";
import ProductReducer from "./reducers/productSlice";

const store = configureStore({
    reducer: {
        modals: ModalReducer,
        user: UserReducer,
        categories: CategoryReducer,
        products: ProductReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
