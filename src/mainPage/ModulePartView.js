import React, { Component } from 'react'
import PropTypes from 'prop-types'
import "./MainList.css"

class ModulePartView extends Component{
  constructor(props){
    super(props);
    this.state = {}

  }


  render () {
      return (
        <img className="modulePart-top" src="../res/part1.png" alt=""/>

      )
   }
}

export default ModulePartView