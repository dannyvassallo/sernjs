import React from 'react';
import Counter from './Counter.jsx';

var Home = React.createClass({
  render: function() {
      return (
        <div>
          <div className="row">
            <div className="col-xs-12 col-sm-offset-2 col-sm-8  col-md-offset-2 col-md-8 col-lg-offset-3 col-lg-6">
              <img className="full-w" src="https://s3-us-west-2.amazonaws.com/sernjs/sernlogosmall.jpg" />
            </div>
          </div>
          <Counter counter={this.props.counter}/>
        </div>
      );
    }
});

module.exports = Home;
