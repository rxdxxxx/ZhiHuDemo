import React, {Component} from 'react'
import PropTypes from 'prop-types'
import "./ModulePartView.css"


class ModulePartFooter extends Component {
  constructor(props) {
    super(props);
    this.state = {}

  }

  handleClick = (e) => {
    this.setState({})
  }

  render() {
    return (
      <img className="modulePart-footer" src="../res/part3.png" alt=""/>
    )
  }
}

export default ModulePartFooter