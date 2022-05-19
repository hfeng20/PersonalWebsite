import React from 'react';
import logo from './logo.svg';
import musician from './musician.JPG'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Activity from '../../Components/Activity/Activity';

export default function mainPage(): JSX.Element {
    return (
        <div className="MainPage">
            <div className = "Bio">
            <h1>
                Harry Tianhong Feng
            </h1>
                <Activity title = 'Student' image = '' url = 'Academics' ></Activity>
                <Activity title = 'Athlete' image = '' url = 'Athletics'></Activity>
                <Activity title = 'Musician' image = {musician} url = 'Music' ></Activity>
                <Activity title = 'Programmer' image = '' url = 'Programming'></Activity>
            </div>
        </div> 
    );
}