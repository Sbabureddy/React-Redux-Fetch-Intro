import { baseUrl } from "../shared/baseUrl";
import { FETCH_POSTS, FETCH_USERS } from "./ActionTypes";

export const fetchPosts = () => dispatch => {
  return fetch(baseUrl + "posts")
    .then(response => response.json())
    .then(posts => dispatch(getPosts(posts)))
    .catch(error => console.log(error));
};

export const getPosts = posts => ({
  type: FETCH_POSTS, 
  payload: posts
});

export const  fetchUsers =()  => dispatch => {
  return fetch(baseUrl + "users")
      .then(response => response.json())
      .then(users => dispatch(getUsers(users)))
      .then(error => console.log(error))
}

export const getUsers = users => ({
  type: FETCH_USERS,
  payload: users
})