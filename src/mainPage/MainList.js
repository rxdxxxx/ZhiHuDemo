import React, {Component} from 'react';
import PropTypes from 'prop-types'
import "./MainList.css"
import MainListHeader from "./MainListHeader";
import MainListTopic from "./MainListTopic";
import ModulePartView from "./ModulePartView";
import ModulePartFooter from "./ModulePartFooter"
import ModulePartNavList from "./ModulePartNavList"


class MainList extends Component {
  static defaultProps = {
    topics:[]
  }
  // 类型检测
  static propTypes = {
    topics:PropTypes.array,
    loadTopics:PropTypes.func
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  handleLoadMoreTopic = (e)=>{
    this.props.loadTopics();
  }

  render() {
    return (
      <div className="main_context">
        <div className="main_list_left">
          <MainListHeader/>
          <div>{
            this.props.topics.map((topic,index) => {
              return <MainListTopic
                key={Number.parseInt(topic.id) + index}
                topic={topic}
                index={index}
              />
            })
          }
          </div>
          <div className="loadMore" onClick={this.handleLoadMoreTopic}>点击加载更多</div>
        </div>
        <div className="main_list_right">
          <ModulePartView/>
          <ModulePartNavList/>
          <ModulePartFooter/>
        </div>
      </div>
    );
  }
}

export default MainList
