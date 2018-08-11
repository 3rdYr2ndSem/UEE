import React,{Component} from 'react';
import {NavLink , Link} from 'react-router-dom'

import Register from '../views/NETHU/Register'
import Login from '../views/FAZLAN/Login'

export default class Header extends Component {

    render(){
    return (
        <div>
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                <div style={{marginTop:"10px" }}>
                    <div className="navbar-header">
                        <Link to="/"><img src={require("../images/logo.png" )} width="75%" alt="Logo Zoom.lk"/></Link>
                    </div>
                    <ul className="nav navbar-nav navbar-right">
                            <li><a data-toggle="modal" data-target="#myModal1"><span className="glyphicon glyphicon-user"></span> Register</a></li>
                            <li><a data-toggle="modal" data-target="#myModal2"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
                            <Login />
                            <Register />
                    </ul>
                </div>
                  
                    <form className="navbar-form navbar-right">
                            <div className="form-group" style={{marginLeft:"40px"}}>
                                <input type="text" className="form-control" placeholder="Search" />
                            </div>
                    </form>
                    <div style={{paddingTop:"10px"}}>
                        <ul className="nav navbar-nav">
                            <li><NavLink to="/Home" style={{height:"50px"}} activeStyle={{background:"#1565c0", color:"white"}}>Home</NavLink></li>
                            <li><NavLink to="/Downloads" style={{height:"50px"}} activeStyle={{background:"#1565c0", color:"white"}}>Downloads</NavLink></li>
                            <li><NavLink to="/Subtitles" style={{height:"50px"}} activeStyle={{background:"#1565c0", color:"white"}}>Subtitles</NavLink></li>
                            <li><NavLink to="/Forum" style={{height:"50px"}} activeStyle={{background:"#1565c0", color:"white"}}>Forum</NavLink></li>
                            <li><NavLink to="/Faq" style={{height:"50px"}} activeStyle={{background:"#1565c0", color:"white"}}>FAQ</NavLink></li>
                            {/* <li><NavLink to="/ContactUs" style={{height:"50px"}} activeStyle={{background:"#1565c0", color:"white"}}>Contact Us</NavLink></li> */}
                        </ul>
                       
                        </div>
                </div>      
            </nav>
            </div>
    );
}

}