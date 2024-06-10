import React from 'react';
import './App.css';
import { HashRouter as Router, Route, Link } from "react-router-dom";

import QuestionsOne from '../QuestionOne/QuestionOne';
import QuestionTwo from '../QuestionTwo/QuestionTwo';
import QuestionThree from '../QuestionThree/QuestionThree';
import QuestionFour from '../QuestionFour/QuestionFour';
import Review from '../Review/Review';
import Thankyou from '../ThankYou/ThankYou';




function App() {





  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Feedback!</h1>
          <h4>Don't forget it!</h4>
        </header>

        <Route exact path="/">
          <QuestionsOne  />
          <hr />
          <Link to="/QuestionTwo"><button>Next</button></Link>
        </Route>



        <Route path="/QuestionTwo">
          <QuestionTwo />
          <div>
            <hr />
            <Link to="/QuestionThree"><button data-testid>Next</button></Link>
          </div>
        </Route>

        <Route path="/QuestionThree">
          <QuestionThree />
          <div>
            <hr />
            <Link to="/QuestionFour"><button data-testid>Next</button></Link>
          </div>
        </Route>

        <Route path="/QuestionFour">
          <QuestionFour  />
          <div>
            <hr />
            <Link to="/Review"><button data-testid>Next</button></Link>
          </div>
        </Route>

        <Route path="/Review">
          <Review />
          <div>
            <hr />
            <Link to="/Thankyou">< button data-testid>Next</button></Link>
          </div>
          </Route>

          <Route path="/Thankyou">
          <Thankyou/>
          <div>
            <hr />
            <Link to="/"><button data-testid>Next</button></Link>
          </div>
          </Route>

      </div>



    </Router>
  );
}

export default App;