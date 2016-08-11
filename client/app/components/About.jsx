import React from 'react';

var About = React.createClass({
  render: function() {
      return (
        <div className="container">
          <div className="row">
            <div className="col s12">
              <h2>About</h2>
              <p>Cras facilisis urna ornare ex volutpat, et
              convallis erat elementum. Ut aliquam, ipsum vitae
              gravida suscipit, metus dui bibendum est, eget rhoncus nibh
              metus nec massa. Maecenas hendrerit laoreet augue
              nec molestie. Cum sociis natoque penatibus et magnis
              dis parturient montes, nascetur ridiculus mus.</p>

              <p>Duis a turpis sed lacus dapibus elementum sed eu lectus.</p>
            </div>
          </div>
        </div>
      );
    }
});

module.exports = About;
