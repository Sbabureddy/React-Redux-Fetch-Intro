import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { postReducer } from "./posts";
import { userReducer } from "./users";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const configureStore = () => {
  const store = createStore(
    combineReducers({
      posts: postReducer,
      users: userReducer
    }), 
    composeEnhancer(applyMiddleware(thunk))
  );
  return store;
};
