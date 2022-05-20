import React from 'react';
import logo from './logo.svg';
import backArrow from './backArrow.jpg'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './Header.css'

export default function Header(props:{title:string}):JSX.Element {
    var {title} = props
    return(
        <div className = "Header">
            <Link to='/' className="Arrow">
                Back
            </Link>
            <h1 className="Title">
                {title}
            </h1>
        </div>
    );
}