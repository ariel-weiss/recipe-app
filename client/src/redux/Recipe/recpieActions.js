import { FETCH_RECIPES } from "./recipeTypes";

export const fetchRecipes = (query) => async (dispatch) => {
    const request = `http://localhost:5000/recipes/${query}`;
    const response = await fetch(request);
    const data = await response.json();
    dispatch({ type: FETCH_RECIPES, payload: data });
}