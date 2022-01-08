import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Appointment from "./pages/Appointment/Appointment";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import './App.scss'
import Navbar from "./Components/Navbar/Navbar";
import Axios from 'axios'
import { useState } from "react";

function App() {  
  const [loggedIn, setloggedIn] = useState(false)   

  Axios.get('http://localhost:3001/checkUser')
  .then((res) => {
    setloggedIn(res.data.isLoggedIn);
  })
  
  return (
    <div className="App">      
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/appointment" exact element={<Appointment/>} />
          <Route path="/register" exact element={<Register/>} />
          <Route path="/login" exact element={<Login/>} />
          (loggedIn===true && 
          <Route path="/dashboard" exact element={<Appointment/>} />
          )
        </Routes>
      </Router>
    </div>
  );
}

export default App;
