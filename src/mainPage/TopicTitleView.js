import React, { Component } from 'react'
import PropTypes from 'prop-types'
import "./MainList.css"

class TopicTitleView extends Component{
  // 默认值
  static defaultProps = {
    userLinkName:"",
    userLinkHaneLine:"",
    avatar_url:""
  }
  // 类型检测
  static propTypes = {
    userLinkName:PropTypes.string,
    userLinkHaneLine:PropTypes.string,
    avatar_url:PropTypes.string
  }

  constructor(props){
    super(props);
    this.state = {}

  }


  render () {
      return (
        <div className="main_list_topic-Title">
          <img className="main_list_topic-AuthorInfo-HeaderImg" width={24} height={24}
               src={this.props.avatar_url} alt=""/>
          <div className="main_list_topic-Title-UserInfo">
            <a className="main_list_topic-Title-UserLink">{this.props.userLinkName}</a>
            <div className="main_list_topic-Title-Headline">, {this.props.userLinkHaneLine}</div>
          </div>
        </div>
      )
   }
}

export default TopicTitleView