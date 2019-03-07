import React, { Component } from 'react';

class Search extends Component {
    render() {
      return (
        <div className="main">
          <div className="row">
            <div className="col-8">
              <h2 className="primary">Search Tweets</h2>
            </div>
          </div>
          <div id="search-row" className="row">
            <div id="search-box" className="col-8 round-border no-padding">
              <div className="row no-padding">
                <div className="col-8 no-padding">
                  <input id="search-field" className="form-item-text round-border" type="text" value={this.props.value} onChange={this.props.onChange}/>
                </div>
              </div>
              <div className="row no-padding">
                <div className="col-8 no-padding">
                  <span className="custom-select" id="search-type">
                    <select className="select-search" value={this.props.searchType} onChange={this.props.selectSearchType}>
                      <option value="standard">Search For: Content</option>
                      <option value="user">Search For: Username</option>
                    </select>
                  </span>
                  <span className="custom-select" id="content-type">
                    <select className="select-search" value={this.props.contentType} onChange={this.props.selectContentType}>
                      <option value="mixed">Results: Standard</option>
                      <option value="popular">Results: Popular</option>
                      <option value="recent">Results: Recent</option>
                    </select>
                  </span>
                  <span id="search-button">
                    <button className="button form-item" onClick={this.props.searchTweets}>Search</button>
                  </span>
                </div>
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
