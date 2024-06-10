import { useDispatch,useSelector} from "react-redux";
import { useState } from 'react';


const Review = ({getTwo}) => {
    const dispatch = useDispatch();

    const feedback = useSelector( store => store.feelingReducer)
    const underStanding = useSelector( store => store.understandingReducer)
    const SupportReducer = useSelector( store => store.SupportReducer)
    const comments = useSelector( store => store.commentsReducer)

   

    const handleSubmit = (event) => {
    event.preventDefault()
    dispatch({
        type: 'SET_UNDERSTANDING',
        payload: getTwo,
    })
        
    }
    
    

    return (
        <>
        <div>
            <h1> Review Your Feedback</h1>
           <h2>{getTwo}</h2>
            
            <button onClick={handleSubmit} type="Submit">Submit</button>
        </div>
        </>
    )
}

export default Review