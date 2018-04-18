
const INIT_TOPIC = 'INIT_TOPIC'
const ADD_TOPIC = 'ADD_TOPIC'
const DELETE_TOPIC = 'DELETE_TOPIC'

export default function(state, action){
  if (!state) {
    state = { topics: [] }
  }
  switch (action.type) {
    case INIT_TOPIC:
      // 初始化话题列表
      return { topics: action.topics }
    case ADD_TOPIC:
      // 新增话题
      return {
        topics: [...state.topics, ...action.topics]
      }
    case DELETE_TOPIC:
      // 删除话题
      return {
        topics: [
          ...state.topics.slice(0, action.topicsIndex),
          ...state.topics.slice(action.topicsIndex + 1)
        ]
      }
    default:
      return state
  }
}

// action creators
export const initTopic = (topics) => {
  return { type: INIT_TOPIC, topics }
}

export const addTopic = (topics) => {
  return { type: ADD_TOPIC, topics }
}

export const deleteTopic = (topicsIndex) => {
  return { type: DELETE_TOPIC, topicsIndex }
}