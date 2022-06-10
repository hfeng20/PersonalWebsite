import React, {useEffect, useState} from 'react';
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
    let [ toDoObjArray, setToDoObjArray ] = useState(Data.map(todo => {
        let newTodo: TodoObj = {task: todo.task, description: "Default", tag: "Default", id: todo.id, complete: todo.complete}
        return newTodo
    }))
    let IDNumber = toDoObjArray.length + 1;
    const [ toDoList, setToDoList ] = useState(toDoObjArray.filter(todo => !todo.complete))
    const [ completedTodoList, setCompletedTodoList ] = useState(toDoObjArray.filter(todo => todo.complete))
    const handleFilter = () => {
        let filtered = toDoList.filter(task => {
          return !task.complete;
        });
        setToDoList(filtered);
      }
    const handleToggle = (id:number) => {
        let mapped = toDoObjArray.map(task => {
            return id ===  task.id ? { ...task, complete: !task.complete } : { ...task};
        })
        setToDoObjArray(mapped)
    }
    
    const addTask = (taskInput:string, descriptionInput:string, tagInput:string) => {
        if(taskInput.length < 1) {
            return
        }
        let copy = [...toDoObjArray];
        copy = [{id: IDNumber, task: taskInput, complete: false, tag: tagInput, description: descriptionInput}, ...copy]
        IDNumber++;
        setToDoObjArray(copy)
    }

    const clearAll = () => {
        setToDoObjArray([])
    }

    const completeAll = () => {
        let mapped = toDoObjArray.map(task => {
            return { ...task, complete: true };
        })
        setToDoObjArray(mapped);
    }

    const toggleAll = () => {
        let mapped = toDoObjArray.map(task => {
            return { ...task, complete: !task.complete };
        })
        setToDoObjArray(mapped);
    }
    const [ showAddTodo , setShowAddTodo ] = useState(false)
    const showTemplate = () => {
        setShowAddTodo(true)
    }
    const hideTemplate = () => {
        setShowAddTodo(false)
    }

    const clearCompleted = () => {
        setToDoObjArray(toDoObjArray.filter(task => !task.complete))
    }


    useEffect(() => {
        setToDoList(toDoObjArray.filter(todo => !todo.complete))
        setCompletedTodoList(toDoObjArray.filter(todo => todo.complete))
    }, [toDoObjArray])

    return(    
        <div className = "ToDoList">
            <a href = '.'> Back </a>
            <div className = "Body">
                <div className = "SubHeader">
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
                <div className = "SubHeader">
                    <h1>Completed</h1>
                    <button className = "addTodo" onClick={clearCompleted} title="Add Todo">Clear</button>
                    {/* <div className = "Dropdown">
                        <button className = "addToDo"> New Todo </button>
                        <div className = "dropdown-content" >
                            <AddToDo AddTask = {addTask} ></AddToDo>
                        </div>
                    </div> */}
                </div>
                <div className = "CompletedTodos">
                    {completedTodoList.map(todo => {
                        return (
                            <ToDo todo={todo} handleToggle={handleToggle} />
                        )
                    })}
                </div>
            </div>
            {/* <button className="ClearCompleted" onClick = {handleFilter}> Clear Completed</button>
            <button className="ClearAll" onClick = {clearAll}>Clear All</button>
            <button className="CompleteAll" onClick = {completeAll}>Complete All</button>
            <button className="ToggleAll" onClick = {toggleAll}>Toggle All</button> */}
        </div>
    );
}