import React, {useState} from 'react';
import logo from './logo.svg';
import musician from './musician.JPG'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './ToDoList.css';
import Header from '../../../Components/Header/Header';
import Data from './Data.json'

const ToDo = (props:{todo:any}) => {
    var {todo} = props
    const handleToggle = () => {
        todo.complete = true
    }
    return (
        <div className={todo.complete ? "Strike": ""} onClick={handleToggle}>
            {todo.task}
        </div>
    );
 };

 export default ToDo