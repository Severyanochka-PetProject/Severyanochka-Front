// import { createStore, compose } from 'redux';
// import {rootReducer} from "./reducers";

import { configureStore } from '@reduxjs/toolkit'

// declare global {
//     interface Window {
//         __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
//     }
// }

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// createStore(rootReducer, composeEnhancers());

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
