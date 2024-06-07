import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'




function App() {

  const dispatch = useDispatch()

  useEffect(()=>{
    console.log('in useEffect')
    fetchFeedback();
  }, []);

  const fetchFeedback = () => {
    axios.get('api/feedback')
    .then((response) => {
      console.log('Feedback Data:', response.data)
      dispatch({type: "GET_FEEDBACK",payload: response.data})
    })
    .catch(error => {
      console.log("Error on GET /api/feedback", error)
    })
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
    </div>
  );
}

export default App;
