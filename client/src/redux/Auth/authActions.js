import { AUTH, LOGOUT } from './authTypes';

export const signIn = (formData, router) => async (dispatch) => {
  try {
    // const { data } = await api.signIn(formData);

    // dispatch({ type: AUTH, data });

    router.push('/');
  } catch (error) {
    console.log(error);
  }
};

export const signUp = (formData, router) => async (dispatch) => {
  try {
    // const { data } = await api.signUp(formData);

    // dispatch({ type: AUTH, data });

    router.push('/');
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