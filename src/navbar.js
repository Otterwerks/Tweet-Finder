import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <div className="Frame">
      <div className="Header">
        <div className="Navbar">
          <button value="Home" onClick={this.props.pageNav}>Home</button>
          <button value="Search" onClick={this.props.pageNav}>Search</button>
          <button value="AwesomeTweets" onClick={this.props.pageNav}>Awesome Tweets</button>
        </div>
      </div>
    </div>
    )
  }
}

export default Navbar;