import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import thunk from "redux-thunk";

import { recipeReducer } from './Recipe/recipeReducers';


// Reducer
// const rootReducer = combineReducers({
//     cake: cakeReducer,
//     iceCream: iceCreamReducer,
//     user: userReducer
// }); 
const store = createStore(
    recipeReducer,
    composeWithDevTools(applyMiddleware(thunk))
);
export default store;