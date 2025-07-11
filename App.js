import React from 'react';
import './App.css';
import Contact from './contact'
import About from './About'
import  User from './User'
import { Link, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div>
    <div className="nav-bar">
          <Link to="/contact"><button className="btn">Contact</button></Link>
          <Link to="/user"><button className="btn">User</button></Link>
          <Link to="/about"><button className=" align btn">About</button></Link>
        </div>

      <Routes>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/user" element={<User />}/>
        <Route path="/about" element={<About />}/>
        {/* <Route path="/user/edit" element={<Edit />}/> */}
      </Routes>
      <div></div>
    </div>
  );
}

export default App;
