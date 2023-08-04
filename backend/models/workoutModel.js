const mongoose = require('mongoose')

//Creating a Schema

const Schema = mongoose.Schema //Function for creating a Schema

const workoutSchema = new Schema({    //Creating a new Schema
title:{
    type: String,
    required: true
},
reps:{
    type: Number,
    require:true
},
load:{
    type:Number,
    require:true //Properties for the Schema
}
}
,{timestamps:true}) // Passing a new object thus creates a new timestamp while opening a new document.

//Making a Model based on the Schema

module.exports = mongoose.model('Workout',workoutSchema)