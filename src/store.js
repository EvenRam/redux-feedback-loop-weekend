import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';

//Be sure to replace this reducer! 🙂
// const feedbackReducer = (state = [], action) => {
//   if (action.type === "GET_FEEDBACK") {
//     console.log('action.payload', action.payload)
//     const newFeedback = action.payload
//     return [...state, newFeedback]
//   }
//   return state;
// }

const feelingReducer = (state = [], action) => {
  if (action.type === "SET_FEELING") {
    console.log('action.payload', action.payload)
    const newFeeling = action.payload
    return [...state, newFeeling]
  }
  return state;
}

const understandingReducer = (state = [], action) => {
  if (action.type === "SET_UNDERSTANDING") {
    const newUnderstanding = action.payload
    return [...state, newUnderstanding]
  }
  return state;
}

const supportReducer = (state = [], action) => {
  if (action.type === "SET_SUPPORT") {
    console.log('action.payload', action.payload)
    const newSupport = action.payload
    return [...state, newSupport]
  }
  return state;
}

const commentsReducer = (state = [], action) => {
  if (action.type === "SET_COMMENTS") {
    const newComments = action.payload
    return [...state, newComments]
  }
  return state;
}


const store = createStore(
  combineReducers({
    // feedbackReducer,
    feelingReducer,
    understandingReducer,
    supportReducer,
    commentsReducer // 👈 Be sure to replace this, too!
  }),
  applyMiddleware(logger),
);


export default store;