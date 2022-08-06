import { configureStore } from '@reduxjs/toolkit'

import ModalReducer from "./reducers/modalReducer";
import UserReducer from "./reducers/userReducer";
import CategoryReducer from "./reducers/categoryReducer";

const store = configureStore({
    reducer: {
        modals: ModalReducer,
        user: UserReducer,
        categories: CategoryReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
