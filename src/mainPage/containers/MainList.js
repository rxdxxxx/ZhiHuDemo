import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import MainList from '../MainList'
import {initTopic, addTopic} from "../../../reducers/topics";
import axios from 'axios'
import topics from "../../../reducers/topics";

class MainListContainer extends Component{
  // 类型检测
  static propTypes = {
    topics:PropTypes.array,
    initTopic:PropTypes.func,
    addTopic:PropTypes.func
  }


  constructor(props){
    super(props);
    this.state = {}
  }

  componentWillMount(){
  }

  componentDidMount() {
    this.loadTopics()
  }

  loadTopics = ()=>{
    axios.get(`/topics`)
      .then(res => {
        const { data } = res.data;
        this.props.initTopic(data)
      });
  }

  addTopics = ()=>{
    axios.get(`/topics`)
      .then(res => {
        const { data } = res.data;
        this.props.addTopic(data)
      });
  }



  render () {
      return (
        <MainList
          topics={this.props.topics}
          loadTopics={this.addTopics.bind(this)}
        >
        </MainList>
      )
   }
}

const mapStateToProps = (state)=>{
  return {
    topics:state.topics
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    initTopic:(topic)=>{
      dispatch(initTopic(topic))
    },
    addTopic:(topics)=>{
      dispatch(addTopic(topics))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(MainListContainer)