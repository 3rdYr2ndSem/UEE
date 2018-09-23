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
                    <div className="col-md-12">
                        <form action="">
                            <div class="form-group" >
                                <input type="email" className="form-control searchBar" placeholder="Search" />
                            </div>
                        </form> 
                    </div>
                    
                    
                    <div className="col-md-9">
                        <h3>Recent Movies</h3>
                        <img src={require('./11.jpg')} className="relatedImages relatedImageone " alt=""/>
                        <img src={require('./12.jpg')} className="relatedImages relatedImageTwo" alt=""/>
                        <img src={require('./13.jpg')} className="relatedImages relatedImageTree" alt=""/>
                        <img src={require('./14.jpg')} className="relatedImages relatedImageFour" alt=""/>
                     </div>

                     <div className="col-md-9">
                        <h3>Most Popular Movies</h3>
                        <img src={require('./11.jpg')} className="relatedImages relatedImageone " alt=""/>
                        <img src={require('./12.jpg')} className="relatedImages relatedImageTwo" alt=""/>
                        <img src={require('./13.jpg')} className="relatedImages relatedImageTree" alt=""/>
                        <img src={require('./14.jpg')} className="relatedImages relatedImageFour" alt=""/>
                     </div>

                     <div className="col-md-9">
                        <h3>Popular Downloads</h3>
                        <img src={require('./11.jpg')} className="relatedImages relatedImageone " alt=""/>
                        <img src={require('./12.jpg')} className="relatedImages relatedImageTwo" alt=""/>
                        <img src={require('./13.jpg')} className="relatedImages relatedImageTree" alt=""/>
                        <img src={require('./14.jpg')} className="relatedImages relatedImageFour" alt=""/>
                     </div>

                     
                   
                </div>
            </div>
        );
    }

}