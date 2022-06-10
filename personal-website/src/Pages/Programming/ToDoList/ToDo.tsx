import React, {useState} from 'react';
import logo from './logo.svg';
import musician from './musician.JPG'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './ToDoList.css';
import Header from '../../../Components/Header/Header';
import Data from './Data.json'
import PostIt from './postitnote.png'
import TodoObj from './TodoObj';

const ToDo = (props:{todo:TodoObj, handleToggle:(id: number) => void}) => {
    var {todo, handleToggle} = props
    return (
        <div className="ToDoNote" onClick={() => {handleToggle(todo.id)} }>
            <div className = "IndicatorContainer">
                <div className={todo.complete ? (todo.tag + "Strike"): (todo.tag + "Todo")}>
                    <text >
                        ✓
                    </text>
                </div>
            </div>
            <div className="TodoDescription">
                <text className="TodoTitle">{todo.task}</text>
                <text className="TodoDesc">{todo.description}</text>
            </div>
            <div className="TodoTagContainer"> 
                <text className="TodoTag">
                    {todo.tag}  
                </text>
            </div>
        </div>
    );
 };

 export default ToDo