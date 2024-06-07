import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';

// Be sure to replace this reducer! 🙂
const feedbackReducer = (state = [], action) => {
  if(action.type ==="GET_FEEDBACK"){
    return action.payload
  }
  return state;
}

const store = createStore(
  combineReducers({
    feedbackReducer, // 👈 Be sure to replace this, too!
  }),
  applyMiddleware(logger),
);


export default store;