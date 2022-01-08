import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './Login.scss'
import Axios from 'axios'
import { useNavigate } from 'react-router-dom';


function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginStatus, setLoginStatus] = useState(false);    
    const navigate = useNavigate();


    const login = () => {
        Axios.post("http://localhost:3001/login", {
            email: email,
            password: password
        }).then((res) => {            
            if(res.data.email && res.data.type === "patient") {
                navigate('/dashboard');
            }
            
        })
    }

    return (
        <div className='login'>
            <div className="container">
                <div className="col-lg-6 col-md-8 mx-auto card">
                    <div className="card-header">Login</div>
                    <div className="card-body p-4">
                        <div className="form-group">
                            <label>Email address</label>
                            <input onChange={e => setEmail(e.target.value)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>                            
                        </div>
                        <div className="form-group my-3">
                            <label>Password</label>
                            <input onChange={e => setPassword(e.target.value)} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                        </div>
                        <button onClick={login} className="btn btn-primary">Submit</button>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Login
