import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import QuestionsOne from '../QuestionOne/QuestionOne';
import QuestionTwo from '../QuestionTwo/QuestionTwo';
import QuestionThree from '../QuestionThree/QuestionThree';
import QuestionFour from '../QuestionFour/QuestionFour';




function App() {

  const dispatch = useDispatch()



  useEffect(() => {
    console.log('in useEffect')
    fetchFeedback();
  }, []);

  const fetchFeedback = () => {
    axios({
      method: 'GET',
      url: `/api/feedback`
    })
      .then((response) => {
        console.log(response.data);
        // TODO - update this to dispatch to Redux
        dispatch({type:'SET_FEELING', payload:response.data })
      })
      .catch((error) => {
        console.log('error on GET', error);
      });
  };



  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Feedback!</h1>
          <h4>Don't forget it!</h4>
        </header>

        <Route exact path="/">
          <QuestionsOne fetchFeedback={fetchFeedback} />
          <hr />
          <Link to="/QuestionTwo"><button>Next</button></Link>
        </Route>



        <Route path="/QuestionTwo">
          <QuestionTwo />
          <div>
            <hr />
            <Link to="/QuestionThree"><button>Next</button></Link>
          </div>
        </Route>

        <Route path="/QuestionThree">
          <QuestionThree fetchFeedback={fetchFeedback}/>
          <div>
            <hr />
            <Link to="/QuestionFour"><button>Next</button></Link>
          </div>
        </Route>

        <Route path="/QuestionFour">
          <QuestionFour fetchFeedback={fetchFeedback} />
          <div>
            <hr />
            <Link to="/QuestionFour"><button>Next</button></Link>
          </div>
        </Route>

        <section>
        </section>
      </div>


    </Router>
  );
}

export default App;