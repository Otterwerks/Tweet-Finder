import React, { Component } from 'react';

class Search extends Component {
    render() {
      return (
        <div className="main">
          <div className="heading">
            <h1>Search Tweets</h1>
          </div>
          <div className="body">
            <div className="input">
              <input type="text" value={this.props.value} onChange={this.props.onChange}/>
              <select value={this.props.searchType} onChange={this.props.selectSearchType}>
                <option value="standard">Standard</option>
                <option value="user">Username</option>
              </select>
              <select value={this.props.contentType} onChange={this.props.selectContentType}>
                <option value="mixed">Standard</option>
                <option value="popular">Popular</option>
                <option value="recent">Recent</option>
              </select>
              <button onClick={this.props.searchTweets}>Find Tweets</button>
            </div>
            <div className="SearchResults">
              {this.props.formatTweet(this.props.tweets)}
            </div>
          </div>
        </div>
      )
    }
  }

export default Search;
