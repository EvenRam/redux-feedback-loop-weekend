import { useDispatch,} from "react-redux";
import { useState } from 'react';


const QuestionFour = ({fetchFeedback}) => {

    const dispatch = useDispatch();

    const[getFour, setGetFour] = useState ('')

    const handldeSubmit = (event)=> {
        event.preventDefault()
        fetchFeedback()
        setGetFour ('')
    }

    return(
        <>
        <section>
        <h2>Any comments you want to leave? </h2>
             <form onSubmit={handldeSubmit} className="add-fourth">
                <input 
                    type="text"
                    value = {getFour.comments}
                    onChange={(event) => setGetFour(event.target.value)}
                />
             </form>
             <button type="submit">Submit</button>
        </section>
        </>
    )
}

export default QuestionFour