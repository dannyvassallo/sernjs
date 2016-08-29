import React from 'react';
import Counter from './Counter.jsx';

var Home = React.createClass({
  render: function() {
      return (
        <div>
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <h2>Index</h2>
              <p>Cras facilisis urna ornare ex volutpat, et
              convallis erat elementum. Ut aliquam, ipsum vitae
              gravida suscipit, metus dui bibendum est, eget rhoncus nibh
              metus nec massa. Maecenas hendrerit laoreet augue
              nec molestie. Cum sociis natoque penatibus et magnis
              dis parturient montes, nascetur ridiculus mus.</p>

              <p>Duis a turpis sed lacus dapibus elementum sed eu lectus.</p>
            </div>
          </div>
          <Counter counter={this.props.counter}/>
        </div>
      );
    }
});

module.exports = Home;
