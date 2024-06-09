import { useDispatch,} from "react-redux";
import { useState } from 'react';

const QuestionThree = ({fetchFeedback, reply}) => {

    const dispatch = useDispatch();

    

    const[getthree,setGetThree] = useState ([])

const handleSubmit = (event) => {
event.preventDefault()
    fetchFeedback()
    setGetThree('')

}

const addToReview = () => {
    console.log("reply",reply.support)
dispatch({
    type: 'GET_FEEDBACK',
    payload: reply
})

}
    return(
        <>
        <section>
        <h2>How well are tyou being supported? </h2>

        <form onSubmit={handleSubmit} className="add-third-feedback">
            <input
            type ='number'
            value={getthree.support}
            onChange={(event) => setGetThree(event.target.value)}/>
        </form>
        <button onClick={addToReview} type="Submit">Submit</button>
        </section>
        </>
    )
}

export default QuestionThree