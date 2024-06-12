import { useSelector} from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import axios from 'axios';


const Review = () => {
    

    const history = useHistory();

    const feeling = useSelector( store => store.feelingReducer)
    const underStanding = useSelector( store => store.understandingReducer)
    const support = useSelector( store => store.supportReducer)
    const comments = useSelector( store => store.commentsReducer)


    const ReviewFeedback = (event) => {
    event.preventDefault()
    
    axios({
        method: "POST",
        url: "/api/feedback",
        data: {
            feeling:feeling,
            understanding: underStanding,
            support: support,
            comments: comments
        }
    
      })
      .then((response) => {
      
          })
      .catch((error) => {
        console.error("Something happened on POST request to /api/feedback: ", error)
      })
          history.push('/')
    }
    
    
    return (
        <>
        <div>
            <h1> Review Your Feedback</h1>
           <h3> Feeling: {feeling}</h3>
           <h3> Understanding: {underStanding}</h3>
           <h3> Support: {support}</h3>
           <h3> comment: {comments}</h3>

            
            <button onClick={ReviewFeedback} type="submit">Submit</button>
        </div>
        </>
    )
}

export default Review