import { FETCH_DATA } from "./ActionTypes";

export const fetchPosts = () => dispatch => {
  return fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(posts => dispatch(getPosts(posts)))
    .catch(error => console.log(error));
};

export const getPosts = posts => ({
  type: FETCH_DATA,
  payload: posts
});
