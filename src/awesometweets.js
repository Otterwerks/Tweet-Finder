import React, { Component } from 'react';

class AwesomeTweets extends Component {
  showDescription() {
    if (this.props.tweet[0]) {
      switch (this.props.tweet[0].user.screen_name) {
        case "jabrils_":
          return "jabrils";
        case "Raspberry_Pi":
          return "raspberry pi";
        case "MarkKnopfler":
          return "mark knopfler";
        case "mightycarmods":
          return "mighty car mods";
        case "aantonop":
          return "antonopolous";
        default:
          return "I don't know anything about this account, how did it get here?";
      }
    } else {
      return "Press the button to display a random tweet from one of my favorite Twitter accounts.";
    }
  }

    render() {
      return (
        <div className="main">
          <div className="row">
            <div className="col-8">
              <div className="subHeader">
                <h1>Tweets From My Favorite Accounts</h1>
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
                <p>{this.showDescription()}</p>
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