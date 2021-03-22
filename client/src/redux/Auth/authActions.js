import { AUTH, LOGOUT } from './authTypes';
import * as api from '../api';

export const signIn = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signInAPI(formData);
    dispatch({ type: AUTH, data });
    history.push('/');
  } catch (error) {
    console.log(error);
  }
};

export const signUp = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signUpAPI(formData);
    dispatch({ type: AUTH, data });
    history.push('/');
  } catch (error) {
    console.log(error);
  }
};

export const googleAuth = (data) => {
  return {
    type: AUTH, data: data
  };
}

export const logOut = () => {
  return {
    type: LOGOUT
  };
}