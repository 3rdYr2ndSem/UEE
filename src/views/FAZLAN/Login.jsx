import React, {Component} from 'react';
import './loginmodel.css';
export default class Login extends Component{

    render(){
        return(
            <div id="myModal2" className="modal fade" role="dialog" style={{color:"black"}}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                        
                            
                            
                        

                        <div className="modal-body">
                        <h4 className="modal-title">Login</h4>
                        <hr />
                        <form >
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Email address</label>
                                    <input type="email" className="form-control" placeholder="Enter email" />
                                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Password</label>
                                    <input type="password" className="form-control" placeholder="Password" />
                                </div>
                                <div className="row row-padding">
                                        <button type="submit" className="btn btn-custom2">Submit</button>
                                    <div className="close-btn">
                                        <button type="button" className="btn btn-custom2" data-dismiss="modal">Close</button>
                                        </div>
                                </div>
                            </form>
                        </div>
                        
                            
                        
                        </div>
                    </div>
                </div>
        );
    }

}