import React from "react";

function PostDescription({ match, posts }) {
  const post = posts.filter(
    (post) => post.id === parseInt(match.params.id, 10)
  )[0];
  return <div>{post.title}</div>;
}

export default PostDescription;
