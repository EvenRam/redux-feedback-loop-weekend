import { useHistory } from "react-router-dom";
import { useDispatch, useSelector} from "react-redux";
import { useState } from 'react';

//import QuestionOne from "../QuestionOne/QuestionOne";

const questionTwo = ({fetchFeedback}) => {
    const dispatch = useDispatch();
    //const feedback = useSelector(store => store.feedbackReducer)
    //const underStandingReply = useSelector( store => store.understandingReducer)
    const history = useHistory();

    const[getReply,setGetReply] = useState ([])

    const handleSubmit = (event) => {
    event.preventDefault()
    fetchFeedback()
    setGetReply('')
        
    }
    
    

    return (
        <>
        <div>
            <h2> How well are you understanding the content?</h2>
            <form onSubmit={handleSubmit} className= "add-feedback">
                <input 
                type='number'
                vaule= {getReply.understanding}
                onChange={(event)=> setGetReply(event.target.value)}/>
            </form>
            <button type='submit'>Submit</button>
        </div>
        </>
    )
}

export default questionTwo