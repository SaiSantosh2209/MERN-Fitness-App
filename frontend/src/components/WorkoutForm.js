import { useState } from "react"
import { useWorkoutsContext } from '../hooks/useWorkoutsContext' // mainly used for adding a new workout by clicking the button instead of refreshing the page 


const WorkoutForm = () => {
    const {dispatch} = useWorkoutsContext()
    const [title, setTitle] = useState('')
    const [load, setLoad] = useState('')
    const [reps, setReps] = useState('')
    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields] =useState([])

  const handleSubmit =async (e) =>{
    e.preventDefault()


    const workout ={title, load,reps}

    const response = await fetch('/api/workouts',{
        method: 'POST',
        body: JSON.stringify(workout),// basically converting the object from into JSON string
         headers:{
            'Content-Type' : 'application/json'
         }
    })
    const json = await response.json()

    if(!response.ok){
        setError(json.error)
        setEmptyFields(json.emptyFields)
    }
    if(response.ok){
        setTitle('')
        setLoad('')
        setReps('')
        setError(null)
        setEmptyFields([])
        console.log('Added a New workout',json)
        dispatch({type: 'CREATE_WORKOUT', payload:json})
         //diapatched for adding the workout from the Json format
    }
  }

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a new Workout🔥</h3>
            <label>🏋️Exercise Title</label>
            <input type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                className={emptyFields.includes('title') ? 'error' : ''} //if error tile is present in the empty fields
            />

            <label>💪Load(in kg):</label>
            <input type="number"
                onChange={(e) => setLoad(e.target.value)}
                value={load}
                className={emptyFields.includes('load') ? 'error' : ''} //if error load is present in the empty fields
            />

              <label>🚩Reps:</label>
            <input type="number"
                onChange={(e) => setReps(e.target.value)}
                value={reps}
                className={emptyFields.includes('reps') ? 'error' : ''} //if error reps is present in the empty fields
            />

<button>Add a New Workout</button>
{error && <div className="error">{error}</div>}
        </form>
    )
}



export default WorkoutForm