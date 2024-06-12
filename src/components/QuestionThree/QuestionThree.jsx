import { useDispatch,useSelector} from "react-redux";
import { useState } from 'react';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


const QuestionThree = ({}) => {

    const dispatch = useDispatch();
    const history = useHistory()


    const SupportReducer = useSelector((store) => store.SupportReducer)


    const[getThree,setGetThree] = useState ([])

const handleSubmit = (event) => {
event.preventDefault()
console.log("reply",)
dispatch({
    type: 'SET_SUPPORT',
    payload: getThree
})

history.push("/QuestionFour")


}
    return(
        <>
        <section>
        <h2>How well are you being supported? </h2>

        <form onSubmit={handleSubmit} className="add-third-feedback">
            <input
            data-testid="input"
            type ='number'
            value={getThree}
            onChange={(event) => setGetThree(event.target.value)}/>
        </form>
        <button onClick={handleSubmit} type="Submit">Submit</button>
        </section>
        </>
    )
}

export default QuestionThree