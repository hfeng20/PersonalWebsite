import React from 'react';
import logo from './logo.svg';
import musician from './musician.JPG'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './Activity.css';
import Button from '../../Components/Button/Button'

export default function Activity(props:{title:string, image:string, url:string}): JSX.Element {
    const {title, image, url} = props
    return(
        <div className = "Activity">
            {title}
            <br></br>
            <Link to={url}>
                <img src = {image} alt = {title} width="20%" height="10%" object-fit></img>
            </Link>
        </div>
    );
}