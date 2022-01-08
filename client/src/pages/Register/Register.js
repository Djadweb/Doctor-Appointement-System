import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './Register.scss'
import Axios from 'axios'

function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const register = () => {
        Axios.post("http://localhost:3001/create", {
            email: email,
            password: password
        }).then((response) => {
            console.log(response);
            if(response.data === "created") {
                window.location="/login"
            }            
        })
    }

    return (
        <div className='register'>
            <div className="container">
                <div className="col-lg-6 col-md-8 mx-auto card">
                    <div className="card-header">Register</div>
                    <div className="card-body p-4">
                        <div className="form-group">
                            <label>Email address</label>
                            <input onChange={e => setEmail(e.target.value)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="form-group my-3">
                            <label>Password</label>
                            <input onChange={e => setPassword(e.target.value)} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                        </div>
                        <button onClick={register} className="btn btn-primary">Submit</button>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Register
