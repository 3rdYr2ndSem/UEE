import React, {Component } from 'react';
import './login_.css';
import {Link} from 'react-router-dom'
export default class Register_ extends Component{

    render(){
        return(

            <div className="container login_container">
            <h2>User Registration</h2> <br /><br /><br />
                <form >
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">User Name</label>
                                    <input type="password" className="form-control" placeholder="Password" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Email address</label>
                                    <input type="email" className="form-control" placeholder="Enter email" />
                                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Password</label>
                                    <input type="password" className="form-control" placeholder="Password" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Confirm Password</label>
                                    <input type="password" className="form-control" placeholder="Password" />
                                </div>
                                <div class="row abc">
                                
                       
                        <div class="col-md-2">
                            
                        <Link to="/requestmovie"><button type="button" className="btn btn-vdetails">Register</button></Link>
                        </div>
                        
                </div>
                            </form>
            </div>

        );
    }
}