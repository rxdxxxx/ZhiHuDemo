import React, {Component} from 'react'
import PropTypes from 'prop-types'
import "./MainList.css"
import ContentItemActions from './ContentItemActions'
import RichContentView from './RichContentView'
import TopicTitleView from './TopicTitleView'
class MainListTopic extends Component {
  // 类型检测
  static propTypes = {
    topic:PropTypes.object
  }

  constructor(props) {
    super(props);
    this.state = {
    }

  }

  render() {
    const topic = this.props.topic;

    const firstLineText = topic.action_text_tpl + topic.actors[0].name;
    const userLinkName = topic.target.author.name;
    const userLinkHaneLine = topic.target.author.headline;
    const avatar_url = topic.target.author.avatar_url;
    const topicName = topic.target.question.title;
    const topicInnerText = topic.target.question.excerpt_new;
    const contentFullText = topic.target.content;
    const comment_count = topic.target.comment_count;
    const voteup_count = topic.target.voteup_count;
    let voteupString = "";
    if (voteup_count > 1000){
      voteupString = String(Math.ceil(voteup_count/1000))+"k" ;
    }else {
      voteupString = String(voteup_count);
    }

    return (
      <div className="main_list_topic">
        <div className="main_list_topic-Firstline">{firstLineText}</div>

        <TopicTitleView
          userLinkName={userLinkName}
          userLinkHaneLine={userLinkHaneLine}
          avatar_url={avatar_url}/>

        <div className="main_list_topic-NameContent">
          <a className="main_list_topic-Name" href="">{topicName}</a>
        </div>

        <RichContentView
          topicInnerText={topicInnerText}
          contentFullText={contentFullText}/>

        <ContentItemActions
          commentCountString={comment_count}
          voteupString={voteupString} />
      </div>
    )
  }
}

export default MainListTopic