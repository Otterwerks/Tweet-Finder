import React, { Component } from 'react';
import './App.css';
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
    this.searchTweets = this.searchTweets.bind(this);
  }

  handleChange(event) {
    this.setState({searchString: event.target.value});
  }

  searchTweets() {
    let resource = 'api/v1/methods/search?';
    let parameter1 = 'searchString=' + this.state.searchString;
    let parameter2 = '&searchType=' + this.state.searchType;
    let parameter3 = '&contentType=' + this.state.contentType;
    let url = resource + parameter1 + parameter2 + parameter3;
    axios.get(url)
      .then((response) => {
        this.setState({searchResults: this.processTweets(response.data.statuses)});
      })
      .catch(function (error) {
        console.log(error);
      })
    this.setState({searchString: ''});
  }

  randomTweets() {
    //query recent tweets from predetermined users
  }

  processTweets(tweets) {
    let processedTweets = tweets.map((tweet) => {
      let container = {};
        container.user = tweet.user.screen_name;
        container.time = tweet.created_at;
        container.content = tweet.text;
        //console.log(container);
      return container;
    })
    console.log(processedTweets);
    return processedTweets;
  }

  currentView() {
    if (this.state.view === "Search") {
      return <Search onChange={this.handleChange} searchTweets={this.searchTweets} value={this.state.searchString} tweets={this.state.searchResults} />
    } else if (this.state.view === "AwesomeTweets") {
      return <AwesomeTweets tweets={this.state.randomTweets} />
    } else {
      return <Home />
    }
  }

  render() {
    return (
      <div className="Main">
        <div className="Header">
          <div className="Navbar">
            <button onClick={() => this.setState({view: "Home"})}>Home</button>
            <button onClick={() => this.setState({view: "Search"})}>Search</button>
            <button onClick={() => this.setState({view: "AwesomeTweets"})}>Awesome Tweets</button>
          </div>
        </div>
        <div className="View">
          {this.currentView()}
        </div>
      </div>

    )
  }
}

class Home extends Component {
  render() {
    return(
      <div className="Home">
        <div className="Title">
          <h1>Home</h1>
        </div>
      </div>
    )
  }
}

class Search extends Component {
  render() {
    return (
      <div className="Search">
        <div className="Title">
          <h1>Search Tweets</h1>
        </div>
        <div className="Form">
          <input
            name="search"
            type="text"
            value={this.props.value}
            onChange={this.props.onChange}
          />
          <button onClick={this.props.searchTweets}>Find Tweets</button>
        </div>
        <div className="SearchResults">
          {this.props.tweets.map(tweet => {
            return (
              <div className="Tweet" key={tweet.content}>
                <h2>By {tweet.user}, on {tweet.time}</h2>
                <h3>{tweet.content}</h3>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

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

export default Main;