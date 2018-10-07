import React,{Component} from 'react';
import {Link} from 'react-router-dom'
import './announcement.css'

export default class announcements extends Component{

    constructor(props){
        super(props)

        this.state={
            Subtitles:{
            
            }
        }
    }

    render(){
        return(
            <div className="zoomlk">
                <div className="col-md-12 ">
                  <h4><Link to="/Forum" style={{color:"white"}}>Forum</Link> <span  class="fa fa-arrow-right" aria-hidden="true"></span><Link to="zoomlkforum" style={{color:"white"}}> Zoom.lk</Link> <span  class="fa fa-arrow-right" aria-hidden="true"></span><Link to="announcements" style={{color:"white"}}> Announcements</Link></h4>  
                    <div className="col-md-12" style={{marginTop:"50px"}}>
                    
                            <div className ="col-md-12 box">
                            <div class= "row">
                                <div className ="col-md-9 ">                                
                                <span className =" title" >Title </span>
                                </div>
                                <div className ="col-md-3 ">  
                               <span className ="post" >Last Post By </span>
                            </div>
                            </div>
                    </div>
                        <Link to="/rulescomment">
                        <div className ="col-md-12 listBox">
                            <div class="row" >
                                <div className ="col-md-2 ">
                                <img src={require('./title.png')} className="listImage" alt="image Name" />
                                </div>
                                <div className ="col-md-10 " >
                                <span className="Subtitle" >Zoom official Movie Request </span><br/>
                                <span className="Description" >    Saman 19-08-2018 06:05 P.M. </span>
                                </div>
                            </div> 
                        </div>
                        </Link>
                        <Link to="/">
                        <div className ="col-md-12 listBox">
                            <div class="row" >
                                <div className ="col-md-2 ">
                                <img src={require('./title.png')} className="listImage" alt="image Name" />
                                </div>
                                <div className ="col-md-10 " >
                                <span className="Subtitle" >Create Updates </span><br/>
                                <span className="Description" >    Kane 21-08-2018 21:35 P.M. </span>
                                </div>
                            </div> 
                        </div>

                           
                        </Link>
                        <Link to="/">
                        <div className ="col-md-12 listBox">
                            <div class="row" >
                                <div className ="col-md-2 ">
                                <img src={require('./title.png')} className="listImage" alt="image Name" />
                                </div>
                                <div className ="col-md-10 " >
                                <span className="Subtitle" >Zoom Subtitle Request </span><br/>
                                <span className="Description" >    Nila 20-09-2018 23:25 P.M. </span>
                                </div>
                            </div> 
                        </div>
                        </Link>
                        <Link to="/">
                        <div className ="col-md-12 listBox">
                            <div class="row" >
                                <div className ="col-md-2 ">
                                <img src={require('./title.png')} className="listImage" alt="image Name" />
                                </div>
                                <div className ="col-md-10 " >
                                <span className="Subtitle" >Attention All Members </span><br/>
                                <span className="Description" >    Ben 11-09-2018 11:35 A.M. </span>
                                </div>
                            </div> 
                        </div>
                        </Link>
                        <Link to="/rulescomment">
                        <div className ="col-md-12 listBox">
                            <div class="row" >
                                <div className ="col-md-2 ">
                                <img src={require('./title.png')} className="listImage" alt="image Name" />
                                </div>
                                <div className ="col-md-10 " >
                                <span className="Subtitle" >Zoom.lk Forum Rules and Guidelines </span><br/>
                                <span className="Description" >    Hasith 10-09-2018 22:05 P.M. </span>
                                </div>
                            </div> 
                        </div>                    
                        </Link>
                    </div>
                    
                    
                </div>
            </div>
        );
    }
} 