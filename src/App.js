import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Shopper';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import SignIn from './components/Login/Login';
import SignUp from './components/Registration/Registration';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/Login" element={<SignIn />} />
        <Route path="/Registration" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
