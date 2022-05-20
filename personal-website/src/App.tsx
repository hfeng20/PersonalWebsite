import React from 'react';
import logo from './logo.svg';
import musician from './musician.JPG'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {Routes} from "react-router-dom";
import MainPage from './Pages/MainPage/MainPage';
import Musician from './Pages/Music/Music';
import Programming from './Pages/Programming/Programming'
class App extends React.Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<MainPage/>} />
          <Route path="/Music" element={<Musician/>} />
          <Route path="/Programming" element={<Programming/>} />
        </Routes>
      </Router>
    );
  }
}

export default App;