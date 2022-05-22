import React from 'react';
import logo from './logo.svg';
import backArrow from './backArrow.jpg'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './Header.css'

export default function Header(props:{back:string, title:string}):JSX.Element {
    var {back, title} = props
    return(
        <div className = "Header">
            <Link to={back} className="Arrow">
                Back
            </Link>
            <h1 className="Title">
                {title}
            </h1>
        </div>
    );
}