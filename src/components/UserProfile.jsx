import React, { Component } from "react";
import { fetchUsers } from "../redux/actionCreator";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  users: state.users,
});

const mapDispatchToProps = (dispatch) => ({
  fetchUsers: () => dispatch(fetchUsers()),
});

class UserProfile extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }
  render() {
    const user = this.props.users.users.filter(
      (user) => (user.id = parseInt(this.props.match.params.id, 10))
    )[0];
    return (
      <div>
        <h2>{user.id}</h2>
        <h4>{user.name}</h4>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
