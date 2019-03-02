import React, { Component } from 'react';

class AwesomeTweets extends Component {
    render() {
      return (
        <div className="main">
          <div className="heading">
            <h1>Awesome Tweets</h1>
          </div>
          <div className="body">
            <div className="input">
              <button onClick={this.props.getTweet}>Listen to the chirping</button>
            </div>
            <div className="SearchResults">
              {this.props.formatTweet(this.props.tweet)}
            </div>
          </div>
        </div>
      )
    }
  }

export default AwesomeTweets;