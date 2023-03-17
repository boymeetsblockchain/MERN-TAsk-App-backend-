const Task = require("../model/TaskModel");

// create Task 
const createTask = async (req,res)=>{
    try {
        const task = await Task.create(req.body)
        res.status(200).json(task)
      } catch (error) {
         res.status(500).json({msg: error.message})
      }
}

// get all tasks
const getTasks = async(req,res)=>{
    try {
        const tasks = await Task.find()
    res.status(200).json(tasks)
    } catch (error) {
       res.status(500).json({msg: error.message})
    }
}
// get a single Task
const getTask = async(req,res)=>{
 try {
    const {id} = req.params
    const task = await Task.findById(id)
    if(!task){
      return res.status(404).json(`No task with this ${id} was found`)
    }
    res.status(200).json(task)
 } catch (error) {
    res.status(500).json({msg: error.message})
 }
}

// delete Task 
const deleteTask = async(req,res)=>{
 try {
    const {id} = req.params
    const task = await Task.findByIdAndDelete(id)
    if(!task){
     return res.status(404).json(`No task with this ${id} was found`)
      }
    res.status(200).send(`task has been deleted`)
 } catch (error) {
    res.status(500).json({msg: error.message})
 }
}

// update Task 
const updateTask = async(req,res)=>{
  try {
     const {id} = req.params
     const task = await Task.findByIdAndUpdate({_id:id}, req.body, {new:true,runValidators:true})
     if(!task){
        return res.status(404).json(`No task with this ${id} was found`)
         }
     res.status(200).json(task)
  } catch (error) {
    res.status(500).json({msg: error.message})
  }
}
module.exports={
    createTask,
    getTasks,
    getTask,
    deleteTask,
    updateTask
}