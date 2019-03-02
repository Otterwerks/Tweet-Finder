import React, { Component } from 'react';

class AwesomeTweets extends Component {
    render() {
      return (
        <div className="main">
          <div className="row">
            <div className="col-8">
              <div className="subHeader">
                <h1>Awesome Tweets</h1>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-8">
              <div className="input">
                <button onClick={this.props.getTweet}>Listen to the chirping</button>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-2">
              <div className="textBox">
                <p>Text box placeholder</p>
              </div>
            </div>
            <div className="col-6">
              <div className="tweets">
                {this.props.formatTweet(this.props.tweet)}
              </div>
            </div>
          </div>
        </div>
      )
    }
  }

export default AwesomeTweets;