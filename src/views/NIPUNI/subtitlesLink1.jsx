import React ,{Component} from 'react'
import {Link} from 'react-router-dom'
import './genaralCSS.css'

export default class subtitlesLink1  extends Component{

    render(){
        return(
            <div className="nipuni">
                <div className="col-md-12 Outterbox">
                    <div style={{backgroundColor:"Black", color:"yellow",fontSize:"20px"}}>
                       <center> 
                           <h1>
                           How to download Subtitles from the web site?
                                
                            </h1>
                        </center>
                    </div>
              
                <div className="lineSpace">
                    <strong>
                        <span style={{color:"Black",fontSize:"23px"}}>1. Click the Subtitles menu on the menu bar.</span><br/>
                    </strong>
                </div>

            <center>
                <div className="col-md-12">
                <img src={require('./sub1.JPG')} alt="" className="regImage"/>
                </div>
            </center>

                 <div className="lineSpace">
                    <strong>
                        <span style={{color:"Black",fontSize:"23px"}}>2. Then it will navigate to the "Subtitles page", and you need to
                        search for the movie you wish to download the subtitles and click the image of that".</span><br/>
                    </strong>
                </div>

                <center>
                <div className="col-md-12">
                <img src={require('./sub2.JPG')} alt="" className="regform"/>
                </div>
            </center>

                <div className="lineSpace">
                    <strong>
                        <span style={{color:"Black",fontSize:"23px"}}>3. After that you are ready to download the subtitles after clicking that 
                        subtitle button at the bottom of the page.</span><br/>
                    </strong>
                </div>
                <center>
                <div className="col-md-12">
                <img src={require('./sub3.JPG')} alt="" className="regform"/>
                </div>
            </center>

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