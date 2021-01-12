import React from "react";

function UserProfile({ match, users }) {
  const user = users.filter(
    (user) => user.id === parseInt(match.params.id, 10)
  )[0];
  return (
    <div>
      <h2>{user.name}</h2>
    </div>
  );
}

export default UserProfile;
