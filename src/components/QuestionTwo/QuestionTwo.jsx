//import { useHistory } from "react-router-dom";
import { useDispatch,useSelector} from "react-redux";
import { useState } from 'react';


const questionTwo = () => {
    const dispatch = useDispatch();
    const underStanding = useSelector( store => store.understandingReducer)
   
    const[getTwo,setGetTwo] = useState ([])

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
            <h2> How well are you understanding the content?</h2>
            <form onSubmit={handleSubmit} className= "add-feedback">
                <input 
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