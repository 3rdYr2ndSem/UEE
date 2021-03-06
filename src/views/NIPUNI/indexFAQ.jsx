import React ,{Component} from 'react'
import './faq.css'
import {Link} from 'react-router-dom'


export default class  Faq extends Component{

    render(){
        return(

            <div  >
 
                <div className="col-md-12" style={{backgroundColor:"#2a2a2d", border:" 5px solid navy",borderRadius: "10px"}}>
                
                    <form>
                    <div class="row">
                        <div className="col-md-12">
                        <center>
                            <div >
                                <h1>How can we help you ?</h1><br/>
                            </div>
                            </center>
                        </div>

                        
                            <div className="col-md-12" >
                                <div class="row">
                                    <div className="col-md-3">
                                        
                                    </div>
                                    <center>
                                        <div className="col-md-6" >
                                            <input type="text" class="form-control" placeholder="Type keywords to find answers"/><br/>
                                        </div>
                                    </center>
                                    <div >
                                    <center><div><button className="btn btn-info searchButton">
                                            <div className="col-md-3 searchButton">
                                                <i class="fa fa-search" aria-hidden="true"></i>
                                            </div>
                                                </button>
                                        </div> 
                                        </center>      
                                    </div>
                                    
                                </div>
                            </div>
                        

                        <center>
                            <div className="col-md-12" >
                                        <h3 style={{color:"#9ef442"}}>You can also browse the topics below to find what you are looking for.......</h3>
                            </div>
                        </center>
                    </div>
                </form> 
               
                </div>

            <div className="nipuni">
                {/* <div className="col-md-12"> */}
                
                   <div class="row" > 
                   <div className="col-md-12 box">                                               
                        
                            <div className="col-md-3 box2">
                                {/* <img src={require('./genaral.jpg')} alt="" className="downloadImage"/> */}
                                <div id="myCarousel" class="carousel slide" data-ride="carousel">
                                    <ol class="carousel-indicators">
                                    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                                    <li data-target="#myCarousel" data-slide-to="1"></li>
                                    <li data-target="#myCarousel" data-slide-to="2"></li>
                                    </ol>
                                        <div class="carousel-inner">
                                                <div class="item active">
                                                    <img src={require('./genaral.jpg')} alt="Los Angeles" className="downloadImage" />
                                                </div>

                                                <div class="item">
                                                    <img src={require('./genaral4.jpg')} alt="Chicago" className="downloadImage"/>
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

                            <div className="col-md-9 boxContent">
                                <h2><mark style={{backgroundColor:"Black",color:"yellow"}}>&nbsp;&nbsp;&nbsp;&nbsp;General&nbsp;&nbsp;&nbsp;&nbsp;</mark></h2>
                                    <Link to="/GenaralAnswer" style={{ color: 'navy', textShadow: '1px 1px 0px'  }}><h3>How to register with the web site?</h3></Link>
                                            <Link to="/SubtitleTVseries" style={{color: 'navy', textShadow: '1px 1px 0px' }}><h3>How do I format my posts and messages ?</h3></Link>
                                        
                                        <button className="btn btn-danger showMoreButton"><i class="fa fa-angle-double-down" aria-hidden="true"></i></button>
                            </div> 
                        </div> 
                    </div>

                    <div class="row"> 
                    <div className="col-md-12 box">                                               
                        
                        <div className="col-md-3 box2">
                            {/* <img src={require('./cc.png')} alt="" className="downloadImage"/> */}
                            <div id="myCarousel" class="carousel slide" data-ride="carousel">
                                    <ol class="carousel-indicators">
                                    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                                    <li data-target="#myCarousel" data-slide-to="1"></li>
                                    <li data-target="#myCarousel" data-slide-to="2"></li>
                                    </ol>
                                        <div class="carousel-inner">
                                                <div class="item active">
                                                    <img src={require('./cc.png')} alt="Los Angeles" className="downloadImage" />
                                                </div>

                                                <div class="item">
                                                    <img src={require('./cc2.jpg')} alt="Chicago" className="downloadImage"/>
                                                </div>
                                                
                                                <div class="item">
                                                    <img src={require('./cc3.jpg')} className="downloadImage"/>
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
                        <div className="col-md-9 boxContent">
                            <h2><mark style={{backgroundColor:"Black",color:"yellow"}}>&nbsp;&nbsp;&nbsp;Subtitles&nbsp;&nbsp;&nbsp;</mark></h2>
                                    <Link to="/SubAnswer" style={{ color: 'navy', textShadow: '1px 1px 0px' }}><h3>How to download Subtitles from the web site?</h3></Link>
                                    <Link to="/SubAnswer" style={{ color: 'navy', textShadow: '1px 1px 0px' }}><h3>How to register with the web site?</h3></Link>
                        
                                    <button className="btn btn-danger showMoreButton"><i class="fa fa-angle-double-down" aria-hidden="true"></i></button>
                        </div> 
                    </div> 
                    </div>

                    <div class="row"> 
                    <div className="col-md-12 box">                                               
                        
                        <div className="col-md-3 box2">
                            {/* <img src={require('./video.jpg')} alt="" className="downloadImage"/> */}
                            <div id="myCarousel" class="carousel slide" data-ride="carousel">
                                    <ol class="carousel-indicators">
                                    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                                    <li data-target="#myCarousel" data-slide-to="1"></li>
                                    <li data-target="#myCarousel" data-slide-to="2"></li>
                                    </ol>
                                        <div class="carousel-inner">
                                                <div class="item active">
                                                    <img src={require('./video.jpg')} alt="Los Angeles" className="downloadImage" />
                                                </div>

                                                <div class="item">
                                                    <img src={require('./video1.jpg')} alt="Chicago" className="downloadImage"/>
                                                </div>
                                                
                                                <div class="item">
                                                    <img src={require('./video2.jpg')} className="downloadImage"/>
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
                        <div className="col-md-9 boxContent">
                            <h2><mark style={{backgroundColor:"Black",color:"yellow"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Video&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</mark></h2>
                                    <Link to="/GenaralAnswer" style={{ color: 'navy', textShadow: '1px 1px 0px' }}><h3>How to download Videos from the web site?</h3></Link>
                                    <Link to="/SubtitleTVseries" style={{ color: 'navy', textShadow: '1px 1px 0px' }}><h3>How to register with the web site?</h3></Link>
                        
                                    <button className="btn btn-danger showMoreButton"><i class="fa fa-angle-double-down" aria-hidden="true"></i></button>
                        </div> 
                    </div> 
                    </div>
                    <div class="row"> 
                    <div className="col-md-12 box">                                               
                        
                        <div className="col-md-3 box2">
                            {/* <img src={require('./audio.jpg')} alt="" className="downloadImage"/> */}
                            <div id="myCarousel" class="carousel slide" data-ride="carousel">
                                    <ol class="carousel-indicators">
                                    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                                    <li data-target="#myCarousel" data-slide-to="1"></li>
                                    <li data-target="#myCarousel" data-slide-to="2"></li>
                                    </ol>
                                        <div class="carousel-inner">
                                                <div class="item active">
                                                    <img src={require('./audio.jpg')} alt="audio" className="downloadImage" />
                                                </div>

                                                <div class="item">
                                                    <img src={require('./audio1.jpg')} alt="genaral2" className="downloadImage"/>
                                                </div>
                                                
                                                <div class="item">
                                                    <img src={require('./audio2.jpg')} className="downloadImage"/>
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
                        <div className="col-md-9 boxContent">
                            <h2><mark style={{backgroundColor:"Black",color:"yellow"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Audio&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</mark></h2>
                                    <Link to="/GenaralAnswer" style={{ color: 'navy', textShadow: '1px 1px 0px' }}><h3>How to download Audios from the web site?</h3></Link>
                                    <Link to="/SubtitleTVseries" style={{ color: 'navy', textShadow: '1px 1px 0px' }}><h3>How to register with the web site?</h3></Link>
                        
                                    <button className="btn btn-danger showMoreButton"><i class="fa fa-angle-double-down" aria-hidden="true"></i></button>
                        </div> 
                    </div> 
                    </div>
                </div>
               
              
            </div>
            


        )
    }

}
