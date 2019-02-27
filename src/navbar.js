import React, { Component } from 'react';

class Navbar extends Component {

  generateNavigationButtons(buttonList) {
    let navigationButtons = []
    for (let i = 0; i < buttonList.length; i++) {
      navigationButtons.push(<button value={buttonList[i]} onClick={this.props.pageNav}>{buttonList[i]}</button>);
    }
    return <div className="Navbar">{navigationButtons}</div>
  }

  render() {
    return (
      <div className="Banner">
        <div className="Header">
          <div className="Navbar">
            {this.generateNavigationButtons(this.props.buttons)}
          </div>
        </div>
      </div>
    )
  }
}

export default Navbar;