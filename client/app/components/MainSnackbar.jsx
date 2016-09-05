import React from 'react';
import Snackbar from 'material-ui/Snackbar';
import Store from '../reducers/store.js';

var MainSnackbar = React.createClass({

  _handleRequestClose: function (_method) {
    Store.dispatch({
      type: "HIDE_SNACKBAR"
    });
  },

  render: function () {
    return (
      <Snackbar
        open={this.props.snacks.length > 0}
        message={this.props.snacks[0] || ""}
        autoHideDuration={3000}
        onRequestClose={this._handleRequestClose}
      />
    );
  }

});

export default MainSnackbar;
