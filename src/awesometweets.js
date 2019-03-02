import React, { Component } from 'react';

class AwesomeTweets extends Component {
    render() {
      return (
        <div className="AwesomeTweets">
          <div className="Title">
            <h1>Awesome Tweets</h1>
          </div>
          <div>
            <button onClick={this.props.getTweet}>Listen to the chirping</button>
          </div>
          <div className="SearchResults">
            {this.props.formatTweet(this.props.tweet)}
          </div>
        </div>
      )
    }
  }

export default AwesomeTweets;