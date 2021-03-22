import * as types from './userTypes';

const initState = {
    loading: false,
    recipes: [],
    errorMsg: ''
};

export const userReducer = (state = initState, action) => {
    switch (action.type) {
        case types.FETCH_USER_RECIPES_REQUEST:
            return { loading: true, recipes: [], errorMsg: '' };
        case types.FETCH_USER_RECIPES_SUCCESS:
            return { loading: false, recipes: action.payload, errorMsg: '' };
        case types.FETCH_USER_RECIPES_ERROR:
            return { loading: false, recipes: [], errorMsg: action.payload };
        
        case types.ADD_RECIPE_REQUEST:
            return { ...state, loading: true, errorMsg: '' };
        case types.ADD_RECIPE_SUCCESS:
            return { ...state, loading: false, errorMsg: '' };
        case types.ADD_RECIPE_ERROR:
            return { ...state, loading: false, errorMsg: action.payload };
        
        case types.REMOVE_RECIPE_REQUEST:
            return { ...state, loading: true, errorMsg: '' };
        case types.REMOVE_RECIPE_SUCCESS:
            return { ...state, loading: false, errorMsg: '' };
        case types.REMOVE_RECIPE_ERROR:
            return { ...state, loading: false, errorMsg: action.payload };
        
        default:
            return state;
    }
}