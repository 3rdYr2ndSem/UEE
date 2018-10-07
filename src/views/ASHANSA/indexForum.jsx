import React,{Component} from 'react';
import './Forum.css'
import {Link} from 'react-router-dom'
export default class indexForum extends Component{

    onMouseover (e) {
        this.setState({text : 'some text'})
      }
    render(){
        return (
            <div className="Forummain">
            <h4>Forum</h4>
                <div className="col-md-12 ">
                <Link to="/zoomlkforum">
                    <div className="col-md-12 "onMouseOver="showText('Announcements')">
                        <h3><mark style={{backgroundColor:"#e7e7e4",color:"black"}}>Zoom.lk</mark></h3>
                        <img src={require('./zoom.JPG')} className="relatedImages relatedImageone " alt=""/>
                        
                    </div>
                    </Link>
                    <Link to="/zoomlkforum">
                    <div className="col-md-12 ">
                        <h3><mark style={{backgroundColor:"#e7e7e4",color:"black"}}>Zoom Community</mark></h3>
                        <img src={require('./community.JPG')} className="relatedImages relatedImagetwo" alt=""/>
                        
                    </div>
                    </Link>
                    <Link to="/zoomlkforum">
                    <div className="col-md-12 listBox">
                        <h3><mark style={{backgroundColor:"#e7e7e4",color:"black"}}>Entertainment</mark></h3>
                        <img src={require('./entertainment.jpg')} className="relatedImages relatedImagethree" alt=""/>
                        
                    </div>
                    </Link>
                    <Link to="/Zoom.lkForum">
                    <div className="col-md-12 listBox">
                        <h3><mark style={{backgroundColor:"#e7e7e4",color:"black"}}>Misc</mark></h3>
                        <img src={require('./misc.JPG')} className="relatedImages relatedImagefour" alt=""/>
                        
                    </div>
                    </Link>
                    <Link to="/Zoom.lkForum">
                    <div className="col-md-12 listBox">
                        <h3><mark style={{backgroundColor:"#e7e7e4",color:"black"}}>Download Portal</mark></h3>
                        <img src={require('./portal.JPG')} className="relatedImages relatedImagefive" alt=""/>
                        
                    </div>
                    </Link>
                </div>
               
               
            </div>
        );
    }
}
