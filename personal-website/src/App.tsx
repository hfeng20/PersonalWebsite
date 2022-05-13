import React from 'react';
import logo from './logo.svg';
import musician from './musician.JPG'
import './App.css';

function App() {
  return (
    <div className="MainPage">
        <div className = "Bio">
          <h1>
            Harry Tianhong Feng
          </h1>
          <body>
            Student
            <br></br>
            <br></br>
            Athlete
            <br></br>
            <br></br>
            Musician
            <br></br>
            <a href = '/music'>
              <img className = "ImageLink" src = {musician} alt = "Musician Link Image" width="20%" height="10%" object-fit></img>
            </a>
            <br></br>
            Programmer
          </body>
        </div>
    </div>
  );
}

export default App;
