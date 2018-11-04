import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Input, InputAdornment } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { fetchPosts, selectors } from "../../redux/post";
import { logoutUser } from "../../redux/authentication";
import Post from "../../components/Post/Post";
import "./Posts.scss";

class Posts extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    const { fetchedData, error } = this.props;
    if (fetchedData.length === 0 && error === "") {
      const { fetchPosts } = this.props;
      fetchPosts();
    }
  }

  handleLogout = event => {
    event.preventDefault();
    const { logoutUser } = this.props;
    logoutUser();
  };

  render() {
    const { posts } = this.props;
    return (
      <div className="posts-container">
        <div className="header-posts">
          <Button
            className="logout-button"
            variant="contained"
            color="primary"
            onClick={this.handleLogout}
          >
            Log out
          </Button>
          <Input
            className="search-button"
            placeholder="Search"
            inputProps={{
              "aria-label": "Search"
            }}
            endAdornment={
              <InputAdornment position="end">
                <SearchIcon color="disabled" />
              </InputAdornment>
            }
          />
        </div>
        <div className="posts-main">
          {posts.map(post => {
            const { userId, title, id } = post;
            return (
              <Link to={`/post/${id}`} key={id}>
                <Post userId={userId} title={title} />
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    posts: selectors.getPosts(state),
    fetchedData: selectors.getFetchedData(state),
    error: selectors.getError(state)
  }),
  { fetchPosts, logoutUser }
)(Posts);
