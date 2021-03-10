import * as types from './recipeTypes';

export const fetchRecipes = (query) => async (dispatch) => {
    dispatch({ type: types.FETCH_RECIPES_REQUEST });
    const request = `http://localhost:5000/recipes/${query}`;
    try {
        const response = await fetch(request);
        const data = await response.json();
        dispatch({ type: types.FETCH_RECIPES_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: types.FETCH_RECIPES_ERROR, payload: error });
    }
    
}