import { useState } from 'react';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react'


const questionsOne = () => {

    const dispatch = useDispatch();

    const feedback = useSelector((store) => store.feelingReducer)

    const [getReply, setGetReply] = useState([])


  useEffect(() => {
    console.log('in useEffect')
    fetchFeedback();
  }, []);

  const fetchFeedback = () => {
    axios({
      method: 'GET',
      url: `/api/feedback`
    })
      .then((response) => {
        console.log(response.data);
        // TODO - update this to dispatch to Redux
        dispatch({type:'SET_FEELING', payload:response.data })
      })
      .catch((error) => {
        console.log('error on GET', error);
      });
  };


    const handleSubmit = (event) => {
        event.preventDefault()

    axios({
        method: "POST",
        url: "/api/feedback",
        data: {getReply}
      })
      .then((response) => {
        // Reset 
        setGetReply("")
        // Refetch
        feedback()
      })
      .catch((error) => {
        console.error("Something happened on POST request to /api/feedback: ", error)
      })
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

export default questionsOne
