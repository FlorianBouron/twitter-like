import React, { Component } from "react";
import PropTypes from "prop-types";
import { Card, Typography } from "@material-ui/core";
import "./Post.scss";

class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  static propTypes = {
    userId: PropTypes.number,
    title: PropTypes.string
  };

  render() {
    const { userId, title } = this.props;
    return (
      <Card className="post-component">
        <Typography className="user-id-post" variant="headline" component="h2">
          UserId: {userId}
        </Typography>
        <Typography className="title-post">Title: {title}</Typography>
      </Card>
    );
  }
}

export default Post;
