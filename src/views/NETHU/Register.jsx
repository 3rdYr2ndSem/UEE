import React, {Component } from 'react'

export default class Register extends Component{
    render(){
        return(
            
                <div id="myModal1" className="modal fade" role="dialog" style={{color:"black"}}>
                    <div className="modal-dialog">
                        
                        
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                            
                        

                        <div className="modal-body">
                        <h4 className="modal-title">Registeration</h4><hr />
                            <form >
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Confirm Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                                </div>
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                                </div>
                                <div className="row row-padding">
                                        <button type="submit" className="btn btn-custom2">Register</button>
                                        <div className="close-btn">
                                        <button type="button" className="btn btn-custom2" data-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </form>
                        </div>

                        
                            
                        
                        </div>
                    </div>
                
            
        );
    }
} 