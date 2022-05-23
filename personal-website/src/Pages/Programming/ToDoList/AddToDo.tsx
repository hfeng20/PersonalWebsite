import React, {useState} from 'react';


const AddToDo = (props:{AddTask:(userInput:any) => any}) => {
    var {AddTask} = props
    const [userInput, setUserInput] = useState("")

    const handleChange = (e:any) => {
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit = (e:any) => {
        e.preventDefault()
        AddTask(userInput)
        setUserInput("")
    }

    return (
        <form onSubmit = {handleSubmit}>
            <input value = {userInput} onChange={handleChange}/>
            <button>Submit</button>
        </form>
    )
}

export default AddToDo
