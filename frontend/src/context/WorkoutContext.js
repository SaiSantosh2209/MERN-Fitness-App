//Importing the context function from React

import { createContext, useReducer } from 'react'
//Creating a context and storing in a constant
 export const  WorkoutsContext = createContext() //created a custom component

 export const workoutsReducer = (state, action ) =>{
   switch (action.type) {
    case 'SET_WORKOUTS':  // setting all of the workouts 
        return {
            workouts : action.payload //a array of all workouts {payload------>action----->dispatch}
        }
        case 'CREATE_WORKOUT': //keeping the localState in Sync with the database and not interacting with it 
            return{
                workouts: [action.payload, ...state.workouts] // a single new workout object in the array 
            }
            case 'DELETE_WORKOUT':
                return {
                    workouts : state.workouts.filter((w) => w._id !== action.payload._id)
                }
            default:
                return state
   }
 }

 export const WorkoutContextProvider =({ children }) => { //takes the component from the props
//Represents whatever components or templates are present in the props and wraps
 const [state,dispatch] =useReducer(workoutsReducer , {
    workouts:null
 })


    return( //wraps the roots of the components // Putting it so that it will be available in all the components
    // ... represents spread operator
        <WorkoutsContext.Provider value={{...state,dispatch}}>
            {children}
        </WorkoutsContext.Provider>
    )
 }  //returns the actual provider of the context 