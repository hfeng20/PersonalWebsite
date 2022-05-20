import React from 'react';
import logo from './logo.svg';
import musician from './musician.JPG'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './Button.css'

export default function(props:{image:string, url:string, width:string, height:string}): JSX.Element {
    var {image, url, width, height} = props
    return(
        <button className = "Button">
            <Link to={url}>
                <img src = {image} alt = {url} width={width} height={height} object-fit></img>
            </Link>
        </button>
    );
}