import React, { Component } from "react";
import { fetchPosts } from "../redux/actionCreator";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

const mapStateToProps = (state) => ({
  posts: state.posts,
});

const mapDispatchToProps = (dispatch) => ({
  fetchPosts: () => dispatch(fetchPosts()),
});

class Posts extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <div>
        Posts fetched form API:
        <ul>
          {this.props.posts.posts.map((post, index) => (
            <li key={index}>{post.title}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Posts));
