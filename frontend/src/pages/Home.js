import { useEffect} from 'react' // React hooks 
import { useWorkoutsContext } from '../hooks/useWorkoutsContext'

//components
import WorkoutDetails from '../components/WorkoutDetails'
import WorkoutForm from '../components/WorkoutForm'


const Home = () => {

    const {workouts,dispatch} = useWorkoutsContext( ) //global context

    // const [workouts, setWorkouts] =useState(null)------no longer needed as we importing useWorkoutContext
   //Fires the function when the component is Rended

 useEffect(() =>{
    const fetchWorkouts = async () =>{
        const response = await fetch('/api/workouts')
        const json  = await response.json()  //after recieving the response from the server it extracts the json bidy from json()

        if (response.ok){
            dispatch({type: 'SET_WORKOUTS', payload: json}) //entire array of workouts

        }

    } 
    fetchWorkouts()
 },[dispatch]) //Providing a empty array

    return (
        <div className="home">
            <div className="workouts">
                {workouts && workouts.map((workout) => ( 
                       <WorkoutDetails key={workout._id} workout={workout}/> //access to the props inside the component
                ))}
            </div>
            <WorkoutForm/>
        </div>
    )
}

export default Home 