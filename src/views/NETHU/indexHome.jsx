import React, {Component } from 'react';
import './Home.css';
import {Link} from 'react-router-dom'
export default class Home extends Component{

    render(){
        return(
            
 
            
           <div className="container">
            <div className="col-md-12 text-center top-header1">  
                        <h1>Download Zoom Movies and Subtitles: HD smallest size</h1>
                    </div> 
                    <div className="col-md-12 text-center top-header2">  
                        <h6>Welcome to the official Zoom website. Here you will be able to browse and download Zoom movies ,Tv series and Subtitles</h6> 
                             <h6>in excellent 720p, 1080p and 3D quality, all at the smallest file size. Only here: Zoom Movies Torrents</h6>
                    </div> <br />
           <center><h2>Popular Movies Downloads</h2></center>
{/*1st row start here*/}
                <div className="row">
                <hr />
                    <div className="col-sm-6 col-md-3 col-xs-6 container2"> 
                        
                            <div className="thumbnail">
                                <img src={require('./d8.jpg')} className="image2 img-responsive" alt=""/>
                                <div className="caption">
                                    <div className="middle2">
                                        <div className="text2">
                                            <h3>10/10<br /><br />Action Crime</h3><br />
                                            <button type="button" className="btn btn-vdetails">View Details</button>
                                        </div>
                                        
                                    </div>
                                    <h4>Lampoon's Vacation</h4>
                                    <h6>2017</h6>
                                    
                                </div>
                                
                        </div>
                    </div>

                    <div className="col-sm-6 col-md-3 col-xs-6 container2"> 
                        
                            <div className="thumbnail">
                                <img src={require('./d9.jpg')} className="image2 img-responsive" alt=""/>
                                <div className="caption">
                                    <div className="middle2">
                                        <div className="text2">
                                            <h3>10/10<br /><br />Action Crime</h3><br />
                                            <button type="button" className="btn btn-vdetails">View Details</button>
                                        </div>
                                        
                                    </div>
                                    <h4>Deadpool 2</h4>
                                    <h6>2017</h6>
                                </div>
                                
                        </div>
                    </div>

                    <div className="col-sm-6 col-md-3 col-xs-6 container2"> 
                        
                        <div className="thumbnail">
                            <img src={require('./3.jpg')} className="image2 img-responsive" alt=""/>
                            <div className="caption">
                                <div className="middle2">
                                    <div className="text2">
                                        <h3>10/10<br /><br />Action Crime</h3><br />
                                        <button type="button" className="btn btn-vdetails">View Details</button>
                                    </div>
                                    
                                </div>
                                <h4>The Solo</h4>
                                <h6>2017</h6>
                            </div>
                            
                    </div>
                </div>

                    <div className="col-sm-6 col-md-3 col-xs-6 container2"> 
                        
                        <div className="thumbnail">
                            <img src={require('./4.jpg')} className="image2 img-responsive" alt=""/>
                            <div className="caption">
                                <div className="middle2">
                                    <div className="text2">
                                        <h3>10/10<br /><br />Action Crime</h3><br />
                                        <button type="button" className="btn btn-vdetails">View Details</button>
                                    </div>
                                    
                                </div>
                                <h4>Jurrasic World</h4>
                                <h6>2017</h6>
                            </div>
                            
                    </div>
                </div>


                </div>
                    
                    <div class="row ">
                        <div class="col-md-10">
                           
                        </div>
                        <div class="col-md-2">
                            <Link to="/moviePage_"><div className="textdesign2"><h4>Browse All</h4></div></Link>
                        </div>
                        
                    </div>

                    
<hr />
{/*1st row end here*/}                
        <center><h2>Latests Movies Downloads</h2></center>
        <div className="row">
                
                    <div className="col-sm-6 col-md-3 col-xs-6 container2"> 
                        
                            <div className="thumbnail">
                                <img src={require('./LA2.jpg')} className="image2 img-responsive" alt=""/>
                                <div className="caption">
                                    <div className="middle2">
                                        <div className="text2">
                                            <h3>10/10<br /><br />Action Crime</h3><br />
                                            <button type="button" className="btn btn-vdetails">View Details</button>
                                        </div>
                                        
                                    </div>
                                    <h4>Insidedeep Throa</h4>
                                    <h6>2017</h6>
                                    
                                </div>
                                
                        </div>
                    </div>

                    <div className="col-sm-6 col-md-3 col-xs-6 container2"> 
                        
                            <div className="thumbnail">
                                <img src={require('./LA3.jpg')} className="image2 img-responsive" alt=""/>
                                <div className="caption">
                                    <div className="middle2">
                                        <div className="text2">
                                            <h3>10/10<br /><br />Horror</h3><br />
                                            <button type="button" className="btn btn-vdetails">View Details</button>
                                        </div>
                                        
                                    </div>
                                    <h4>Cabaret of the Dead</h4>
                                    <h6>2018</h6>
                                </div>
                                
                        </div>
                    </div>

                    <div className="col-sm-6 col-md-3 col-xs-6 container2"> 
                        
                        <div className="thumbnail">
                            <img src={require('./LA4.jpg')} className="image2 img-responsive" alt=""/>
                            <div className="caption">
                                <div className="middle2">
                                    <div className="text2">
                                        <h3>10/10<br /><br />Action Crime</h3><br />
                                        <button type="button" className="btn btn-vdetails">View Details</button>
                                    </div>
                                    
                                </div>
                                <h4>Animal World</h4>
                                <h6>2017</h6>
                            </div>
                            
                    </div>
                </div>

                    <div className="col-sm-6 col-md-3 col-xs-6 container2"> 
                        
                        <div className="thumbnail">
                            <img src={require('./LA5.jpg')} className="image2 img-responsive" alt=""/>
                            <div className="caption">
                                <div className="middle2">
                                    <div className="text2">
                                        <h3>10/10<br /><br />Horror</h3><br />
                                        <button type="button" className="btn btn-vdetails">View Details</button>
                                    </div>
                                    
                                </div>
                                <h4>The Prey</h4>
                                <h6>2017</h6>
                            </div>
                            
                    </div>
                </div>
                <div class="row ">
                        <div class="col-md-10">
                           
                        </div>
                        <div class="col-md-2">
                            <Link to="/latestmovie"><div className="textdesign2"><h4>Browse All</h4></div></Link>
                        </div>
                        
                    </div>

                </div><hr />
                <center><h2>TV Series</h2></center>

                <div className="row">
                
                <div className="col-sm-6 col-md-3 col-xs-6 container2"> 
                    
                        <div className="thumbnail">
                            <img src={require('./tvn1.jpg')} className="image2 img-responsive" alt=""/>
                            <div className="caption">
                                <div className="middle2">
                                    <div className="text2">
                                        <h3>10/10<br /><br />Action Crime</h3><br />
                                        <button type="button" className="btn btn-vdetails">View Details</button>
                                    </div>
                                    
                                </div>
                                <h4>Grand Prix</h4>
                                <h6>2017</h6>
                                
                            </div>
                            
                    </div>
                </div>

                <div className="col-sm-6 col-md-3 col-xs-6 container2"> 
                    
                        <div className="thumbnail">
                            <img src={require('./tvn2.jpg')} className="image2 img-responsive" alt=""/>
                            <div className="caption">
                                <div className="middle2">
                                    <div className="text2">
                                        <h3>10/10<br /><br />Action Crime</h3><br />
                                        <button type="button" className="btn btn-vdetails">View Details</button>
                                    </div>
                                    
                                </div>
                                <h4>Grand Hotel</h4>
                                <h6>2017</h6>
                            </div>
                            
                    </div>
                </div>

                <div className="col-sm-6 col-md-3 col-xs-6 container2"> 
                    
                    <div className="thumbnail">
                        <img src={require('./tvn3.jpg')} className="image2 img-responsive" alt=""/>
                        <div className="caption">
                            <div className="middle2">
                                <div className="text2">
                                    <h3>10/10<br /><br />Action Crime</h3><br />
                                    <button type="button" className="btn btn-vdetails">View Details</button>
                                </div>
                                
                            </div>
                            <h4>Grand Piano</h4>
                            <h6>2017</h6>
                        </div>
                        
                </div>
            </div>

                <div className="col-sm-6 col-md-3 col-xs-6 container2"> 
                    
                    <div className="thumbnail">
                        <img src={require('./tvn4.jpg')} className="image2 img-responsive" alt=""/>
                        <div className="caption">
                            <div className="middle2">
                                <div className="text2">
                                    <h3>10/10<br /><br />Action Crime</h3><br />
                                    <button type="button" className="btn btn-vdetails">View Details</button>
                                </div>
                                
                            </div>
                            <h4>The Great Outdoors</h4>
                            <h6>2017</h6>
                        </div>
                        
                </div>
            </div>
            

            </div>

            <div class="row ">
                        <div class="col-md-10">
                           
                        </div>
                        <div class="col-md-2">
                            <Link to="/tvseries"><div className="textdesign2"><h4>Browse All</h4></div></Link>
                        </div>
                        
            </div>

            
            <hr />
            <div className="row ">
                        <div class="col-md-10">
                            <h2>Upcoming Movies</h2>
                        </div>
                        <div class="col-md-2">
                            <Link to="/login_"><div className="textdesign2"><h4>Request a movie</h4></div></Link>
                        </div>
                    <br /><br />
            </div>

            <div className="row">
                <div className="col-sm-6 col-md-3 col-xs-6 container2"> 
                        
                            <div className="thumbnail">
                                <img src={require('./UP1.jpg')} className="image2 img-responsive" alt=""/>
                                <div className="caption">
                                    <div className="middle2">
                                        <div className="text2">
                                            <h3>10/10<br /><br />Fantasy</h3><br />
                                            <button type="button" className="btn btn-vdetails">View Details</button>
                                        </div>
                                        
                                    </div>
                                    <h4>Hotel Transylvania 3</h4>
                                    <h6>2017</h6>
                                    
                                </div>
                                
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3 col-xs-6 container2"> 
                    
                        <div className="thumbnail">
                            <img src={require('./UP2.jpg')} className="image2 img-responsive" alt=""/>
                            <div className="caption">
                                <div className="middle2">
                                    <div className="text2">
                                        <h3>10/10<br /><br />Action Crime</h3><br />
                                        <button type="button" className="btn btn-vdetails">View Details</button>
                                    </div>
                                    
                                </div>
                                <h4>European Vacation</h4>
                                <h6>2017</h6>
                                
                            </div>
                            
                    </div>
                    
                </div>
                <div className="col-sm-6 col-md-3 col-xs-6 container2"> 
                    
                    <div className="thumbnail">
                        <img src={require('./up4.jpg')} className="image2 img-responsive" alt=""/>
                        <div className="caption">
                            <div className="middle2">
                                <div className="text2">
                                    <h3>10/10<br /><br />Fantacy</h3><br />
                                    <button type="button" className="btn btn-vdetails">View Details</button>
                                </div>
                                
                            </div>
                            <h4>The Grand Budapest Hotel</h4>
                            <h6>2017</h6>
                            
                        </div>
                        
                </div>
                
            </div>
            <div className="col-sm-6 col-md-3 col-xs-6 container2"> 
                    
                    <div className="thumbnail">
                        <img src={require('./up5.jpg')} className="image2 img-responsive" alt=""/>
                        <div className="caption">
                            <div className="middle2">
                                <div className="text2">
                                    <h3>10/10<br /><br />Action Crime</h3><br />
                                    <button type="button" className="btn btn-vdetails">View Details</button>
                                </div>
                                
                            </div>
                            <h4>The Grand Seduction</h4>
                            <h6>2017</h6>
                            
                        </div>
                        
                </div>
                
            </div>
            </div>

            </div>
           
          
    

              
        
        
        );
    }
}




                     