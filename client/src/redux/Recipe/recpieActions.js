import * as types from './recipeTypes';
import * as api from '../api';

export const fetchRecipes = (query) => async (dispatch) => {
    dispatch({ type: types.FETCH_RECIPES_REQUEST });
    try {
        const data = await api.fetchRecipesAPI(query);
        dispatch({ type: types.FETCH_RECIPES_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: types.FETCH_RECIPES_ERROR, payload: error });
    }    
}

export const addToMyRecipes = (query) => (dispatch) => {
    dispatch({ type: types.FETCH_RECIPES_REQUEST });
}