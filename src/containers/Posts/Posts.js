import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Input, InputAdornment } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { fetchPosts, filterPosts, selectors } from "../../redux/post";
import { logoutUser } from "../../redux/authentication";
import Post from "../../components/Post";
import ModalError from "../../components/ModalError";
import "./Posts.scss";

class Posts extends Component {
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

  handleFilter = event => {
    const { value } = event.target;
    const { filterPosts } = this.props;
    filterPosts(value);
  };

  render() {
    const { posts, filterValue, error } = this.props;
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
            onChange={this.handleFilter}
            defaultValue={filterValue}
          />
        </div>
        <div className="posts-main">
          {posts.map((post, index) => {
            const { userId, title, id } = post;
            return (
              <Link to={`/post/${id}`} key={id}>
                <Post
                  userId={userId.toString()}
                  title={title}
                  delay={(index - 1) * 1000}
                />
              </Link>
            );
          })}
        </div>
        {error.length > 1 ? <ModalError error={error} /> : ""}
      </div>
    );
  }
}

export default connect(
  state => ({
    posts: selectors.getPosts(state),
    fetchedData: selectors.getFetchedData(state),
    error: selectors.getError(state),
    filterValue: selectors.getFilter(state)
  }),
  { fetchPosts, filterPosts, logoutUser }
)(Posts);
