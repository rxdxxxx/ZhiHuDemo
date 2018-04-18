import React, { Component } from 'react'
import PropTypes from 'prop-types'
import "./MainList.css"

class MainListHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {}

  }

  render() {
    return (
      <div className="main_list_left_header">
        <div className="main_list_left_header-nav">
          <div className="main_list_left_header-nav-item-first">❓ 提问</div>
          <div className="main_list_left_header-nav-item">📝 回答</div>
          <div className="main_list_left_header-nav-item">✍️ 写文章</div>
          <div className="main_list_left_header-nav-item">📌 写想法</div>
        </div>
      </div>
    )
  }
}

export default MainListHeader