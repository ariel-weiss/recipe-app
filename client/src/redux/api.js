import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/' });

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
        const token = JSON.parse(localStorage.getItem('profile')).token;
        req.headers.Authorization = `Bearer ${token}`;
  }

  return req;
});

export const fetchGeneralRecipesAPI = (query) => API.get(`/recipes/search/${query}`);
export const fetchUserRecipesAPI = () => API.get('/recipes/all');
export const addRecipeAPI = (recipe) => API.patch('/recipes/add',recipe);
export const removeRecipeAPI = (recipeId) => API.patch('/recipes/remove',recipeId);


export const signInAPI = (formData) => API.post('/users/signin', formData);
export const googleSignInAPI = (googleData) => API.post('/users/google/signin', googleData);
export const signUpAPI = (formData) => API.post('/users/signup', formData);