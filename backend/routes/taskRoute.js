const express = require ('express')
const { createTask, getTasks, getTask, deleteTask,updateTask } = require('../controllers/taskController')
const Task = require('../model/TaskModel')

const router = express.Router()

// create a Task 
router.post('/',createTask)
 // get
 router.get('/',getTasks)
//    get a single task
router.get('/:id', getTask)
// delete task 
router.delete('/:id', deleteTask)
// update a task
router.put('/:id', updateTask)








module.exports = router 