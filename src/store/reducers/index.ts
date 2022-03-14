import {combineReducers} from "redux";

import {ModalReducer} from "./modalReducer";
import {userReducer} from "./userReducer";

export const rootReducer = combineReducers({
    modal: ModalReducer,
    user: userReducer
})


export type RootState = ReturnType<typeof rootReducer>
