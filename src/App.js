import React, { Component } from 'react';
import './App.css';
import Navbar from './navbar.js';
import Home from './home.js';
import Search from './search.js';
import AwesomeTweets from './awesometweets.js';
import axios from 'axios';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "Home",
      searchString: 'nasa',
      searchType: 'content',
      contentType: 'mixed',
      searchResults: [],
      randomTweets: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.setSearchType = this.setSearchType.bind(this);
    this.setContentType = this.setContentType.bind(this);
    this.searchTweets = this.searchTweets.bind(this);
    this.pageNavigation = this.pageNavigation.bind(this);
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
    let resource = 'api/v1/methods/search?';
    let parameter1 = 'searchString=' + this.state.searchString;
    let parameter2 = '&searchType=' + this.state.searchType;
    let parameter3 = '&contentType=' + this.state.contentType;
    let url = resource + parameter1 + parameter2 + parameter3;
    axios.get(url)
      .then((response) => {
        this.setState({searchResults: this.formatTweets(this.processTweets(response.data.statuses))});
      })
      .catch(function (error) {
        console.log(error);
      })
    this.setState({searchString: ''});
  }

  randomTweets() {
    //query recent tweets from predetermined users
  }

  applyLink(text) { // can't get this to work, shows [object][object] in text, jsx not rendering correctly?
    let fragments = text.split(' ').map((fragment) => {
      if (fragment.includes("http://") || fragment.includes("https://")) {
        return "<a href=" + fragment + ">" + fragment + "</a>"
      } else {
        return fragment;
      }
    });
    return {fragments.join(' ')}
  }
  
  formatTweets(tweets) {
    return (tweets.map(tweet => {
      return (
        <div className="Tweet" key={tweet.key}>
          <h2>By {tweet.user}, on {tweet.time}</h2>
          <h3>this.applyLink{{tweet.content}}</h3>
        </div>
      )
    }))
  }

  processTweets(tweets) {
    let processedTweets = tweets.map((tweet) => {
      let container = {};
        container.key = tweet.id;
        container.user = tweet.user.screen_name;
        container.time = tweet.created_at;
        container.content = tweet.text;
      return container;
    })
    console.log(processedTweets);
    return processedTweets;
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
              />)
    } else if (this.state.view === "Awesome Tweets") {
      return <AwesomeTweets tweets={this.state.randomTweets} />
    } else {
      return <Home />
    }
  }

  render() {
    return (
      <div className="Main">
        <Navbar pageNav={this.pageNavigation} buttons={["Home", "Search", "Awesome Tweets"]}/>
        {this.currentView()}
      </div>
    )
  }
}

export default Main;
