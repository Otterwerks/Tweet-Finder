import React, { Component } from 'react';
import axios from 'axios';

class AwesomeTweets extends Component {
  showDescription() {
    if (this.props.tweet[0]) {
      switch (this.props.tweet[0].user.screen_name) {
        case "jabrils_":
          return <p><strong>Jabrils:</strong> A maker with some really cool videos up on his Youtube channel, I discovered him when I was searching for project ideas for my Tello drone. One of his projects was to program it to track faces using machine learning, bookmarked for my to-do list!</p>;
        case "Raspberry_Pi":
          return <p><strong>Raspberry Pi:</strong> I started playing with Pis a couple years ago. The first thing I did was 'upgrade' a toy catapult I had with pan/tilt servos and a couple solenoids to fire it, all controlled through a Pi connected to a touchscreen interface I programmed using Kivy.</p>;
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
      return "Listen to the chirping and you will hear a random tweet from one of my favorite Twitter accounts.";
    }
  }

  cacheAge(cacheWriteAge, tweet) {
    if (this.props.tweet[0]) {
      if (cacheWriteAge == 0) {
        return <p>Tweet cache for {tweet.user.screen_name} refreshed!</p>
      } else {
        return <p>Tweet cache for {tweet.user.screen_name} last updated {cacheWriteAge} seconds ago.</p>
      }
    } else {
      return <p>This page uses <strong>RedisCloud</strong> for Tweet caching.</p>
    }
  }

  convertToHours(seconds) {
    let hours = Math.round(seconds / 3600);
    if (hours == 0) {
      hours = "< 1";
    }
    return hours;
  }

  refreshCachedTweets() {
    let url = 'api/v1/utilities/cacheRefresh';
    axios.get(url)
      .catch(function (error) {
        console.log(error);
      })
  }

    render() {
      return (
        <div className="main">
          <div className="row">
            <div className="col-8">
              <div className="round-border no-padding title-box">
                <h2 className="primary bold page-title">My Favorite Accounts</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="row-8 round-border" id="cached-tweet-box">
              <span>{this.cacheAge(this.props.cacheWriteAge, this.props.tweet[0])}</span><span><button id="cache-refresh-button" onClick={this.refreshCachedTweets}>Refresh cached Tweets</button></span>
            </div>
          </div>
          <div className="row">
            <div className="col-8">
              <button id="favorite-tweet-button" onClick={this.props.getTweet}>Listen to the chirping</button>
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