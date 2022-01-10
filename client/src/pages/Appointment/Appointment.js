import React, { useEffect } from 'react'
import './Appointment.scss'
import Axios from 'axios'

function Appointment() {
    // useEffect(() => {
    //     Axios.get('http://localhost:3001/appointment')
    //     .then((res) => {
    //         const user = res.data.email;
    //     })
    // }, [])
    return (
        <div className="appointment">
            <div className="container">
                <h1>Book an Appointment</h1>
                <div className="appointment__form">
                    <form action="https://localhost:3000/confirm" method="POST">
                        {/* <div className="row mb-4">
                            <div className="form-check">
                                <input name="account" className="form-check-input" type="checkbox"/>
                                <label className="form-check-label">
                                    I Already have an account
                                </label>
                            </div>
                        </div>
                        <div className="row mb-4">
                            <div className="col">                            
                                <label className="form-label">First Name</label>
                                <input name="firstName" type="text" className="form-control"/>                        
                            </div>                            
                            <div className="col">                            
                                <label className="form-label">Last name</label>
                                <input name="lastName" type="text" className="form-control"/>                        
                            </div>                            
                        </div>                                               
                        <div className="row mb-4">
                            <div className="col">                            
                                <label className="form-label">Email</label>
                                <input name="email" type="email" className="form-control"/>                        
                            </div>                                                        
                            <div className="col">                            
                                <label className="form-label">Service</label>
                                <select name="service" className="form-select" placeholder="Select Service">
                                                      
                                </select>                       
                            </div> 
                        </div>                                               
                        <div className="row mb-4">                                                  
                            <div className="col">                            
                                <label className="form-label">Apointement Date</label>
                                <input name="date" type="date" className="form-control"/>                        
                            </div>                    
                            <div className="col">                            
                                <label className="form-label">Payment method</label>
                                <select name="method" className="form-select" placeholder="Select Payment Method">
                                    
                                </select>                            
                            </div> 
                            <div className="text-center mt-5">
                                <button className="confirmBtn" type="submit">Confirm</button>
                            </div>        
                        </div>*/}

                        <div className="row mb-4">                            
                            <label className="form-label">What's the reason for your visit?</label>
                            <select name="reason" className="form-control">
                                <option value="reason1">reason1</option>
                                <option value="reason2">reason2</option>
                                <option value="reason3">reason3</option>
                                <option value="reason4">reason4</option>
                            </select>
                        </div>                      
                        <div className="row mb-4">                            
                            <label className="form-label">Select a available time</label>
                            <div className="time-board"></div>
                        </div>                      
                    </form>                    
                </div>
            </div>
            
        </div>
    )
}

export default Appointment
