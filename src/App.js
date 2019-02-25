import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "Home",
      searchString: '',
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
    //use searchString to query tweets, clear searchString
    const resource = 'api/v1/methods/search?';
    const parameter1 = 'searchString=' + this.state.searchString;
    const parameter2 = '&searchType=' + this.state.searchType;
    const parameter3 = '&contentType=' + this.state.contentType;
    const url = resource + parameter1 + parameter2 + parameter3;
    axios.get(url)
      .then((response) => {
        console.log(response.data.statuses);
        this.setState({searchResults: response.data})
      })
      .catch(function (error) {
        console.log(error);
      })
    this.setState({searchString: ''});

    //console.log(this.state.searchResults);
  }

  randomTweets() {
    //query recent tweets from predetermined users
  }

  processTweets() {
    //
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
          <h1>Homepage</h1>
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
