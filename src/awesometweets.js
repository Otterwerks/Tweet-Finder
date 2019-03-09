import React, { Component } from 'react';

class AwesomeTweets extends Component {
  showDescription() {
    if (this.props.tweet[0]) {
      switch (this.props.tweet[0].user.screen_name) {
        case "jabrils_":
          return <p><strong>Jabrils:</strong> He has some really cool videos up on his Youtube channel, I found him because I have a Tello drone and was researching projects for it. One of his projects was to program it to track faces using machine learning, bookmarked for my to-do list!</p>;
        case "Raspberry_Pi":
          return <p><strong>Raspberry Pi:</strong> I started playing with Pis a couple years ago. The first thing I did was 'upgrade' a toy catapult I had with pan/tilt servos and a couple solenoids to fire it, all controlled through a Pi using a touchscreen interface I programmed using Kivy.</p>;
        case "MarkKnopfler":
          return <p><strong>Mark Knopfler:</strong> A very talented guitarist who I grew up listening to, he just released a new album too!</p>;
        case "mightycarmods":
          return <p><strong>Might Car Mods:</strong> These guys can be goofy but they gave me the confidence to start working on my car. I'm a big fan of their early videos on Youtube.</p>;
        case "PlayHearthstone":
          return <p><strong>Play Hearthstone:</strong> I have been playing Hearthstone since Beta. I don't have time to game much these days so I really appreciate the simplicity and pace of this game. Blizzard is one of my favorite game studios.</p>;
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
                <h2 className="dark-gray">Tweets From My Favorite Accounts</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-8">
              <div className="input">
                <button className="button form-item" onClick={this.props.getTweet}>Listen to the chirping</button>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <div className="textBox medium black round-border">
                <p>{this.showDescription()}</p>
              </div>
            </div>
            <div className="col-5">
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