import React, { Component } from 'react';

class Navbar extends Component {

  generateNavigationButtons(buttonList) {
    let navigationButtons = [];
    for (let i = 0; i < buttonList.length; i++) {
      navigationButtons.push(<button className={this.props.active == buttonList[i] ? "navButton bold active" : "navButton bold"} value={buttonList[i]} onClick={this.props.pageNav}>{buttonList[i]}</button>);
    }
    return navigationButtons;
  }

  render() {
    return (
      <div className="navBar">
            {this.generateNavigationButtons(this.props.buttons)}
      </div>
    )
  }
}

export default Navbar;