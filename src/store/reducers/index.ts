import {combineReducers} from "redux";

import {ModalReducer} from "./modalReducer";
import {UserReducer} from "./userReducer";
import {CategoryReducer} from "./categoryReducer";

export const rootReducer = combineReducers({
    modal: ModalReducer,
    user: UserReducer,
    category: CategoryReducer
})


export type RootState = ReturnType<typeof rootReducer>
