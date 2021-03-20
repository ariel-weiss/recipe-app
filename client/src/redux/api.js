import axios from 'axios';

// const API = axios.create({ baseURL: 'https://memories-backend.zeet.app' });

// API.interceptors.request.use((req) => {
//   if (localStorage.getItem('profile')) {
//     req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
//   }

//   return req;
// });

export const fetchRecipesAPI = (query) => {
    const request_url = `http://localhost:5000/recipes/${query}`;
    const data = axios.get(request_url)
        .then((res) => {
            //console.log(res.data);
            return res.data;
        })
        .catch((error) => {
            console.log(error);
            return null;
        });
    return data;
};
//export const addToMyRecipes = (recipe) => API.post('/posts', newPost);

// export const signInAPI = (formData) => API.post('/user/signin', formData);
// export const signUpAPI = (formData) => API.post('/user/signup', formData);