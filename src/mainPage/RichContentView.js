import React, {Component} from "react";
import PropTypes from "prop-types";
import "./MainList.css";

class RichContentView extends Component {
  // 默认值
  static defaultProps = {
    topicInnerText: "",
    contentFullText: ""
  };
  // 类型检测
  static propTypes = {
    topicInnerText: PropTypes.string,
    contentFullText: PropTypes.string
  };

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  handleOpenBtnClick = e => {
    this.setState({
      isOpen: true
    })
  };

  handleCloseBtnClick = e => {
    this.setState({
      isOpen: false
    })
  };

  render() {
    const isOpen = this.state.isOpen;

    return (
      <div className="main_list_topic-RichContent-Inner">
        {isOpen ? (
          <div >
            <span className="topic-fullText" dangerouslySetInnerHTML={{__html:this.props.contentFullText}}></span>
            <button
              className="main_list_topic-RichContent-Inner-Button"
              onClick={this.handleCloseBtnClick.bind(this)}
            >
              收起👆
            </button>
          </div>
        ) : (
          <div className="topic-shortText">
            <span className="main_list_topic-RichContent-Inner-Text">
              {this.props.topicInnerText}
            </span>
            <button className="main_list_topic-RichContent-Inner-Button"
                    onClick={this.handleOpenBtnClick.bind(this)}>
              阅读全文👇
            </button>
          </div>
        )}

      </div>
    );
  }
}

export default RichContentView;
