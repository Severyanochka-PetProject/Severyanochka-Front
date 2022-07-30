import { createSlice, PayloadAction  } from "@reduxjs/toolkit";
import { User } from "../../domain/User.domain";
// import { IUser } from "../../models/user-model";
import { userInitialState} from "../types/user";

const initialState: userInitialState = {
    refresh_token: '',
    user: {
        id_user: 0,
        first_name: '',
        last_name: '',
        phone_number: '',
        avatar_url: '',
        vk_user_id: null
    },
    isAuth: false,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
      SET_USER_DATA: (state, action: PayloadAction<User>) => {
        state.user = action.payload 
      },
      SET_REFRESH_TOKEN: (state, action: PayloadAction<string>) => {
        state.refresh_token = action.payload as string
      },
      SET_AUTH_FLAG: (state, action: PayloadAction<boolean>) => {
        state.isAuth = action.payload
      }
    },
  })

  export const { SET_USER_DATA, SET_REFRESH_TOKEN, SET_AUTH_FLAG } = userSlice.actions

  export default userSlice.reducer

// export const UserReducer = (state = defaultState, action: userAction): userInitialState => {
//     switch (action.type) {
//         case userActionTypes.SET_USER_DATA:
//             return {
//                 ...state,
//                 user: action.payload
//             }
//         case userActionTypes.SET_REFRESH_TOKEN:
//             return {
//                 ...state,
//                 refresh_token: action.payload
//             }
//         case userActionTypes.SET_AUTH_FLAG:
//             return {
//                 ...state,
//                 isAuth: action.payload
//             }
//         default:
//             return state
//     }
// }
