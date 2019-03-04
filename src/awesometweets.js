import React, { Component } from 'react';

class AwesomeTweets extends Component {
  showDescription() {
    if (this.props.tweet[0]) {
      switch (this.props.tweet[0].user.screen_name) {
        case "jabrils_":
          return "Jabrils: He has some really cool videos up on this Youtube channel, I found him because I have a Tello drone and was researching projects for it. One of his projects was to program it to track faces using machine learning, bookmarked for my to-do list!";
        case "Raspberry_Pi":
          return "Raspberry Pi: I started playing with Pis a couple years ago. The first thing I did was \'upgrade\' a toy catapult I had with pan/tilt servos and a couple solenoids to fire it, all controlled through a Pi using a touchscreen interface I programmed.";
        case "MarkKnopfler":
          return "Mark Knopfler: A very talented guitarist who I grew up listening to, he just released a new album too!";
        case "mightycarmods":
          return "Might Car Mods: These guys can be goofy but they gave me the confidence to start working on my car. I'm a big fan of their early videos on Youtube.";
        case "aantonop":
          return "Andreas Antonopoulos: You've probably heard of Bitcoin but maybe you haven't heard of Andreas. If you are interested to learn more about cryptocurrency, this guy is my go-to source of well explained and unbiased knowledge.";
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
                <h2>Tweets From My Favorite Accounts</h2>
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
            <div className="col-3">
              <div className="textBox medium colorTwo">
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