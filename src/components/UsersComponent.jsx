import React, { Component } from "react";
import { fetchUsers } from "../redux/actionCreator";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";

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
        <li key={user.id}>
          <Link to={`users/${user.id}`}>{user.name}</Link>{" "}
        </li>
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
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Users));
