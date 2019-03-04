import React, { Component } from 'react';

class Search extends Component {
    render() {
      return (
        <div className="main">
          <div className="row">
            <div className="col-8">
              <div className="subHeader">
                <h2 className="dark-gray">Search Tweets</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-8">
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
            </div>
          </div>
          <div className="row">
            <div className="col-8">
              <div className="tweets">
                {this.props.formatTweet(this.props.tweets)}
              </div>
            </div>
          </div>
        </div>
      )
    }
  }

export default Search;
