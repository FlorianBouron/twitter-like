import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Button, CircularProgress } from "@material-ui/core";
import { fetchPosts, selectors } from "../../redux/post";
import NotFound from "../NotFound";
import "./Post.scss";
import ModalError from "../../components/ModalError";

class Post extends Component {
  componentDidMount() {
    const { post, fetchPosts } = this.props;
    if (post === undefined) {
      fetchPosts();
    }
  }

  render() {
    const { posts, post, error } = this.props;
    if (posts.length > 1 && post) {
      const { userId, id, title, body } = post;
      return (
        <div className="post-container">
          <div className="header-post">
            <Link to="/">
              <Button
                className="back-button"
                variant="contained"
                color="primary"
              >
                Go back
              </Button>
            </Link>
          </div>
          <div className="post-main">
            <div className="title">Details</div>
            <div className="details-post">
              <div className="user">UserId: {userId}</div>
              <div className="id-post">Id: {id}</div>
              <div className="title-post">Title: {title}</div>
              <div className="body-post">Body: {body}</div>
            </div>
          </div>
        </div>
      );
    } else if (posts.length > 1 && !post) {
      return <NotFound />;
    } else {
      return (
        <div className="post-container-loading">
          <CircularProgress size={50} />
          {error.length > 1 ? <ModalError error={error} /> : ""}
        </div>
      );
    }
  }
}

export default connect(
  (state, props) => ({
    post: selectors.getPostById(state, props.match.params.id),
    posts: selectors.getPosts(state),
    error: selectors.getError(state)
  }),
  { fetchPosts }
)(Post);
