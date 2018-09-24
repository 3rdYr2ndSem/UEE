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
                    <div className="col-md-12">
                        <h3>Recent Movies</h3>
                        <div className="col-md-3">
                        <img src={require('./11.jpg')} className="relatedImages relatedImageone " alt=""/>
                        </div>
                        <div className="col-md-3">
                        <img src={require('./12.jpg')} className="relatedImages relatedImageTwo" alt=""/>
                        </div>
                        <div className="col-md-3">
                        <img src={require('./13.jpg')} className="relatedImages relatedImageTree" alt=""/>
                        </div>
                        <Link to="/MoviePage">
                        <div className="col-md-3">
                        <img src={require('./14.jpg')} className="relatedImages relatedImageFour" alt=""/>
                        </div>
                        </Link>
                     </div>

                   
                     <div className="col-md-12">
                        <h3>Most Popular Movies</h3>
                        <div className="col-md-3">
                        <img src={require('./11.jpg')} className="relatedImages relatedImageone " alt=""/>
                        </div>
                        <div className="col-md-3">
                        <img src={require('./12.jpg')} className="relatedImages relatedImageTwo" alt=""/>
                        </div>
                        <div className="col-md-3">
                        <img src={require('./13.jpg')} className="relatedImages relatedImageTree" alt=""/>
                        </div>
                        <div className="col-md-3">
                        <img src={require('./14.jpg')} className="relatedImages relatedImageFour" alt=""/>
                        </div>
                     </div>

                     <div className="col-md-12">
                        <h3>Popular Downloads</h3>
                        <img src={require('./11.jpg')} className="relatedImages relatedImageone " alt=""/>
                        <img src={require('./12.jpg')} className="relatedImages relatedImageTwo" alt=""/>
                        <img src={require('./13.jpg')} className="relatedImages relatedImageTree" alt=""/>
                        <img src={require('./14.jpg')} className="relatedImages relatedImageFour" alt=""/>
                     </div>
                     </div>

                     <div className="col-md-3 table-responsive">
                        <h3>Popular Downloads</h3>
                        <table class="table table-hover">
                            <thead>
                                <tr>
                                    <th>Test</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="table-hover">
                                    <td><ul><li><a>test</a></li></ul></td>
                                </tr>
                                <tr>
                                    <td><ul><li><a>test</a></li></ul></td>
                                </tr>
                                <tr>
                                    <td><ul><li><a>test</a></li></ul></td>
                                </tr>
                                <tr>
                                    <td><ul><li><a>test</a></li></ul></td>
                                </tr>
                                <tr>
                                    <td><ul><li><a>test</a></li></ul></td>
                                </tr>
                                <tr>
                                    <td><ul><li><a>test</a></li></ul></td>
                                </tr>
                            </tbody>
                        </table>
                     </div> 
                   
                </div>
            </div>
        );
    }

}