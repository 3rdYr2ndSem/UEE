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
            <div>
                <div className="col-md-12 ">
                    <div className="col-md-12">
                        <form action="">
                            <div class="form-group" >
                                <input type="email" className="form-control searchBar" placeholder="Search" />
                            </div>
                        </form> 
                    </div>
                    <div className="col-md-9" style={{marginTop:"50px"}}>
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
                        <Link to="/">
                            <div className ="col-md-12 listBox">
                                <img src={require('./1.jpg')} className="listImage" alt="image Name" />
                            </div>
                        </Link>
                    </div>
                    <div className ="col-md-2 boxAd">
                            <h1>hello</h1>
                    </div>
                </div>
            </div>
        );
    }

}