import React, { FC } from "react";
import { useSelector } from "react-redux";
import { Navigate, Route, useLocation, useNavigate } from "react-router-dom";
import useModal from "../hooks/useModal";
import { RootState } from "../store/index.js";
import { SWITCH_AUTH_MODAL } from "../store/reducers/modalReducer";

export const PrivateRoute: FC<{ children: JSX.Element }> = ({ children }) => {
  const location = useLocation();
  const toggleModal = useModal();

  const isAuth = useSelector<RootState, boolean>((state) => state.user.isAuth);

  if (!isAuth) {
    toggleModal(SWITCH_AUTH_MODAL, true, true);

    return <Navigate state={{ from: location }} to="/" />;
  }

  return children;
};
