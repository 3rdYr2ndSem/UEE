import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import './downloadList.css'

export default class SubtitlesTvSeries extends Component{

    constructor(props){
        super(props)

        this.state={
            Subtitles:{
            
            }
        }
    }

    render(){
        return(
            <div className="fazlanlist">
                <div className=" ">
                    <div className="col-md-12">
                        <form action="">
                            <div class="form-group" >
                                <input type="email" className="form-control searchBar" placeholder="Search" />
                            </div>
                        </form> 
                    </div>
                    <div className="col-md-9" style={{marginTop:"50px"}}>
                        <Link to="/MainDownload">
                            <div className ="col-md-12 listBox">
                                <img src={require('./1.jpg')} className="listImage" alt="image Name" />
                                <span >Deadpool</span>
                            </div>
                        </Link>
                        <Link to="/">
                            <div className ="col-md-12 listBox">
                                <img src={require('./1.jpg')} className="listImage" alt="image Name" />
                            </div>
                        </Link>
                        <Link to="/">
                            <div className ="col-md-12 listBox">
                                <img src={require('./1.jpg')} className="listImage" alt="image Name" />
                            </div>
                        </Link>
                        <Link to="/">
                            <div className ="col-md-12 listBox">
                                <img src={require('./1.jpg')} className="listImage" alt="image Name" />
                            </div>
                        </Link>
                        <Link to="/">
                            <div className ="col-md-12 listBox">
                                <img src={require('./1.jpg')} className="listImage" alt="image Name" />
                            </div>
                        </Link>
                    </div>
                    
                    <div className="col-md-3">
                        <h3>Latest Downloads</h3>
                        <img src={require('./11.jpg')} className="relatedImages relatedImageone " alt=""/>
                        <img src={require('./12.jpg')} className="relatedImages relatedImageTwo" alt=""/>
                        <img src={require('./13.jpg')} className="relatedImages relatedImageTree" alt=""/>
                        <img src={require('./14.jpg')} className="relatedImages relatedImageFour" alt=""/>

                        <h3>Most Popular Downloads</h3>
                        <img src={require('./11.jpg')} className="relatedImages relatedImageone " alt=""/>
                        <img src={require('./12.jpg')} className="relatedImages relatedImageTwo" alt=""/>
                        <img src={require('./13.jpg')} className="relatedImages relatedImageTree" alt=""/>
                        <img src={require('./14.jpg')} className="relatedImages relatedImageFour" alt=""/>
                     </div>
                   
                </div>
            </div>
        );
    }

}