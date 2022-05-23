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
    
    const addTask = (userInput:string) => {
        let copy = [...toDoList];
        copy = [...copy, {id: toDoList.length + 1, task: userInput, complete: false}]
        setToDoList(copy)
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
            <button onClick = {handleFilter}> Clear Completed</button>
            <AddToDo AddTask = {addTask} ></AddToDo>
        </div>
    );
}