import { useState } from 'react';
import axios from 'axios'
import { useDispatch } from 'react-redux';


const questionsOne = ({fetchFeedback}) => {
    const dispatch = useDispatch();

  const[reply,setReply] = useState ([])

const handleSubmit = (event) => {
event.preventDefault()

    const newFeedback = {reply: 'feeling', reply:"understanding",reply:"support",reply:"comments",}
    axios.post('/api/feedback', newFeedback)
    .then((response)=>{
      fetchFeedback()
      setReply('')
    })
    .catch(error => {
        console.log("Error on POST /api/books", error)
    })
}

const questionTwo = () => {
    dispatch({ type: 'ADD_QUESTIONTWO', payload: reply});
    history.pushState('./questionTwo')
    console.log('Tell me more', questionTwo)
}

    return(
        <>
       <section>
        <h2>How are you feeling today? </h2>
            <form onSubmit={handleSubmit} className= "add-feedback">
                <input 
                type='number'
                vaule= {reply.feeling}
                onChange={(event)=> setReply(event.target.value)}/>
            </form>
            <button type='submit'>Submit</button>

      </section> 
        </>
    )
}

export default questionsOne