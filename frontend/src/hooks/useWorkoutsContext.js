import { WorkoutsContext } from "../context/WorkoutContext";
import { useContext } from "react";

export  const useWorkoutsContext = () =>{
        const context = useContext(WorkoutsContext) //Value passed to the provider component, using the hook and passing to the object
      //Object stored in the Context Constant   
if(!context){
    throw Error('use Workout context must be used inside WorkoutContextprovider')
}

return context 
    }                                                 