import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import './subtitleMain.css';

export default class subtitleMainPage extends Component{

    constructor(props){
        super(props)

    }

    render(){
        return(
            <div className="nipuna">
                <div className="col-md-12 ">
                    {/* <div className="col-md-12">
                        <form action="">
                            <div class="form-group" >
                                <input type="email" className="form-control searchBar" placeholder="Search" />
                            </div>
                        </form> 
                    </div> */}
                    
                    <div className="col-md-9 mobileList">
                    <div className="col-md-12">
                        <center>
                        <h3>Recent Movies</h3>
                        </center>
                    
                        <img src={require('./11.jpg')} className="relatedImages relatedImageone " alt=""/>
                        
                        <img src={require('./jurassic-world.jpg')} className="relatedImages relatedImageTwo" alt=""/>
                        
                        <img src={require('./sicario.jpg')} className="relatedImages relatedImageTree" alt=""/>
                        
                        <Link to="/MoviePage">
                    
                        <img src={require('./deadpool.jpg')} className="relatedImages relatedImageFour" alt=""/>
                    
                    
                        </Link>
                     </div>

                   
                     <div className="col-md-12">
                     <center>
                        <h3>Most Popular Movies</h3>
                        </center>
                        
                        <img src={require('./avatar.jpg')} className="relatedImages relatedImageone " alt=""/>
                    
                        
                        <img src={require('./battleship.jpg')} className="relatedImages relatedImageTwo" alt=""/>
                    
                    
                        <img src={require('./f&s.jpg')} className="relatedImages relatedImageTree" alt=""/>
                    
                        
                        <img src={require('./pradetors.jpg')} className="relatedImages relatedImageFour" alt=""/>
                    
                     </div>

                     <div className="col-md-12">
                        <center>
                        <h3>Popular Downloads</h3>
                        </center>
                        
                        <img src={require('./infinitywar.jpg')} className="relatedImages relatedImageone " alt=""/>
                        
                        
                        <img src={require('./blackpanther.jpg')} className="relatedImages relatedImageTwo" alt=""/>
                    
                        
                        <img src={require('./24hours.jpg')} className="relatedImages relatedImageTree" alt=""/>
                    
                        
                        <img src={require('./skyscrapper.jpg')} className="relatedImages relatedImageFour" alt=""/>
                        
                     </div>
                     </div>
                     <br/>

                     <div id="sidebar" className="col-md-3 table-responsive">
                        <h3 >Browse All Media</h3>
                        <ul class="list-group">
                            <Link to="/englishMoviePage">
                            <li class="list-group-item"><a href="#">English Movies</a> <span class="badge">1249</span></li>
                            </Link>
                            <li class="list-group-item"><a href="#">Tamil Movies</a> <span class="badge">480</span></li>
                            <li class="list-group-item"><a href="#">Hindi Movies</a> <span class="badge">466</span></li>
                            <li class="list-group-item"><a href="#">Various Movies</a> <span class="badge">133</span></li>
                            <li class="list-group-item"><a href="#">SINBAD[TV]</a> <span class="badge">6</span></li>
                            <li class="list-group-item"><a href="#">REVOLUTION[TV]</a> <span class="badge">2</span></li>
                            <li class="list-group-item"><a href="#">SHERLOCK[TV]</a> <span class="badge">5</span></li>
                            <li class="list-group-item"><a href="#">ARROW[TV]</a> <span class="badge">7</span></li>
                            <li class="list-group-item"><a href="#">WALKING DEAD[TV]</a> <span class="badge">8</span></li>
                        </ul>
                     </div> 
                        
                   
                </div>
            </div>
        );
    }

}