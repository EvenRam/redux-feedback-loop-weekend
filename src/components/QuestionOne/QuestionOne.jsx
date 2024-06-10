import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


const QuestionsOne = () => {

    const dispatch = useDispatch();
    const history = useHistory()


    const feedback = useSelector((store) => store.feelingReducer)

    const [getReply, setGetReply] = useState(0)

    const handleGetReply = (event) => {
        setGetReply(event.target.value)
    }


  

    const handleSubmit = () => {
        dispatch({type:'SET_FEELING', 
        payload:getReply 
    })
    history.push("/QuestionTwo")
    }
    

    return (
        <>
            <section>
                <h2>How are you feeling today? </h2>
                <form onSubmit={handleSubmit} className="add-feedback">
                    <input
                        data-testid="input"
                        type='number'
                        vaule={getReply}
                        onChange={(event) => setGetReply(event.target.value)} />
                </form>
                <button onClick={handleSubmit} type='submit'>Submit</button>

            </section>
        </>
    )
}

export default QuestionsOne
