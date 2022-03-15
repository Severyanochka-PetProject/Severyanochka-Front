import {combineReducers} from "redux";

import {ModalReducer} from "./modalReducer";
import {UserReducer} from "./userReducer";

export const rootReducer = combineReducers({
    modal: ModalReducer,
    user: UserReducer
})


export type RootState = ReturnType<typeof rootReducer>
