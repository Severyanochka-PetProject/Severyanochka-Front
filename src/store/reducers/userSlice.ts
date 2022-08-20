import { createSlice, PayloadAction  } from "@reduxjs/toolkit";
import { User } from "../../domain/User.domain";
import { userInitialState} from "../types/user";

const initialState: userInitialState = {
    refresh_token: '',
    user: {
        id_user: 0,
        first_name: '',
        last_name: '',
        phone_number: '',
        avatar_url: '',
        vk_user_id: null,
    },
    isAuth: false,
    errors: {
      status: false,
      message: ""
    }
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        SET_USER_DATA: (state, action: PayloadAction<User>) => {
            state.user = action.payload
        },
        SET_REFRESH_TOKEN: (state, action: PayloadAction<string>) => {
            state.refresh_token = action.payload
        },
        SET_AUTH_FLAG: (state, action: PayloadAction<boolean>) => {
            state.isAuth = action.payload
        }
    },
  })

  export const { SET_USER_DATA, SET_REFRESH_TOKEN, SET_AUTH_FLAG } = userSlice.actions;

  export default userSlice.reducer;
