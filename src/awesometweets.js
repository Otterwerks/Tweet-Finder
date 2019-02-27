import React, { Component } from 'react';

class AwesomeTweets extends Component {
    render() {
      return (
        <div className="AwesomeTweets">
          <div className="Title">
            <h1>Awesome Tweets</h1>
          </div>
          <div className="SearchResults">
            {this.props.tweets}
          </div>
        </div>
      )
    }
  }

export default AwesomeTweets;