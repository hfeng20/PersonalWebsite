import React, {useState} from 'react';
import './ToDoList.css'

const AddToDo = (props:{AddTask:(taskInput:any) => any}) => {
    var {AddTask} = props
    const [taskInput, setUserInput] = useState("")

    const handleChange = (e:any) => {
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit = (e:any) => {
        e.preventDefault()
        AddTask(taskInput)
        setUserInput("")
    }
    return (
        <form className="AddToDo" onSubmit = {handleSubmit}>
            <input value = {taskInput} onChange={handleChange}/>
            <button>Submit</button>
        </form>
    )
}

export default AddToDo
