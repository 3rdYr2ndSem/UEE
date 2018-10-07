import React, {Component } from 'react';
import './moviePage.css';
import {Link} from 'react-router-dom';
//import searchmovies from 'searchmovies'
export default class moviePage extends Component{
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
                                            <option>All</option>
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
                    <h2>8,772 YIFY Movies Found</h2> 
                </div> 
                <br /><br />
                <div className="row">

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
                                <h4>The solo</h4>
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
                <div className="row">

                    <div className="col-sm-6 col-md-3 col-xs-6 container2"> 
                        
                            <div className="thumbnail">
                                <img src={require('./d.jpg')} className="image2 img-responsive" alt=""/>
                                <div className="caption">
                                    <div className="middle2">
                                        <div className="text2">
                                            <h3>10/10<br /><br />Action Crime</h3><br />
                                            <button type="button" className="btn btn-vdetails">View Details</button>
                                        </div>
                                        
                                    </div>
                                    <h4>Skyscraper</h4>
                                    <h6>2017</h6>
                                    
                                </div>
                                
                        </div>
                    </div>

                    <div className="col-sm-6 col-md-3 col-xs-6 container2"> 
                        
                            <div className="thumbnail">
                                <img src={require('./d1.jpg')} className="image2 img-responsive" alt=""/>
                                <div className="caption">
                                    <div className="middle2">
                                        <div className="text2">
                                            <h3>10/10<br /><br />Action Crime</h3><br />
                                            <button type="button" className="btn btn-vdetails">View Details</button>
                                        </div>
                                        
                                    </div>
                                    <h4>Old Yeller</h4>
                                    <h6>2017</h6>
                                </div>
                                
                        </div>
                    </div>

                    <div className="col-sm-6 col-md-3 col-xs-6 container2"> 
                        
                        <div className="thumbnail">
                            <img src={require('./d2.jpg')} className="image2 img-responsive" alt=""/>
                            <div className="caption">
                                <div className="middle2">
                                    <div className="text2">
                                        <h3>10/10<br /><br />Action Crime</h3><br />
                                        <button type="button" className="btn btn-vdetails">View Details</button>
                                    </div>
                                    
                                </div>
                                <h4>Spaceballs</h4>
                                <h6>2017</h6>
                            </div>
                            
                    </div>
                    </div>

                    <div className="col-sm-6 col-md-3 col-xs-6 container2"> 
                        
                        <div className="thumbnail">
                            <img src={require('./d3.jpg')} className="image2 img-responsive" alt=""/>
                            <div className="caption">
                                <div className="middle2">
                                    <div className="text2">
                                        <h3>10/10<br /><br />Horror</h3><br />
                                        <button type="button" className="btn btn-vdetails">View Details</button>
                                    </div>
                                    
                                </div>
                                <h4>Digging Up the Marrow</h4>
                                <h6>2017</h6>
                            </div>
                            
                    </div>
                </div>
                <div className="row">

                    <div className="col-sm-6 col-md-3 col-xs-6 container2"> 
                        
                            <div className="thumbnail">
                                <img src={require('./d4.jpg')} className="image2 img-responsive" alt=""/>
                                <div className="caption">
                                    <div className="middle2">
                                        <div className="text2">
                                            <h3>10/10<br /><br />Action Crime</h3><br />
                                            <button type="button" className="btn btn-vdetails">View Details</button>
                                        </div>
                                        
                                    </div>
                                    <h4>Black Cobra</h4>
                                    
                                </div>
                                
                        </div>
                    </div>

                    <div className="col-sm-6 col-md-3 col-xs-6 container2"> 
                        
                            <div className="thumbnail">
                                <img src={require('./d7.jpg')} className="image2 img-responsive" alt=""/>
                                <div className="caption">
                                    <div className="middle2">
                                        <div className="text2">
                                            <h3>10/10<br /><br />Fantacy</h3><br />
                                            <button type="button" className="btn btn-vdetails">View Details</button>
                                        </div>
                                        
                                    </div>
                                    <h4>Frozen</h4>
                                    <h6>2017</h6>
                                </div>
                                
                        </div>
                    </div>

                    <div className="col-sm-6 col-md-3 col-xs-6 container2"> 
                        
                        <div className="thumbnail">
                            <img src={require('./d5.jpg')} className="image2 img-responsive" alt=""/>
                            <div className="caption">
                                <div className="middle2">
                                    <div className="text2">
                                        <h3>10/10<br /><br />Action Crime</h3><br />
                                        <button type="button" className="btn btn-vdetails">View Details</button>
                                    </div>
                                    
                                </div>
                                <h4>Men in Black</h4>
                                <h6>2017</h6>
                            </div>
                            
                    </div>
                    </div>

                    <div className="col-sm-6 col-md-3 col-xs-6 container2"> 
                        
                        <div className="thumbnail">
                            <img src={require('./d6.jpg')} className="image2 img-responsive" alt=""/>
                            <div className="caption">
                                <div className="middle2">
                                    <div className="text2">
                                        <h3>10/10<br /><br />Adventure</h3><br />
                                        <button type="button" className="btn btn-vdetails">View Details</button>
                                    </div>
                                    
                                </div>
                                <h4>Black Dog</h4>
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