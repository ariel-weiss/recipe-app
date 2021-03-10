import { FETCH_RECIPES } from './recipeTypes';

const initState = {
    recipes: []
};

export const recipeReducer = (state = initState, action) => {
    switch (action.type) {
        case FETCH_RECIPES:
            return { recipes: action.payload };
        default:
            return state;
    }
}