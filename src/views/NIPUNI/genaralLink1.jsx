import React ,{Component} from 'react'
import {Link} from 'react-router-dom'
import './genaralCSS.css'

export default class genaralLink1  extends Component{

    render(){
        return(
            <div className="nipuni">
                <div className="col-md-12 Outterbox">
                    <div style={{backgroundColor:"Black", color:"yellow",fontSize:"20px"}}>
                       <center> 
                           <h1>
                                How to register with the web site ?
                                
                            </h1>
                        </center>
                    </div>

                {/* <div className="col-md-12">   
                    <div id="myCarousel" class="carousel slide" data-ride="carousel">
                                    <ol class="carousel-indicators">
                                    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                                    <li data-target="#myCarousel" data-slide-to="1"></li>
                                    <li data-target="#myCarousel" data-slide-to="2"></li>
                                    </ol>
                                        <div class="carousel-inner">
                                                <div class="item active">
                                                    <img src={require('./RegForm.JPG')} alt="Los Angeles" className="downloadImage" />
                                                </div>

                                                <div class="item">
                                                    <img src={require('./registerHead.JPG')} alt="Chicago" className="downloadImage"/>
                                                </div>
                                                
                                                <div class="item">
                                                    <img src={require('./genaral5.jpg')} className="downloadImage"/>
                                                </div>
                                                </div>

                                                <a class="left carousel-control" href="#myCarousel" data-slide="prev">
                                                <span class="glyphicon glyphicon-chevron-left"></span>
                                                <span class="sr-only">Previous</span>
                                                </a>
                                                <a class="right carousel-control" href="#myCarousel" data-slide="next">
                                                <span class="glyphicon glyphicon-chevron-right"></span>
                                                <span class="sr-only">Next</span>
                                                </a>
                                            </div>
                                
                            </div> 
 */}



                <div className="lineSpace">
                    <strong>
                        <span style={{color:"Black",fontSize:"23px"}}>1. Click the Register button on the header.</span><br/>
                    </strong>
                </div>

            <center>
                <div className="col-md-12">
                <img src={require('./registerHead.JPG')} alt="" className="regImage"/>
                </div>
            </center>

                 <div className="lineSpace">
                    <strong>
                        <span style={{color:"Black",fontSize:"23px"}}>2. Then it will pop up the "Registration Form".</span><br/>
                    </strong>
                </div>

                <center>
                <div className="col-md-12">
                <img src={require('./RegForm.JPG')} alt="" className="regform"/>
                </div>
            </center>

                <div className="lineSpace">
                    <strong>
                        <span style={{color:"Black",fontSize:"23px"}}>3. Then you need to enter the relevant details and submit it.</span><br/>
                    </strong>
                </div>

            <div className="lineSpace">
                <center>
                <Link to="/Faq" style={{ color: '#FFF' }}><button className="btn btn-warning downloadButton"> <i class="fa fa-backward" aria-hidden="true"></i>&nbsp;FAQ Home</button></Link>
                </center>
            </div>

            <div className="lineSpace">
                
            </div>

                </div>
            </div>
        );
    }

}