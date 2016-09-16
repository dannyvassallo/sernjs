import React from 'react';
import { Card } from 'material-ui';
import Counter from './Counter.jsx';

var Home = React.createClass({
  render: function() {
    return (
      <div>
        <div className="row">
          <Card id="home" className="col-xs-12 col-sm-offset-2 col-sm-8 col-md-offset-2 col-md-8">
            <img className="full-w" src="https://s3-us-west-2.amazonaws.com/sernjs/sernlogosmall.jpg" />
            <Counter counter={this.props.counter}/>
          </Card>
        </div>
      </div>
    );
  }
});

module.exports = Home;
