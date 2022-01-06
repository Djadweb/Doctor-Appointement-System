import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './Login.scss'
import Axios from 'axios'

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = () => {
        Axios.post("http://localhost:3001/checkUser", {
            email: email,
            password: password
        }).then((response) => {
            if(response.data === "logged") {
                window.location = ("http://localhost:3000/")
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
