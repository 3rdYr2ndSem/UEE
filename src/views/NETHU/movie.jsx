import React, {Component } from 'react';
import './movie.css';
export default class movie extends Component{


    render(){
        return(
            <div className="nethu">
                      <div className="col-md-3">
                            <img src={require('./medium-cover.jpg')} alt="" className="downladedimage"/>
                      </div>
               
                      <div className="col-md-6">
                         <div className="headertext">
                            <h3>The First Purge</h3>
                            <h4>2018</h4>
                         </div>
                      </div>   
                      <div>
                      <iframe width="480" height="360" src="https://www.youtube.com/embed/UL29y0ah92w" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                      </div>
                    
            </div>        
        );

}

}