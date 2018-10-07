import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import './englishMoviePg.css';

export default class subtitleMainPage extends Component{

    constructor(props){
        super(props)

    }

    render(){
        return(
            <div className="nipunaEM">
                <div className="col-md-12 ">
                    {/* <div className="col-md-12">
                        <form action="">
                            <div class="form-group" >
                                <input type="email" className="form-control searchBar" placeholder="Search" />
                            </div>
                        </form> 
                    </div> */}
                    
                    <div className="col-md-12 mobileList">
                    <center>
                    <div className="col-sm-12">
                        <center>
                        <h3>English Movies with Sinhala Subtitles</h3>
                        </center>
                        
                        <img src={require('./11.jpg')} className="relatedImages relatedImageone " alt=""/>
                        
                        
                        <img src={require('./jurassic-world.jpg')} className="relatedImages relatedImageTwo" alt=""/>
                        
                        
                        <img src={require('./sicario.jpg')} className="relatedImages relatedImageTree" alt=""/>
                        
                        <Link to="/MoviePage">
                    
                        <img src={require('./deadpool.jpg')} className="relatedImages relatedImageFour" alt=""/>
                    
                    
                        </Link>
                     </div>

                   
                    
                        <div className="col-md-12">
                        <img src={require('./avatar.jpg')} className="relatedImages relatedImageone " alt=""/>
                    
                        
                        <img src={require('./battleship.jpg')} className="relatedImages relatedImageTwo" alt=""/>
                    
                    
                        <img src={require('./f&s.jpg')} className="relatedImages relatedImageTree" alt=""/>
                    
                        
                        <img src={require('./pradetors.jpg')} className="relatedImages relatedImageFour" alt=""/>
                    
                    
                        </div>
                    
                        <div className="col-md-12">
                        <img src={require('./infinitywar.jpg')} className="relatedImages relatedImageone " alt=""/>
                        
                        
                        <img src={require('./blackpanther.jpg')} className="relatedImages relatedImageTwo" alt=""/>
                    
                        
                        <img src={require('./24hours.jpg')} className="relatedImages relatedImageTree" alt=""/>
                    
                        
                        <img src={require('./skyscrapper.jpg')} className="relatedImages relatedImageFour" alt=""/>
                        
                        </div>
                        </center>
                     </div>

                     
                        
                   
                </div>
            </div>
        );
    }

}