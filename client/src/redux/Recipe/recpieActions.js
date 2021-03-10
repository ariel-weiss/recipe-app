import { FETCH_RECIPES } from "./recipeTypes";

export const fetchRecipes = (request) => async (dispatch) => {
    const response = await fetch(request);
    const data = await response.json();
    console.log(data.hits);
    dispatch({ type: FETCH_RECIPES, payload: data.hits });
}