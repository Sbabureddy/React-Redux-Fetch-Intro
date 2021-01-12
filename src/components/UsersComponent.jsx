import React, { Component } from "react";
import { fetchUsers } from "../redux/actionCreator";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import UserProfile from "./UserProfile";

const mapStateToProps = (state) => ({
  users: state.users,
});

const mapDispatchToProps = (dispatch) => ({
  fetchUsers: () => dispatch(fetchUsers()),
});

const RenderUsers = ({ users }) => {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

class Users extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    const users = this.props.users.users;

    return (
      <div>
        Users:
        <RenderUsers users={users} />
        <UserProfile users={users} />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Users));
