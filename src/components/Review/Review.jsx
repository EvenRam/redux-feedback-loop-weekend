import { useDispatch,useSelector} from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import axios from 'axios';


const Review = ({getTwo}) => {
    const dispatch = useDispatch();

    const history = useHistory();

    const feedback = useSelector( store => store.feelingReducer)
    const underStanding = useSelector( store => store.understandingReducer)
    const SupportReducer = useSelector( store => store.SupportReducer)
    const comments = useSelector( store => store.commentsReducer)


    const ReviewFeedback = (event) => {
    event.preventDefault()
    
    axios({
        method: "POST",
        url: "/api/feedback",
        data: {
            feeling:feedback,
            underStanding: underStanding,
            Support: SupportReducer,
            comment: comments
        }
    
      })
      .then((response) => {
        history.push('./Review')
          })
      .catch((error) => {
        console.error("Something happened on POST request to /api/feedback: ", error)
      })
        
    }
    
    
    return (
        <>
        <div>
            <h1> Review Your Feedback</h1>
           <h3> feeling: {feedback}</h3>
           <h3> Understanding: {underStanding}</h3>
           <h3> Support: {SupportReducer}</h3>
           <h3> comment: {comments}</h3>

            
            <button onClick={ReviewFeedback} type="Submit">Submit</button>
        </div>
        </>
    )
}

export default Review