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
      searchString: 'nasa',
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
          this.setState({searchResults: response.data.statuses});
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
        this.setState({awesomeTweets: [response.data]})
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
              <p className="tweetText">{this.applyLink(tweet.text)}</p>
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
    } else if (this.state.view === "Cool Tweets") {
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
      <div className="Main border">
        <div className="row">
          <div className="col-8 border">
            <h1 className="bold">Tweet Finder</h1>
          </div>
        </div>
        <div className="row" id={this.state.view === "Home" ? "splash" : "page"}>
          <div className="col-1">
            <Navbar pageNav={this.pageNavigation} buttons={["Home", "Search", "Cool Tweets", "Site Info"]}/>
          </div>
          <div className="col-7 no-padding">
            {this.currentView()}
          </div>
        </div>
      </div>
    )
  }
}

export default App;
