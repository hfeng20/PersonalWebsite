import React, {useState} from 'react';
import './ToDoList.css'

const AddToDo = (props:{AddTask:(taskInput:string, descriptionInput:string, tagsInput:string[]) => void}) => {
    var {AddTask} = props
    const [taskInput, setTaskInput] = useState("")
    const [descInput, setDescInput] = useState("")
    const [tagsInput, setTagsInput] = useState([])

    const handleTaskChange = (e:any) => {
        setTaskInput(e.currentTarget.value)
    }

    const handleDescChange = (e:any) => {
        setDescInput(e.currentTarget.value)
    }

    const handleSubmit = (e:any) => {
        e.preventDefault()
        AddTask(taskInput, descInput, tagsInput)
        setTaskInput("")
        setDescInput("")
    }
    return (
        <form onSubmit = {handleSubmit}>
            <input value = {taskInput} onChange={handleTaskChange}/>
            <input value = {descInput} onChange={handleDescChange}/>
            <button>Submit</button>
        </form>
    )
}

export default AddToDo
