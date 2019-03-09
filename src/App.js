import React, { Component } from 'react';
import './App.css';
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
      searchString: 'from:nasa',
      searchType: 'content',
      contentType: 'mixed',
      searchResults: [],
      awesomeTweets: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.setSearchType = this.setSearchType.bind(this);
    this.setContentType = this.setContentType.bind(this);
    this.searchTweets = this.searchTweets.bind(this);
    this.pageNavigation = this.pageNavigation.bind(this);
    this.formatTweets = this.formatTweets.bind(this);
    this.awesomeTweets = this.awesomeTweets.bind(this);
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
      this.setState({searchString: ''});
    }
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

  applyLink(text) {
    let fragments = text.split(' ').map(fragment => {
      if (fragment.includes("http://") || fragment.includes("https://")) {
        return <a href={fragment}>{fragment}</a>;
      } else {
        return fragment;
      }
    });
    return fragments.reduce((words, word) => words.concat(word, ' '), [""]);
  }
  
  formatTweets(tweets) {
    return (tweets.map(tweet => {
      return (
        <div className="tweet" key={tweet.id}>
          <div className="tweetBorder">
            <div className="tweetHeader">
              <h3>By {tweet.user.screen_name}, on {tweet.created_at}</h3>
            </div>
            <div className="tweetBody">
              <p className="tweetText">{this.applyLink(tweet.full_text)}</p>
            </div>
            <div className="tweetPhoto">
              {tweet.entities.media ? <img className="embeddedPhoto" src={tweet.entities.media[0].media_url_https} /> : null}
            </div>
            <div className="tweetFooter">
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
