import React,{Component} from 'react';
import {Link} from 'react-router-dom'
import './zoomlkforum.css'

export default class zoomlkforum extends Component{

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
                  <div><h4><Link to="/Forum">Forum</Link> <span  class="fa fa-arrow-right" aria-hidden="true"> </span><Link to="/zoomlkforum"> Zoom.lk</Link></h4></div>  
                    <div className="col-md-12" style={{marginTop:"50px"}}>
                        
                        <Link to="/announcements">
                        
                            <div className ="col-md-12 listBox">
                            <div class="row" >
                                <div className ="col-md-2 ">
                                    <img src={require('./sub.JPG')} className="listImage" alt="image Name" />
                                </div>
                                <div className ="col-md-10 " >
                                <span className="Subtitle" >Announcements </span>
                                <span className="Description" ><br/>All kinds of news,events and fun stuff on Zoom are posted here.</span>
                                </div>
                            </div> 
                        </div>
                        </Link>
                        <Link to="/">
                        <div className ="col-md-12 listBox">
                            <div class="row" >
                                <div className ="col-md-2 ">
                                    <img src={require('./sub.JPG')} className="listImage" alt="image Name" />
                                </div>
                                <div className ="col-md-10 " >
                                <span className="Subtitle" >News and Updates </span>
                                <span className="Description" ><br/>You can know about latest news and updates from here </span>
                                </div>
                            </div> 
                        </div>
                        </Link>
                        <Link to="/">
                        <div className ="col-md-12 listBox">
                            <div class="row" >
                                <div className ="col-md-2 ">
                                    <img src={require('./sub.JPG')} className="listImage" alt="image Name" />
                                </div>
                                <div className ="col-md-10 " >
                                <span className="Subtitle" >Site Feedback </span>
                                <span className="Description" ><br/>Help improve the site with your comments and suggestions! </span>
                                </div>
                            </div> 
                        </div>
                        </Link>
                        <Link to="/">
                        <div className ="col-md-12 listBox">
                            <div class="row" >
                                <div className ="col-md-2 ">
                                    <img src={require('./sub.JPG')} className="listImage" alt="image Name" />
                                </div>
                                <div className ="col-md-10 " >
                                <span className="Subtitle" >Events </span>
                                <span className="Description" ><br/>You can know about all new events </span>
                                </div>
                            </div> 
                        </div>

                        </Link>
                        <Link to="/">
                        <div className ="col-md-12 listBox">
                            <div class="row" >
                                <div className ="col-md-2 ">
                                    <img src={require('./sub.JPG')} className="listImage" alt="image Name" />
                                </div>
                                <div className ="col-md-10 " >
                                <span className="Subtitle" >Issues with Subtitles </span>
                                <span className="Description" ><br/>You can post your problems regarding subtitles here to get quick support. </span>
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