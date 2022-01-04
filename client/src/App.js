import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Appointment from "./pages/Appointment/Appointment";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import './App.scss'
import Navbar from "./Components/Navbar/Navbar";

function App() {  

  return (
    <div className="App">      
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/appointment" exact element={<Appointment/>} />
          <Route path="/register" exact element={<Register/>} />
          <Route path="/login" exact element={<Login/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
