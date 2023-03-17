 const dotenv = require("dotenv").config()
const  express = require('express')
const PORT = process.env.PORT||5000;
const mongoose = require('mongoose')
const Task = require('./model/TaskModel')
const taskRoutes = require('./routes/taskRoute')
const cors = require("cors")
const app = express()
app.use(cors())
// middleware 

// for getting json data
app.use(express.json())
// for getting form data 
app.use(express.urlencoded({extended:false}))
// task routes
app.use("/api/tasks/", taskRoutes)
//  connect to mongoDB

mongoose
   .connect(process.env.MONGO_URI)
   .then(()=>{
    app.listen(PORT, ()=> {
      console.log(`${PORT} is active and running`)
  })
   })
   .catch(error => console.log(error))



