import React from 'react';
import logo from './logo.svg';
import musician from './musician.JPG'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './Music.css';

export default function Musician(): JSX.Element {
    return (
        <div>
        <Link to='/'>
            Back to MainPage
        </Link>
        </div>
    );
}