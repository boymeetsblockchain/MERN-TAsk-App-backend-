import { useState } from "react"
import { toast } from "react-toastify"
import Task from "./Task"
import TaskForm from "./TaskForm"
import axios from 'axios'
function TaskList() {
    const[formData,setFormData] = useState({
        name:"",
        completed:""
    })
    const{name} = formData
    
    const handleinputChange = (e)=>{
        const {name, value}= e.target
        setFormData({...formData, [name]: value})
    }
    
    const createTask = async (e)=>{
       e.preventDefault()
       if(name === ""){
        return toast.error("input field cannot be empty")
       }
       try {
          await axios.post("http://localhost:5000/api/tasks",formData)
          toast.success("task added succesfully")
          setFormData({...formData, name: ""})
          console.log(formData)
       } catch (error) {
        // toast.error(error.message)
        console.log(error)
       }
    }
  return (
    <div>
        <h2>Task Manager</h2>
         <TaskForm name ={name} handleinputChange={handleinputChange} createTask={createTask}/>
         <div className="--flex-between --pb">
             <p>
                <b>Total Tasks :</b>0
             </p>
             <p>
                <b>Completed Tasks :</b>0
             </p>
         </div>
         <hr/>
         <Task/>
    </div>
  )
}

export default TaskList