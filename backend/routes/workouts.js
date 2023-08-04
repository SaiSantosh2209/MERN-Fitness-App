const express = require('express')
const {
    createWorkout,getWorkout,
    getWorkouts,updateWorkout,deleteWorkout
} =require('../controllers/workoutController')


const router  = express.Router()

//GET all workouts 
router.get('/',getWorkouts)

//GET a Single Workout 
router.get('/:id',getWorkout)

//POST a new workout
router.post('/',createWorkout) // controller function from workout controller

//DELETE a workout
router.delete('/:id',deleteWorkout)


//UPDATE a new workout
router.patch('/:id',updateWorkout)


module.exports = router 