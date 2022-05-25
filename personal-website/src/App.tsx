import React from 'react';
import logo from './logo.svg';
import musician from './musician.JPG'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {Routes} from "react-router-dom";
import MainPage from './Pages/MainPage/MainPage';
import Musician from './Pages/Music/Music';
import Programming from './Pages/Programming/Programming'
import ToDoList from './Pages/Programming/ToDoList/ToDoList'
import ApiFetch from './Pages/Programming/ApiFetch/ApiFetch'
class App extends React.Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<MainPage/>} />
          <Route path="/Music" element={<Musician/>} />
          <Route path="/Programming" element={<Programming/>} />
          <Route path="/Programming/ToDoList" element={<ToDoList/>}/>
          <Route path="/Programming/ApiFetch" element={<ApiFetch/>}/>
        </Routes>
      </Router>
    );
  }
}

export default App;