import React, {Component } from 'react';
import './moviePage.css';
import {Link} from 'react-router-dom';
//import searchmovies from 'searchmovies'
export default class latestmovie extends Component{
    myFunction = () => {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
    }
    render(){
        return(
         
            <div className="container">
                <div className="search-box">
                <h4>Search Term</h4><br />
{/*
                <ul className="nav navbar-nav navbar-right Auth">
                        <li><a data-toggle="modal" data-target="#myModal3"><span className="glyphicon glyphicon-user"></span> Search</a></li>
                        
                            
                            {/*<searchmovies />
                    </ul>*/}

                
                <form >
                                <div className="row">
                                    <div className="form-group input-group-lg">
                                        <input type="text" className="form-control" placeholder="Search" />
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-3 col-xs-3">
                                        <div class="form-group">
                                        <label for="sel1">Quality</label>
                                        <select class="form-control" >
                                            <option>All</option>
                                            <option>720p</option>
                                            <option>1080p</option>
                                            <option>3D</option>
                                        </select>
                                        </div>
                                    </div>
                                    <div class="col-lg-3 col-xs-3">
                                    <div class="form-group">
                                    <label for="sel1">Genre</label>
                                        <select class="form-control" >
                                            <option>All</option>
                                            <option>Action</option>
                                            <option>Adventure</option>
                                            <option>Fantacy</option>
                                            <option>Comedy</option>
                                        </select>
                                        </div>
                                    </div>
                                    <div class="col-lg-3 col-xs-3">
                                    <div class="form-group">
                                    <label for="sel1">Rating</label>
                                        <select class="form-control" >
                                            <option>9+</option>
                                            <option>8+</option>
                                            <option>7+</option>
                                            <option>6+</option>
                                            <option>5+</option>
                                        </select>
                                        </div>
                                    </div>
                                    <div class="col-lg-3 col-xs-3">
                                    <div class="form-group">
                                    <label for="sel1">Order</label>
                                        <select class="form-control" >
                                            <option>Latest</option>
                                            <option>Downloads</option>
                                            <option>Old</option>
                                        </select>
                                        </div>
                                    </div>
                                    </div>
                </form> 
                </div>

                <div className="col-md-12 text-center top-header1">  
                    <h2>1,500 YIFY Movies Found</h2> 
                </div> 
                <br /><br />
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
                                    <h4>Insidedeep Throat</h4>
                                    
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
                                    <h6>2017</h6>
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
                </div>
                <div className="row">

                    <div className="col-sm-6 col-md-3 col-xs-6 container2"> 
                        
                            <div className="thumbnail">
                                <img src={require('./LA6.jpg')} className="image2 img-responsive" alt=""/>
                                <div className="caption">
                                    <div className="middle2">
                                        <div className="text2">
                                            <h3>10/10<br /><br />Action Crime</h3><br />
                                            <button type="button" className="btn btn-vdetails">View Details</button>
                                        </div>
                                        
                                    </div>
                                    <h4>Tales from the Hood 2</h4>
                                    <h6>2017</h6>
                                    
                                </div>
                                
                        </div>
                    </div>

                    <div className="col-sm-6 col-md-3 col-xs-6 container2"> 
                        
                            <div className="thumbnail">
                                <img src={require('./LA7.jpg')} className="image2 img-responsive" alt=""/>
                                <div className="caption">
                                    <div className="middle2">
                                        <div className="text2">
                                            <h3>10/10<br /><br />Horror</h3><br />
                                            <button type="button" className="btn btn-vdetails">View Details</button>
                                        </div>
                                        
                                    </div>
                                    <h4>Leprechaun in the Hood</h4>
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
                                        <h3>10/10<br /><br />Horror</h3><br />
                                        <button type="button" className="btn btn-vdetails">View Details</button>
                                    </div>
                                    
                                </div>
                                <h4>Tales from the Crypt</h4>
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
                                <h4>Secario</h4>
                                <h6>2017</h6>
                            </div>
                            
                    </div>
                </div>
                <div className="row">

                    <div className="col-sm-6 col-md-3 col-xs-6 container2"> 
                        
                            <div className="thumbnail">
                                <img src={require('./medium-cover.jpg')} className="image2 img-responsive" alt=""/>
                                <div className="caption">
                                    <div className="middle2">
                                        <div className="text2">
                                            <h3>10/10<br /><br />Action Crime</h3><br />
                                            <button type="button" className="btn btn-vdetails">View Details</button>
                                        </div>
                                        
                                    </div>
                                    <h4>The First Purge</h4>
                                    
                                </div>
                                
                        </div>
                    </div>

                    <div className="col-sm-6 col-md-3 col-xs-6 container2"> 
                        
                            <div className="thumbnail">
                                <img src={require('./2.jpg')} className="image2 img-responsive" alt=""/>
                                <div className="caption">
                                    <div className="middle2">
                                        <div className="text2">
                                            <h3>10/10<br /><br />Action Crime</h3><br />
                                            <button type="button" className="btn btn-vdetails">View Details</button>
                                        </div>
                                        
                                    </div>
                                    <h4>Secario</h4>
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
                                <h4>Secario</h4>
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
                                <h4>Secario</h4>
                                <h6>2017</h6>
                            </div>
                            
                    </div>
                    </div>
                    </div>


                </div>




<div className="row pagina">
                        <center>
                        <ul className="pagination">
                                
                                <li class="active"><Link to="/moviePage">1</Link></li>
                                <li><a href="#">2</a></li>
                                <li><a href="#">3</a></li>
                                <li><a href="#">4</a></li>
                                <li><a href="#">5</a></li>
                                <li><a href="#">6</a></li>
                                <li><a href="#">7</a></li>
                                <li><a href="#">8</a></li>
                                <li><a href="#">9</a></li>
                                <li><a href="#">Next>></a></li>                                
                        </ul> 
                        </center>   
</div>

<div className="row pagina2">
                        <center>
                        <ul className="pagination">
                                
                                <li class="active"><Link to="/moviePage">1</Link></li>
                                
                                <li><a href="#">Next>></a></li>                                
                        </ul> 
                        </center>   
</div>
                </div>
        );
    }

}    