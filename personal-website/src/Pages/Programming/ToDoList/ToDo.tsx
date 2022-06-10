import React, {useState} from 'react';
import logo from './logo.svg';
import musician from './musician.JPG'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './ToDoList.css';
import Header from '../../../Components/Header/Header';
import Data from './Data.json'
import PostIt from './postitnote.png'
import TodoObj from './TodoObj';

const ToDo = (props:{todo:any, handleToggle:(id: number) => void}) => {
    var {todo, handleToggle} = props
    return (
        <div className="ToDoNote" onClick={() => {handleToggle(todo.id)} }>
            <div className={todo.complete ? "Strike": "Todo"}></div>
            <div className="TodoDescription">
                <text className="TodoTitle">{todo.task}</text>
                <text className="TodoDesc">{todo.description}</text>
                <div className="TodoTags"> {todo.tags} </div>
            </div>
        </div>
    );
 };

 export default ToDo