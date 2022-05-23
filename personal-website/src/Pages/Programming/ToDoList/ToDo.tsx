import React, {useState} from 'react';
import logo from './logo.svg';
import musician from './musician.JPG'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './ToDoList.css';
import Header from '../../../Components/Header/Header';
import Data from './Data.json'
import PostIt from './postitnote.png'

const ToDo = (props:{todo:any, handleToggle:(id: number) => void}) => {
    var {todo, handleToggle} = props
    return (
        <div className={todo.complete ? "Strike": "Todo"} onClick={() => {handleToggle(todo.id)} }>
            {todo.task}
        </div>
    );
 };

 export default ToDo