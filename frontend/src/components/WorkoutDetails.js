import { useWorkoutsContext } from '../hooks/useWorkoutsContext' // mainly used for adding a new workout by clicking the button instead of refreshing the page 

// date fns

import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const WorkoutDetails = ({workout}) =>{
const {dispatch} = useWorkoutsContext()

    const handleClick = async () => {
  const response = await fetch('/api/workouts/' + workout._id ,{
    method:'DELETE'
  })

  const json = await response.json()

  if (response.ok) {
   dispatch({type: 'DELETE_WORKOUT', payload : json})
  }

    }

    return(
<div className="workout-details">
<h4>{workout.title}</h4>
<p><strong>Load kg: </strong>{workout.load}</p>
<p><strong>Reps </strong>{workout.reps}</p>
<p>{formatDistanceToNow(new Date(workout.createdAt), {addSuffix: true})}</p>    
<span className="material-symbols-outlined" onClick={handleClick}>delete</span>
</div>
    )
}  // Above fdtn is basically giving a specific time at when the workout was added ex: two days ago
// we did by installing date fns by writing {{{{npm install date-fns}}}}


export default WorkoutDetails