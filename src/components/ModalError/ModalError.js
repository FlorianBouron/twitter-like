import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button
} from "@material-ui/core";
import "./ModalError.scss";

class ModalError extends Component {
  constructor(props) {
    super(props);

    this.state = {
      display: true
    };
  }

  static propTypes = {
    error: PropTypes.string.isRequired
  };

  handleClose = () => {
    this.setState({ display: false });
  };

  render() {
    const { display } = this.state;
    const { error } = this.props;
    return (
      <Dialog
        open={display}
        onClose={this.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className="modal-error-component"
      >
        <DialogTitle id="alert-dialog-title">HTTP connection error</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            It seems like an error just occurred: {error}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleClose} color="primary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default ModalError;
