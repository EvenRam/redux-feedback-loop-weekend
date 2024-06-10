//import { useHistory } from "react-router-dom";
import { useDispatch,useSelector} from "react-redux";
import { useState } from 'react';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";



const questionTwo = () => {
    const dispatch = useDispatch();
    const history = useHistory()

    const underStanding = useSelector( store => store.understandingReducer)
   
    const[getTwo,setGetTwo] = useState (0)

    const handleSubmit = (event) => {
    event.preventDefault()
    dispatch({
        type: 'SET_UNDERSTANDING',
        payload: getTwo,
    })
    history.push("/QuestionThree")

    }
    
    

    return (
        <>
        <div>
            <h2> How well are you understanding the content?</h2>
            <form onSubmit={handleSubmit} className= "add-feedback">
                <input 
                data-testid="input"
                type='number'
                vaule= {getTwo}
                onChange={(event)=> setGetTwo(event.target.value)}/>
            </form>
            <button onClick={handleSubmit} type="Submit">Submit</button>
        </div>
        </>
    )
}

export default questionTwo