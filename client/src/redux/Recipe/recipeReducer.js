import * as types from './recipeTypes';

const initState = {
    loading: false,
    recipes: [],
    errorMsg: ''
};

export const recipeReducer = (state = initState, action) => {
    switch (action.type) {
        case types.FETCH_RECIPES_REQUEST:
            return { loading: true, recipes: [], errorMsg: '' };
        case types.FETCH_RECIPES_SUCCESS:
            return { loading: false, recipes: action.payload, errorMsg: '' };
        case types.FETCH_RECIPES_ERROR:
            return { loading: false, recipes: [], errorMsg: action.payload };
        default:
            return state;
    }
}