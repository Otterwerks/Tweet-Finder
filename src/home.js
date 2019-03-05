import React, { Component } from 'react';

class Home extends Component {
    render() {
      return(
        <div className="main">
          <div className="row">
            <div className="col-1"></div>
            <div className="col-4 no-padding">
              <p className="textBox large extra-extra-light-gray">Search Twitter for Tweets from your favorite users...</p>
            </div>
          </div>
          <div className="row">
            <div className="col-2"></div>
            <div className="col-4 no padding">
              <p className="textBox large extra-light-gray bold right">or view some of mine.</p>
            </div>
          </div>
        </div>
      )
    }
  }

export default Home;