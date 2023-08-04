const { request } = require('express')
const Workout = require('../models/workoutModel') //path got high
const mongoose = require('mongoose')

//Workout controller functions 

//get all workouts
const getWorkouts = async (req,res)=>{
    const workouts = await Workout.find({}).sort({createdAt: -1})
    res.status(200).json(workouts)
}

//get a single workout

const getWorkout = async(req,res)=>{
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'NOT_SUCH_WORKOUT'})
    }

    const workout = await Workout.findById(id)

    if (!workout) {
        return res.status(404).json({error:'NO_SUCH_WORKOUT'})
    }

    res.status(200).json(workout)
}

//Create a new workout 

const createWorkout = async (req, res) => {
    const { title, load, reps } = req.body

 let emptyFields =[]

 if(!title) {
    emptyFields.push('title')
 }
  
 if(!load){
    emptyFields.push('load')
 }
 
 if(!reps){
    emptyFields.push('reps')
 }

 if(emptyFields.length > 0) {
    return  res.status(400).json({error : 'Please Fill all the Fields', emptyFields     })
 }


    // add doc to db
    try { //importing the workout model
        const workout = await Workout.create({ title, load, reps })//Storing the response of Workout document in constant workout
        res.status(200).json(workout)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}



//Delete a workout

const deleteWorkout =async (req,res) =>{
    const {id} = req.params // this is used when the API Endpoint consist of an id

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'NOT_SUCH_WORKOUT'})
    }
    const workout = await Workout.findOneAndDelete({_id:id})
    if (!workout) {
        return res.status(400).json({error:'NO_SUCH_WORKOUT'})
    }
    res.status(200).json(workout)

}

//Update a workout 

const updateWorkout = async(req,res) =>{
    const {id} = req.params 
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'NOT_SUCH_WORKOUT'})
    }
    const workout = await Workout.findOneAndUpdate({_id:id},{...req.body})
    if (!workout) {
      return res.status(400).jsin({error:'NO_SUCH_WORKOUT'})
    }
    res.status(200).json(workout)
}


module.exports ={
    getWorkout,
    getWorkouts,
    createWorkout,
    updateWorkout,
    deleteWorkout
}