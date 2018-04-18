import React, {Component} from 'react'
import PropTypes from 'prop-types'
import "./ModulePartView.css"


class ModulePartNavList extends Component {
  constructor(props) {
    super(props);
    this.state = {}

  }

  handleClick = (e) => {
    this.setState({})
  }

  render() {
    return (
      <img className="modulePart-top" src="../res/part2.png" alt=""/>

    )
  }
}

export default ModulePartNavList