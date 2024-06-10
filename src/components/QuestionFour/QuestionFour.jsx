import { useDispatch,useSelector} from "react-redux";
import { useState} from 'react';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";



const QuestionFour = () => {

    const dispatch = useDispatch();
    const history = useHistory()


    const comments = useSelector((store) => store.commentsReducer)

    const[getFour, setGetFour] = useState ("");

    const handleSubmit = (event)=> {
        event.preventDefault()
       
        dispatch({
            type: "SET_COMMENTS",
            payload: getFour
        })
        history.push("/Review")

    }

    return(
        <>
        <section>
        <h2>Any comments you want to leave? </h2>
             <form onSubmit={handleSubmit} className="add-fourth">
                <input 
                    data-testid="input"
                    type="text"
                    value = {getFour}
                    onChange={(event) => setGetFour(event.target.value)}
                />
             </form>
             <button onClick={handleSubmit} type="Submit">Submit</button>
        </section>
        </>
    )
}

export default QuestionFour