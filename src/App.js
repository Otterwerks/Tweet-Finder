import React, { Component } from 'react';
import './App.css';
import './verified.png';
import Navbar from './navbar.js';
import Home from './home.js';
import Search from './search.js';
import AwesomeTweets from './awesometweets.js';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "Home",
      searchString: 'NA miata',
      searchType: 'content',
      contentType: 'mixed',
      searchResults: [],
      awesomeTweets: [],
      profile: {}
    }
    this.handleChange = this.handleChange.bind(this);
    this.setSearchType = this.setSearchType.bind(this);
    this.setContentType = this.setContentType.bind(this);
    this.searchTweets = this.searchTweets.bind(this);
    this.pageNavigation = this.pageNavigation.bind(this);
    this.formatTweets = this.formatTweets.bind(this);
    this.awesomeTweets = this.awesomeTweets.bind(this);
    this.searchLink = this.searchLink.bind(this);
    this.showProfileCard = this.showProfileCard.bind(this);
  }

  handleChange(event) {
    this.setState({searchString: event.target.value});
  }

  setSearchType(event) {
    this.setState({searchType: event.target.value});
  }

  setContentType(event) {
    this.setState({contentType: event.target.value});
  }

  pageNavigation(event) {
    this.setState({view: event.target.value})
  }

  searchTweets() {
    this.setState({searchResults: []});
    if (this.state.searchString != '') {
      let resource = 'api/v1/methods/search?';
      let parameter1 = 'searchString=' + this.state.searchString;
      let parameter2 = '&searchType=' + this.state.searchType;
      let parameter3 = '&contentType=' + this.state.contentType;
      let url = resource + parameter1 + parameter2 + parameter3;
      axios.get(url)
        .then((response) => {
          this.setState({searchResults: response.data});
        })
        .catch(function (error) {
          console.log(error);
        })
      //this.setState({searchString: ''});
    }
  }

  searchLink(searchItem) {
    this.setState({searchResults: [], view: "Search", searchString: searchItem});
      let resource = 'api/v1/methods/search?';
      let parameter1 = 'searchString=' + searchItem;
      let url = resource + parameter1;
      axios.get(url)
        .then((response) => {
          this.setState({searchResults: response.data});
        })
        .catch(function (error) {
          console.log(error);
        })
      //this.setState({searchString: ''});
  }

  awesomeTweets() {
    let url = 'api/v1/methods/showcase';
    axios.get(url)
      .then((response) => {
        this.setState({awesomeTweets: response.data})
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  showProfileCard(tweet) {
    this.setState({profile: {
      image: tweet.user.profile_image_url_https.replace('_normal', ''),
      name: tweet.user.name,
      username: tweet.user.screen_name,
      description: tweet.user.description,
      followers: tweet.user.followers_count,
      verified: tweet.user.verified,
      following: tweet.user.friends_count,
      banner: tweet.user.profile_banner_url,
      tweets: tweet.user.statuses_count,
    }})
    document.getElementById("profile-card").style.display = "block";
  }

  hideProfileCard() {
    document.getElementById("profile-card").style.display = "none";
  }

  getHashTags(tweet) {
    let hashtags = [];
    for (let i = 0; i < tweet.entities.hashtags.length; i++) {
      hashtags.push(<a className="search-link" onClick={this.searchLink.bind(this, tweet.entities.hashtags[i].text)}>#{tweet.entities.hashtags[i].text}</a>);
    }
    return hashtags.reduce((tags, tag) => tags.concat(tag, ' '), [""]);
  }

  textCorrection(text) {
    let fragments = text.split(' ').map(fragment => {
      if (fragment.includes("http://") || fragment.includes("https://")) {
        return <a href={fragment}>{fragment}</a>;
      } else if (fragment == "&amp;") {
        return "&";
      } else {
        return fragment;
      }
    });
    return fragments.reduce((words, word) => words.concat(word, ' '), [""]);
  }

  formatTime(timeString) {
    let dayName = timeString.slice(0, 3);
    let day = timeString.slice(8, 10);
    let month = timeString.slice(4, 7);
    let year = timeString.slice(26, 30);
    let minute = timeString.slice(14, 16);
    let time = timeString.slice(11, 13) > 12 ? timeString.slice(11, 13) - 12 + ":" + minute + "PM": timeString.slice(11, 13) + ":" + minute + "AM";
    return "at " + time + " on " + dayName + " " + month + " " + day + ",  " + year;
  }
  
  formatTweets(tweets) {
    return (tweets.map(tweet => {
      return (
        <div className="tweet" key={tweet.id}>
          <div className="tweetBorder">
            <div className="tweetHeader">
                <div className="header-profile-picture no-padding">
                  <img className="profile-picture-small" src={tweet.user.profile_image_url_https} />
                </div>
                <div className="header-name no-padding">
                  <h3 className="no-padding no-margin"><a className="search-link" onClick={this.showProfileCard.bind(this, tweet)}>{tweet.user.name}</a>{tweet.user.verified == true && <img className="verified" src={require("./verified.png")} />} <br /> <span className="user-name"><a className="search-link" onClick={this.searchLink.bind(this, tweet.user.screen_name)}>@{tweet.user.screen_name}</a></span></h3>
                </div>
            </div>
            <div className="tweetBody">
              <p className="tweetText">{this.textCorrection(tweet.full_text)}</p>
            </div>
            <div className="tweetMedia">
              {tweet.extended_entities ? 
                tweet.extended_entities.media ? 
                  tweet.extended_entities.media[0].type == "video" ? 
                    tweet.extended_entities.media[0].video_info.variants ?
                      tweet.extended_entities.media[0].video_info.variants[tweet.extended_entities.media[0].video_info.variants.length - 1].url ?
                        <video className="embeddedMedia" controls><source src={tweet.extended_entities.media[0].video_info.variants[tweet.extended_entities.media[0].video_info.variants.length - 1].url} /></video> : 
                        null : 
                      null :
                    <img className="embeddedMedia" src={tweet.extended_entities.media[0].media_url_https} /> : 
                  null : 
                null}
            </div>
            <div className="tweetFooter">
              <div className="hash-tags">
                <p className="bold black">{this.getHashTags(tweet)}</p>
              </div>
              <div className="posted-on">
                <p>{this.formatTime(tweet.created_at)}</p>
              </div>
            </div>
          </div>
        </div>
      )
    }))
  }

  currentView() {
    if (this.state.view === "Search") {
      return (<Search 
                onChange={this.handleChange}
                selectSearchType={this.setSearchType}
                selectContentType={this.setContentType}
                searchTweets={this.searchTweets}
                searchType={this.state.searchType}
                contentType={this.state.contentType}
                value={this.state.searchString} 
                tweets={this.state.searchResults}
                formatTweet={this.formatTweets}
              />)
    } else if (this.state.view === "Favorites") {
      return <AwesomeTweets 
                tweet={this.state.awesomeTweets}
                getTweet={this.awesomeTweets}
                formatTweet={this.formatTweets}
              />
    } else {
      return <Home />
    }
  }

  render() {
    return (
      <div className="Main" id="splash">
        <div id="profile-card">
          <button id="close-button" onClick={this.hideProfileCard}></button>
          <div id="profile-card-panel">
            <img id="profile-card-banner" src={this.state.profile.banner} />
            <img id="profile-card-image" src={this.state.profile.image} />
            <a id="view-twitter-profile-link" href={"http://twitter.com/" + this.state.profile.username} target="_blank">View profile on Twitter</a>
            <p id="profile-card-name" className="bold">{this.state.profile.name}{this.state.profile.verified == true && <img id="profile-card-verified" src={require("./verified.png")} />}</p>
            <p id="profile-card-username">@{this.state.profile.username}</p>
            <p id="profile-card-description">{this.state.profile.description}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-3 title no-padding">
            <h2 className="white">Otterwerks</h2>
          </div>
          <div className="col-5 title no-padding">
            <h1 className="bold white">Tweet Finder</h1>
          </div>
        </div>
        <div className="row" id={this.state.view === "Home" ? "home" : "page"}>
          <div className="col-2 sticky center">
            <Navbar 
              pageNav={this.pageNavigation} 
              buttons={["Home", "Search", "Favorites", "Info"]}
              active={this.state.view}
            />
          </div>
          <div className="col-6 no-padding">
            {this.currentView()}
          </div>
          <button id="toTop"><a href="#top">^</a></button>
        </div>
      </div>
    )
  }
}

export default App;
