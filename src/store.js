import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';

// Be sure to replace this reducer! 🙂
const feedbackReducer = (state = [], action) => {
  if(action.type ==="GET_FEEDBACK"){
    return action.payload
  }
  return state;
}

const feelingReducer = (state = [], action) => {
  if(action.type ==="SET_FEELING"){
    return action.payload
  }
  return state;
}

const understandingReducer = (state = [], action) => {
  if(action.type ==="SET_UNDERSTANDING"){
    return action.payload
  }
  return state;
}

const SupportReducer = (state = [], action) => {
  if(action.type ==="SET_SUPPORT"){
    return action.payload
  }
  return state;
}

const commentsReducer = (state = [], action) => {
  if(action.type ==="SET_COMMENTS"){
    return action.payload
  }
  return state;
}


const store = createStore(
  combineReducers({
    feedbackReducer,
    feelingReducer,
    understandingReducer,
    SupportReducer,
    commentsReducer // 👈 Be sure to replace this, too!
  }),
  applyMiddleware(logger),
);


export default store;