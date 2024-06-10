import { useDispatch,useSelector} from "react-redux";
import { useState} from 'react';


const QuestionFour = () => {

    const dispatch = useDispatch();

    const comments = useSelector((store) => store.commentsReducer)

    const[getFour, setGetFour] = useState ([])

    const handleSubmit = (event)=> {
        event.preventDefault()
       
        dispatch({
            type: '"SET_COMMENTS"',
            payload: getFour
        })
    
    }

    return(
        <>
        <section>
        <h2>Any comments you want to leave? </h2>
             <form onSubmit={handleSubmit} className="add-fourth">
                <input 
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