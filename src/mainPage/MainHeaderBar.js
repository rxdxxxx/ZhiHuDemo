import React, {Component} from 'react';
import "./MainHeaderBar.css"

class MainHeaderBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="main_header_bar">
        <img className="main_header_bar_bgImg" src="../res/headerBar@2x.png" alt=""/>
      </div>
    );
  }
}

export default MainHeaderBar
