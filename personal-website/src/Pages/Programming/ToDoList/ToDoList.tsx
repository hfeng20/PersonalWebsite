import React, {useState} from 'react';
import logo from './logo.svg';
import musician from './musician.JPG'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './ToDoList.css';
import Header from '../../../Components/Header/Header';
import Data from './Data.json'
import ToDo from './ToDo'

export default function ToDoList(): JSX.Element {
    const [ toDoList, setToDoList ] = useState(Data);
    const handleToggle = (id:number) => {
        let mapped = toDoList.map(task => {
            return id ===  task.id ? { ...task, complete: !task.complete } : { ...task};
        })
        setToDoList(mapped);
      }
    return(    
        <div className = "ToDoList">
            <Header back = '/Programming' title = 'To-do List'></Header>
            <div>
            {toDoList.map(todo => {
                return (
                    <ToDo todo={todo} handleToggle={handleToggle}/>
                )
            })}
         </div>
        </div>
    );
}