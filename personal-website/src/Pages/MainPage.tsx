import React from 'react';
import logo from './logo.svg';
import musician from './musician.JPG'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

export default function mainPage(): JSX.Element {
    return (
        <div className="MainPage">
            <div className = "Bio">
            <h1>
                Harry Tianhong Feng
            </h1>
                Student
                <br></br>
                <br></br>
                Athlete
                <br></br>
                <br></br>
                Musician
                <br></br>
                <Link to="/Music">
                    <img className = "ImageLink" src = {musician} alt = "Musician Link Image" width="20%" height="10%" object-fit></img>
                </Link>
                <br></br>
                Programmer
            </div>
        </div> 
    );
}