import React from 'react';
import logo from './logo.svg';
import musician from './musician.JPG'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './Programming.css';
import Header from '../../Components/Header/Header'

export default function Programming(): JSX.Element {
    return(
        <div className = "Programming">
            <Header title='Programming'/>
            Test
        </div>
    );
}