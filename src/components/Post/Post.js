import React, { Component } from "react";
import PropTypes from "prop-types";
import { Card, Typography } from "@material-ui/core";
import "./Post.scss";

class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {
      display: false
    };
  }

  static propTypes = {
    userId: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    delay: PropTypes.number.isRequired
  };

  componentDidMount() {
    const { delay } = this.props;
    const { display } = this.state;
    if (!display) {
      setTimeout(() => {
        this.setState({ display: true });
      }, delay);
    }
  }

  render() {
    const { userId, title } = this.props;
    const { display } = this.state;
    if (display) {
      return (
        <div className="post-component">
          <Card className="card-post">
            <Typography
              className="user-id-post"
              variant="headline"
              component="h2"
            >
              UserId: {userId}
            </Typography>
            <Typography className="title-post">Title: {title}</Typography>
          </Card>
        </div>
      );
    } else {
      return <div className="post-component" />;
    }
  }
}

export default Post;
