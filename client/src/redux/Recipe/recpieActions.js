import * as types from './recipeTypes';
import * as api from '../api';

export const fetchGeneralRecipes = (query) => async (dispatch) => {
    dispatch({ type: types.FETCH_RECIPES_REQUEST });
    try {
        const data = await api.fetchGeneralRecipesAPI(query);
        dispatch({ type: types.FETCH_RECIPES_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: types.FETCH_RECIPES_ERROR, payload: error });
    }    
}

export const fetchUserRecipes = () => async (dispatch) => {
    dispatch({ type: types.FETCH_RECIPES_REQUEST });
    try {
        console.log('Dispatching by ID!');
        const data = await api.fetchUserRecipesAPI();
        dispatch({ type: types.FETCH_RECIPES_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: types.FETCH_RECIPES_ERROR, payload: error });
    }    
}

export const addUserRecipe = (userId,recipe) => async (dispatch) => {
    //dispatch({ type: types.FETCH_RECIPES_REQUEST });
    try {
        const data = await api.addRecipeAPI(userId, recipe);
        dispatch({ type: types.FETCH_RECIPES_SUCCESS, payload: data });
    } catch (error) {
        //dispatch({ type: types.FETCH_RECIPES_ERROR, payload: error });
    }    
}
