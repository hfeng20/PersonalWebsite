import React, {useState} from 'react';
import logo from './logo.svg';
import musician from './musician.JPG'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './ToDoList.css';
import Header from '../../../Components/Header/Header';
import Data from './Data.json'
import ToDo from './ToDo'
import PostIt from './postitnote.png'
import AddToDo from './AddToDo'
import background from './ToDoListBackground.webp'
import TodoObj from './TodoObj'

export default function ToDoList(): JSX.Element {
    let toDoObjArray:TodoObj[] = Data.map(todo => {
        let newTodo: TodoObj = {task: todo.task, description: "Default", tag: "Default", id: todo.id, complete: todo.complete}
        return newTodo
    })
    const [ toDoList, setToDoList ] = useState(toDoObjArray)
    const handleFilter = () => {
        let filtered = toDoList.filter(task => {
          return !task.complete;
        });
        setToDoList(filtered);
      }
    const handleToggle = (id:number) => {
        let mapped = toDoList.map(task => {
            return id ===  task.id ? { ...task, complete: !task.complete } : { ...task};
        })
        setToDoList(mapped);
    }
    
    const addTask = (taskInput:string, descriptionInput:string, tagInput:string) => {
        if(taskInput.length < 1) {
            return
        }
        let copy = [...toDoList];
        copy = [{id: toDoList.length + 1, task: taskInput, complete: false, tag: tagInput, description: descriptionInput}, ...copy]
        setToDoList(copy)
    }

    const clearAll = () => {
        setToDoList([])
    }

    const completeAll = () => {
        let mapped = toDoList.map(task => {
            return { ...task, complete: true };
        })
        setToDoList(mapped);
    }

    const toggleAll = () => {
        let mapped = toDoList.map(task => {
            return { ...task, complete: !task.complete };
        })
        setToDoList(mapped);
    }
    const [ showAddTodo , setShowAddTodo ] = useState(false)
    const showTemplate = () => {
        setShowAddTodo(true)
    }
    const hideTemplate = () => {
        setShowAddTodo(false)
    }

    return(    
        <div className = "ToDoList">
            <Header back = '/Programming' title = 'To-do List'></Header>
            <div className = "Body">
                <div className = "TodoHeader">
                    <h1>Todo</h1>
                    <button className = "addTodo" onClick={showTemplate} title="Add Todo">Add Todo</button>
                    {/* <div className = "Dropdown">
                        <button className = "addToDo"> New Todo </button>
                        <div className = "dropdown-content" >
                            <AddToDo AddTask = {addTask} ></AddToDo>
                        </div>
                    </div> */}
                </div>
                <AddToDo show = {showAddTodo} setShow = {setShowAddTodo} AddTask = {addTask}></AddToDo>
                {toDoList.map(todo => {
                    return (
                        <ToDo todo={todo} handleToggle={handleToggle} />
                    )
                })}
            </div>
            {/* <button className="ClearCompleted" onClick = {handleFilter}> Clear Completed</button>
            <button className="ClearAll" onClick = {clearAll}>Clear All</button>
            <button className="CompleteAll" onClick = {completeAll}>Complete All</button>
            <button className="ToggleAll" onClick = {toggleAll}>Toggle All</button> */}
        </div>
    );
}