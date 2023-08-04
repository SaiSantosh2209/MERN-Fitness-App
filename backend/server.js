// Registration of the Express application 

require('dotenv').config() // attact the environment variables to the process object

const express = require('express')
const mongoose = require('mongoose') // Helps the database
const workoutRoutes = require('./routes/workouts') // Connected the routes 

//expressApp 
const app = express()

//Middleware
app.use(express.json()) //For sending the data to the server use need to use a express app middleware
                        // ait basically looks that if some body has come to the request by sending it to the server and further passes it attaches it to yhe request object 

app.use((req,res,next) =>{ //Without the "next" middleware we wont be able to execute res,req function
 console.log(req.path, req.method)
 next()
})

//Routes
app.use('/api/workouts',workoutRoutes)// attach all these routes to the app 
                                     // Thus in order to find the routes we need a specific path 

//Connect to DB
mongoose.connect(process.env.MONGO_URI)//Check .env for reference      

//.then Method
  .then(()=>{
    //Listen in the server port 
app.listen(process.env.PORT, ()=> {//process is the global variable used in the node modules 
    console.log("Server is Running on port",process.env.PORT)//the value is assigned in the env file
})
  })

// .catch Method
  .catch((error)=>{
    console.log(error)
  })


