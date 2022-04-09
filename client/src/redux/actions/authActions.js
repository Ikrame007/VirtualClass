import axios from "axios";

import {
  SIGN_IN_FAILURE,
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_UP_FAILURE,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_OUT_FAILURE,
  SIGN_OUT_REQUEST,
  SIGN_OUT_SUCCESS,
  SET_ROLE,

} from "./types";


//Sign up action creators
const signUpRequest = () => {
  return {
    type: SIGN_UP_REQUEST,
  };
};
const signUpSuccess = (user, token) => {
  return {
    type: SIGN_UP_SUCCESS,
    payload: {
      token,
      user
    },
  };
};
const signUpFailure = (error) => {
  return {
    type: SIGN_UP_FAILURE,
    payload: error,
  };
};

export const signUp = (user, navigate) => {
  return function (dispatch) {
    dispatch(signUpRequest());
    axios({
      method: "post",
      url: "http://localhost:9090/auth-service/api/register",
      data: user,
    })
      .then((response) => {
        const { token, user } = response.data;
        localStorage.setItem("USER-TOKEN", token);
        const role = localStorage.getItem("USER-ROLE");
        dispatch(signUpSuccess(token, user));
        if (role == 'professor') navigate('/professor/dashboard')
        else if (role == 'student') navigate('/student/courses')
      })
      .catch((error) => {
        console.log(error);
        dispatch(signUpFailure(error));
      });
  };
};

//Sign in action creators
const signInRequest = () => {
  return {
    type: SIGN_IN_REQUEST,
  };
};
const signInSuccess = (token, user) => {
  return {
    type: SIGN_IN_SUCCESS,
    payload: {
      token,
      user
    },
  };
};
const signInFailure = (error) => {
  return {
    type: SIGN_IN_FAILURE,
    payload: error,
  };
};

export const signIn = (payload, navigate) => {
  return function (dispatch) {
    dispatch(signInRequest);
    axios({
      method: "post",
      url: "http://localhost:9090/auth-service/api/login",
      data:
        payload

    })
      .then((response) => {
        const { token, user } = response.data;
        localStorage.setItem("USER-TOKEN", token);
        dispatch(signInSuccess(token, user));
        if (payload.choosenRole == 'professor') navigate('/professor/dashboard')
        /* if (payload.choosenRole == 'professor') window.location.assign('http://localhost:3000/dashboard'); */
        else if (payload.choosenRole == 'student') navigate('/student/courses')
      })
      .catch((error) => {
        dispatch(signInFailure(error));
       /*  navigate('/auth'); */
      });
  };
};

//sign out action creators
export const signOutRequest = function () {
  return {
    type: SIGN_OUT_REQUEST,
  };
};

export const signOutSuccess = function () {
  return {
    type: SIGN_OUT_SUCCESS,
  };
};

export const signOutFailure = function () {
  return {
    type: SIGN_OUT_FAILURE,
  };
};

export const signOut = function (history) {

};

export const setRole = (role) => {
  localStorage.setItem("USER-ROLE", role);
  return {
    type: SET_ROLE,
    payload: {
      role,
    },
  };

};