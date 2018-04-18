import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ContentItemActions extends Component{
  // 默认值
  static defaultProps = {
    voteupString:"0",
    commentCountString:0
  }
  // 类型检测
  static propTypes = {
    voteupString:PropTypes.string,
    commentCountString:PropTypes.number
  }

  constructor(props){
    super(props);
    this.state = {}

  }

  handleClick = (e)=>{
    this.setState({

    })
  }

  render () {
      return (
        <div className="main_list_topic-ContentItem-actions">
          <div className="main-contentItem-action-up">👆{this.props.voteupString}</div>
          <div className="main-contentItem-action-down">👇</div>
          <div className="main-contentItem-action-others">🎈{this.props.commentCountString}条评论</div>
          <div className="main-contentItem-action-others">✈️分享</div>
          <div className="main-contentItem-action-others">✨收藏</div>
          <div className="main-contentItem-action-others">❤️感谢</div>
          <div className="main-contentItem-action-others">...</div>
        </div>
      )
   }
}

export default ContentItemActions