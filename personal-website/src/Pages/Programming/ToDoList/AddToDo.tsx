import React, {useState} from 'react';
import './ToDoList.css'

const AddToDo = (props:{show:boolean, setShow: React.Dispatch<React.SetStateAction<boolean>>, AddTask:(taskInput:string, descriptionInput:string, tagInput:string) => void}) => {
    var {show, setShow, AddTask} = props
    const [taskInput, setTaskInput] = useState("")
    const [descInput, setDescInput] = useState("")
    const [tagInput, setTagInput] = useState("Select...")

    const handleTaskChange = (e:any) => {
        setTaskInput(e.currentTarget.value)
    }

    const handleDescChange = (e:any) => {
        setDescInput(e.currentTarget.value)
    }

    const [ invalidTask, setInvalidTask ] = useState(false)
    const [ invalidDesc, setInvalidDesc ] = useState(false)
    const [ invalidTag, setInvalidTag ] = useState(false)

    let timeout:NodeJS.Timeout

    const handleSubmit = (e:any) => {
        clearTimeout(timeout)
        e.preventDefault()
        var failed = false
        if(taskInput.length < 1) {
            failed = true
            setInvalidTask(true)
        }
        if(descInput.length < 1) {
            failed = true
            setInvalidDesc(true)
        }
        if(tagInput === "Select...") {
            failed = true
            setInvalidTag(true)
        }
        if(failed) {
            timeout = setTimeout(() => {
                setInvalidTask(false)
                setInvalidDesc(false)
                setInvalidTag(false)
            }, 200)
            return;
        }
        AddTask(taskInput, descInput, tagInput)
        setTaskInput("")
        setDescInput("")
        setTagInput("Select...")
        setShow(false)
    }

    const setTag = (newTag:string) => {
        console.log(newTag)
        setTagInput(newTag)
    }

    return (
        <div className = {show ? "showTemplate":"hideTemplate"}>
            <div className = "AddToDoContainer">
            <div className = "IndicatorContainer">
                <div className="Todo"></div>
            </div>
                <form className = "TodoDescription" onSubmit = {handleSubmit}>
                    <input className = {invalidTask ? "failedInputForm":"inputForm"} placeholder = "Todo" value = {taskInput} onChange={handleTaskChange}/>
                    <input className = {invalidDesc ? "failedInputForm":"inputForm"} placeholder = "Description" value = {descInput} onChange={handleDescChange}/>
                    <button className = "hideTemplate"></button>
                </form>
                <div className = "SelectTagContainer">
                    <button className={invalidTag ? "InvalidSelectTag":"SelectTag"}>{tagInput}</button>
                    <div className = "dropdown">
                        <button className="textOption" onClick = {() => setTag("Home")}>Home</button>
                        <button className="textOption" onClick = {() => setTag("Work")}>Work</button>
                        <button className="textOption" onClick = {() => setTag("Fitness")}>Fitness</button>
                        <button className="textOption" onClick = {() => setTag("School")}>School</button>
                        <button className="textOption" onClick = {() => setTag("Nutrition")}>Nutrition</button>
                        <button className="textOption" onClick = {() => setTag("Pets")}>Pets</button>
                    </div>
                </div>
            </div>
            <button className = "Button" onClick = {handleSubmit}> Submit </button>
            <button className = "Button" onClick = {() => {setShow(false)}}> Cancel </button>
        </div>
    )
    // return (
    //     <form onSubmit = {handleSubmit}>
    //         <input value = {taskInput} onChange={handleTaskChange}/>
    //         <input value = {descInput} onChange={handleDescChange}/>
    //         <button>Submit</button>
    //     </form>
    // )
}

export default AddToDo
