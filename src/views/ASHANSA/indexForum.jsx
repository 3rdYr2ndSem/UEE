import React,{Component} from 'react';
import './Forum.css'
import {Link} from 'react-router-dom'
export default class indexForum extends Component{

    render(){
        return (
            <div className="Forummain">
            <h4>Forum</h4>
                <div className="col-md-12 ">
                <Link to="/zoomlkforum">
                    <div className="col-md-12 ">
                        <h3><mark style={{backgroundColor:"	#80abd6",color:"white"}}>Zoom.lk</mark></h3>
                        <img src={require('./zoom.JPG')} className="relatedImages relatedImageone " alt=""/>
                        
                    </div>
                    </Link>
                    <Link to="/zoomlkforum">
                    <div className="col-md-12 ">
                        <h3><mark style={{backgroundColor:"	#80abd6",color:"white"}}>Zoom Community</mark></h3>
                        <img src={require('./community.JPG')} className="relatedImages relatedImagetwo" alt=""/>
                        
                    </div>
                    </Link>
                    <Link to="/zoomlkforum">
                    <div className="col-md-12 listBox">
                        <h3><mark style={{backgroundColor:"	#80abd6",color:"white"}}>Entertainment</mark></h3>
                        <img src={require('./entertainment.jpg')} className="relatedImages relatedImagethree" alt=""/>
                        
                    </div>
                    </Link>
                    <Link to="/Zoom.lkForum">
                    <div className="col-md-12 listBox">
                        <h3><mark style={{backgroundColor:"	#80abd6",color:"white"}}>Misc</mark></h3>
                        <img src={require('./misc.JPG')} className="relatedImages relatedImagefour" alt=""/>
                        
                    </div>
                    </Link>
                    <Link to="/Zoom.lkForum">
                    <div className="col-md-12 listBox">
                        <h3><mark style={{backgroundColor:"	#80abd6",color:"white"}}>Download Portal</mark></h3>
                        <img src={require('./portal.JPG')} className="relatedImages relatedImagefive" alt=""/>
                        
                    </div>
                    </Link>
                </div>
               
               
            </div>
        );
    }
}
