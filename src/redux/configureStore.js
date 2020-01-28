import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { postReducer } from "./posts";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const configureStore = () => {
  const store = createStore(
    postReducer,
    composeEnhancer(applyMiddleware(thunk))
  );
  return store;
};
