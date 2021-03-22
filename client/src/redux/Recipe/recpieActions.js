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
