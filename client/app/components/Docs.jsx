import React from 'react';
import AjaxPromise from 'ajax-promise';
import $ from 'jquery';
import { Card, CardTitle, CardText } from 'material-ui';

var Docs = React.createClass({

  componentDidMount: function(){
    var markdown;
    AjaxPromise.get('api/readme/json')
      .then(function (response) {
        console.log(response);
        $('#readme').html(response.parsedMarkdown);
      })
      .catch(function(err){
        console.log("/readme error", err);
      });
  },

  render: function() {
    return (
      <div className="row">
        <Card className="col-xs-12 col-sm-offset-2 col-sm-8 col-md-offset-2 col-md-8">
          <div id="readme"></div>
        </Card>
      </div>
    );
  }
});

module.exports = Docs;
