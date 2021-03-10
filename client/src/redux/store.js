import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import { recipeReducer } from './Recipe/recipeReducer';
import { authReducer } from './Auth/authReducer';


// Reducer
const rootReducer = combineReducers({
    recipe: recipeReducer,
    auth: authReducer
}); 
// Store
const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);
export default store;