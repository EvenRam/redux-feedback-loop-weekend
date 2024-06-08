import { useState } from 'react';
import axios from 'axios'


const questionsOne = ({fetchFeedback}) => {

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