import React, { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import AuthService from "../../../services/authService";

import "./headerProfileBlock.scss";
import useModal from "../../../hooks/useModal";
import { modalActionTypes } from "../../../store/types/modals";
import { RootState } from "../../../store/index.js";
import { SET_AUTH_FLAG } from "../../../store/reducers/userSlice";
import { userInitialState } from "../../../store/types/user";
import { SWITCH_AUTH_MODAL } from "../../../store/reducers/modalSlice";

const HeaderProfileBlock : FC = () => {
  const user = useSelector<RootState, userInitialState>((state) => state.user);
  
  const dispatch = useDispatch();

  const [isOpenDropMenu, toggleDropMenu] = useState(false);

  const toggleModal = useModal();

  const exit = async () => {
    const { data } = await AuthService.logout();

    if (data.status) {
        dispatch(SET_AUTH_FLAG(false))
    } else {
        console.log('Не удалось выйти из личного кабинета')
    }
}
  
  return (
    <>
      {user.isAuth ? (
        <div
          className={`header-wrapper__profile ${
            isOpenDropMenu ? "header-wrapper__profile_shadow" : ""
          }`}
          onClick={() => toggleDropMenu(!isOpenDropMenu)}
        >
          <div className="profile-avatar">
            <img
              src={
                user.user.avatar_url
                  ? user.user.avatar_url
                  : "/images/header/avatar.png"
              }
              alt="аватарка"
            />
          </div>
          <div className="profile-username">
            <p>{user.user.first_name}</p>
          </div>
          <div
            className={`profile-arrow ${
              isOpenDropMenu ? "profile-arrow_rotate" : ""
            }`}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.64645 8.64645C5.84171 8.45118 6.15829 8.45118 6.35355 8.64645L12 14.2929L17.6464 8.64645C17.8417 8.45118 18.1583 8.45118 18.3536 8.64645C18.5488 8.84171 18.5488 9.15829 18.3536 9.35355L12.3536 15.3536C12.1583 15.5488 11.8417 15.5488 11.6464 15.3536L5.64645 9.35355C5.45118 9.15829 5.45118 8.84171 5.64645 8.64645Z"
                fill="#414141"
              />
            </svg>
          </div>

          <div
            className={`profile-drop-list ${
              isOpenDropMenu ? "profile-drop-list_open" : ""
            }`}
          >
            <ul>
              <li>Профиль</li>
              <li onClick={exit}>Выйти</li>
            </ul>
          </div>
        </div>
      ) : (
        <div
          className="header-wrapper__signIn"
          onClick={() =>
            toggleModal(SWITCH_AUTH_MODAL, true, true )
          }
        >
          <button>
            <span>Войти</span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.5 2C13.5 1.72386 13.7239 1.5 14 1.5H19C20.3807 1.5 21.5 2.61929 21.5 4V20C21.5 21.3807 20.3807 22.5 19 22.5H14C13.7239 22.5 13.5 22.2761 13.5 22C13.5 21.7239 13.7239 21.5 14 21.5H19C19.8284 21.5 20.5 20.8284 20.5 20V4C20.5 3.17157 19.8284 2.5 19 2.5H14C13.7239 2.5 13.5 2.27614 13.5 2Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.6464 7.64645C10.8417 7.45118 11.1583 7.45118 11.3536 7.64645L15.3536 11.6464C15.5488 11.8417 15.5488 12.1583 15.3536 12.3536L11.3536 16.3536C11.1583 16.5488 10.8417 16.5488 10.6464 16.3536C10.4512 16.1583 10.4512 15.8417 10.6464 15.6464L14.2929 12L10.6464 8.35355C10.4512 8.15829 10.4512 7.84171 10.6464 7.64645Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.5 12C2.5 11.7239 2.72386 11.5 3 11.5H15C15.2761 11.5 15.5 11.7239 15.5 12C15.5 12.2761 15.2761 12.5 15 12.5H3C2.72386 12.5 2.5 12.2761 2.5 12Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      )}
    </>
  );
}

export default HeaderProfileBlock;