import {combineReducers} from "redux";
import {ModalReducer} from "./modalReducer";

export const rootReducer = combineReducers({
    modal: ModalReducer
})


export type RootState = ReturnType<typeof rootReducer>
