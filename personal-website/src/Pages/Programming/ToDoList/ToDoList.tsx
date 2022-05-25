import React, {useState} from 'react';
import logo from './logo.svg';
import musician from './musician.JPG'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './ToDoList.css';
import Header from '../../../Components/Header/Header';
import Data from './Data.json'
import ToDo, {TodoObj} from './ToDo'
import PostIt from './postitnote.png'
import AddToDo from './AddToDo'
import background from './ToDoListBackground.webp'

export default function ToDoList(): JSX.Element {
    const [ toDoList, setToDoList ] = useState(Data);
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
    
    const addTask = (taskInput:string) => {
        if(taskInput.length < 1) {
            return
        }
        let copy = [...toDoList];
        copy = [...copy, {id: toDoList.length + 1, task: taskInput, complete: false}]
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

    return(    
        <div className = "ToDoList">
            <Header back = '/Programming' title = 'To-do List'></Header>
            <div className = "Body">
                {toDoList.map(todo => {
                    return (
                        <ToDo todo={todo} handleToggle={handleToggle} />
                    )
                })}
            </div>
            <button className="ClearCompleted" onClick = {handleFilter}> Clear Completed</button>
            <button className="ClearAll" onClick = {clearAll}>Clear All</button>
            <button className="CompleteAll" onClick = {completeAll}>Complete All</button>
            <button className="ToggleAll" onClick = {toggleAll}>Toggle All</button>
            <AddToDo AddTask = {addTask} ></AddToDo>
        </div>
    );
}