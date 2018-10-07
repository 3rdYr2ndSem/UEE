import React ,{Component} from 'react'
import {Link} from 'react-router-dom'
import './comment.css'
import Popup from './popup'
export default class rulescomment  extends Component{

    render(){
        return(
            <div className="Forummain">
                <div className="col-md-12">
                <h4><Link to="/Forum" style={{color:"white"}}>Forum</Link> <span  class="fa fa-arrow-right" aria-hidden="true"></span><Link to="zoomlkforum" style={{color:"white"}}> Zoom.lk</Link> <span  class="fa fa-arrow-right" aria-hidden="true"></span><Link to="announcements" style={{color:"white"}}> Announcements </Link><span  class="fa fa-arrow-right" aria-hidden="true"></span><Link to="rulescomment" style={{color:"white"}}> Forum Rules and Guidelines</Link></h4>  
                <div >
                    <ul>
                 <button data-toggle="modal" data-target="#myModal3" className="btn btn-success downloadButton" style={{color:"black"}}><i class="fa fa-plus-square" aria-hidden="true"></i> Add New Comment </button>
                 <Popup />
                 </ul>
                </div> 
                    <div className="col-md-12 box">
                        <div className="col-md-2">
                            <img src={require('./he.JPG')} className="listImage" alt="image Name" />
                                <span className="userdetails">
                                    Saman<br/>
                                    Join Date : Mar 2012<br/>
                                    Posts : 28 </span>
                        </div>
                        <div className="col-md-10">
                            <div className="col-md-12 inner" >
                            <br/>
                            Please make sure you read the forum guidelines
                            </div>
                            <ul>
                                <button data-toggle="modal" data-target="#myModal3" className="btn btn-success ReplyButton" style={{color:"black"}}><i class="fa fa-reply" aria-hidden="true"></i> Reply </button>
                                 <Popup />
                            </ul>                        
                     </div> 
                    </div>
                    <div className="col-md-12 box">
                    <   div className="col-md-2">
                            <img src={require('./she.JPG')} className="listImage" alt="image Name" />
                                <span className="userdetails">
                                    Shani<br/>
                                    Join Date : Mar 2017<br/>
                                    Posts : 8 </span>
                        </div>
                        <div className="col-md-10">
                        <div className="col-md-12 inner" >
                            <br/>
                             By using zoom.lk you agree NOT to:
                            <br/>
                            1. ------
                            
                            </div>                        
                            <ul>
                                <button data-toggle="modal" data-target="#myModal3" className="btn btn-success ReplyButton" style={{color:"black"}}><i class="fa fa-reply" aria-hidden="true"></i> Reply </button>
                                 <Popup />
                            </ul>
                         </div> 
                    </div>
                        <div className="col-md-12 box">
                            <div className="col-md-2">
                                <img src={require('./he.JPG')} className="listImage" alt="image Name" />
                                    <span className="userdetails">
                                        Hasith<br/>
                                        Join Date : Mar 2015<br/>
                                        Posts : 15 </span>
                            </div>
                        <div className="col-md-10">
                            <div className="col-md-12 inner" >
                                <br/>
                                By using zoom.lk you agree to:
                                <br/>
                                1. ------
                                
                                </div> 

                             <ul>
                                <button data-toggle="modal" data-target="#myModal3" className="btn btn-success ReplyButton" style={{color:"black"}}><i class="fa fa-reply" aria-hidden="true"></i>  Reply </button>
                                 <Popup />
                            </ul>
                            </div> 
                    </div>
                </div>
               
              
            </div>
        );
    }

}