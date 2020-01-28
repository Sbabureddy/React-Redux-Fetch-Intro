import * as actionTypes from "./ActionTypes";

export const postReducer = (state = { posts: [] }, action) => {
  switch (action.type) {
    case actionTypes.FETCH_DATA:
      return { ...state, posts: action.payload };
    default:
      return state;
  }
};
