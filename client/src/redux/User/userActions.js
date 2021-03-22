import * as types from './userTypes';
import * as api from '../api';

export const fetchUserRecipes = () => async (dispatch) => {
    dispatch({ type: types.FETCH_USER_RECIPES_REQUEST });
    try {
        console.log('Dispatching by ID!');
        const data = await api.fetchUserRecipesAPI();
        if (data?.message) {
            throw (data);
        }
        dispatch({ type: types.FETCH_USER_RECIPES_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: types.FETCH_USER_RECIPES_ERROR, payload: error });
    }    
}

export const addUserRecipe = (recipe,history) => async (dispatch) => {
    dispatch({ type: types.ADD_RECIPE_REQUEST });
    try {
        console.log('Dispatching ADD RECIPE');
        const data = await api.addRecipeAPI(recipe);
        dispatch({ type: types.ADD_RECIPE_SUCCESS, payload: data });
        history.push('/recipes');
    } catch (error) {
        console.log(error);
        dispatch({ type: types.ADD_RECIPE_ERROR, payload: error });
    }    
}
