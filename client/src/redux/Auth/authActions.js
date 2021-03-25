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

export const googleSignIn = (googleData, history) => async (dispatch) => {
  
  try {
    const { data } = await api.googleSignInAPI({
      name: googleData.result.name, email: googleData.result.email, token: googleData.token
    });
    dispatch({ type: AUTH, data: { ...data, imageUrl: googleData.result.imageUrl } });
    history.push('/');
  } catch (error) {
    console.log(error);
  }
}

export const logOut = () => {
  return {
    type: LOGOUT
  };
}